import Image from "next/image";
import React, { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
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
  cursor: "pointer",
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

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const uploadPhoto = async (files) => {
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
          console.error(res?.message ?? "No message found");
          toast.error(`Error ${status}: Error uploading images`);
        }
      })
      .catch((err) => {
        console.error(err?.message ?? "No message found");
        toast.error(`Error 500: Error uploading images.`);
      })
      .finally(() => {
        setFiles([]);
        toast.dismiss(loadingToast);
      });
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
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

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    uploadPhoto(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] }, onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container">
      <Toaster position="top-right" />
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </div>
    </div>
  );
}

<StyledDropzone />;
