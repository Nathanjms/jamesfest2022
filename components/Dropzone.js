import Image from "next/image";
import React, { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import toast, { Toaster } from "react-hot-toast";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#D2D2D2",
  color: "#616161",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

export default function StyledDropzone(props) {
  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const uploadPhotos = async (e) => {
    e.stopPropagation(); // Stop the dropzone from being clicked too
    setIsUploading(true);
    const formData = new FormData();

    files.map((file) => {
      formData.append("assets", file);
    });
    const loadingToast = toast.loading("Uploading Images...");
    let status;
    fetch(`/api/upload`, {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        status = res.status;
        return res.json();
      })
      .then((res) => {
        if (status === 200) {
          toast.success("Images uploaded successfully.");
        } else {
          let errMsg = res?.message ?? "Uploading Images failed";
          console.error(res?.debug ?? "No debug found");
          toast.error(`Error ${status}: ${errMsg}`);
        }
      })
      .catch((err) => {
        let errMsg = res?.message ?? "Uploading Images failed";
        console.error(err?.debug ?? "No debug found");
        toast.error(`Error 500: ${errMsg}.`);
      })
      .finally(() => {
        setFiles([]);
        setRejectedFiles([]);
        toast.dismiss(loadingToast);
        setIsUploading(false);
      });
  };

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={index}>
      <div style={thumbInner}>
        <Image
          src={file.preview}
          alt="File Preview"
          height={100}
          width={100}
          objectFit="scale-down"
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      setRejectedFiles(fileRejections);
    }
    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
  }, []);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "image/*": [] },
      onDrop,
      disabled: isUploading,
      maxFiles: 10,
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const RejectedFiles = () => {
    return (
      <div className="text-start">
        <p>There were errors with some of your files:</p>
        <ul>
          {rejectedFiles.map(({ file, errors }) => {
            return (
              <li key={file.path}>
                {file.path} - {file.size} bytes
                <ul>
                  {errors.map((e) => (
                    <li key={e.code}>{e.message}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isUploading ? (
          <p>Uploading your photos, please wait...</p>
        ) : (
          <>
            <p>Drag &amp; drop some files here, or click to select files.</p>
            <em>
              (10 files are the maximum number of files you can upload in one
              go)
            </em>
          </>
        )}
        {files.length > 0 && (
          <>
            <Button
              variant="primary"
              size="sm"
              className="mt-3 mb-1"
              disabled={isUploading}
              onClick={uploadPhotos}
            >
              Click to finish Upload!
            </Button>
            <aside style={thumbsContainer} className="justify-content-center">
              {thumbs}
            </aside>
          </>
        )}
      </div>
      {rejectedFiles.length > 0 && <RejectedFiles />}
    </div>
  );
}

<StyledDropzone />;
