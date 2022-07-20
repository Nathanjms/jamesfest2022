import DefaultLayout from "../components/layouts/DefaultLayout";
import StyledDropzone from "../components/Dropzone";
import { withSessionSsr } from "../lib/withSession";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const user = req?.session?.user;
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login#photos",
      },
    };
  }
  return {
    props: {
      user,
      folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
    },
  };
});

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [nextQuery, setNextQuery] = useState({});

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("/api/photos/get");
      let data = await response.json();
      setPhotos(data.files);

      if (data?.nextQuery) {
        setNextQuery(data.nextQuery);
      }
    }
    fetchData();
  }, []);

  const handleNextQuery = async () => {
    setNextQuery("");
    let response = await fetch(
      `/api/photos/get?pageToken=${nextQuery.pageToken}&maxResults=${nextQuery.maxResults}`
    );
    let data = await response.json();
    setPhotos((prevPhotos) => [...prevPhotos, ...data.files]);

    if (data?.nextQuery) {
      setNextQuery(data.nextQuery);
    }
  };
  return (
    <DefaultLayout title="Photos" backgroundClass="backgroundAlt">
      <section id="photos">
        <div className="section-background photos">
          <div className="container">
            <h1 className="textOverlay-container">Photos</h1>
          </div>
        </div>
        <div className="py-5">
          <div className="container text-center">
            <div className="row customCard mx-auto shadow">
              <div className="col-12 d-flex flex-column justify-content-center">
                <p>
                  If you have any photos of the day that you would like to
                  share, we would love to see them! Please upload them below.
                </p>
                <form name="dropzoneForm" id="dropzoneForm">
                  <StyledDropzone />
                </form>
              </div>
            </div>
            <div className="row justify-content-center customCard mx-auto shadow">
              {photos.map((photo) => {
                return (
                  <div key={photo.id} className="col-6 col-md-4 col-lg-3">
                    <a
                      href={photo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={photo.url}
                        alt="An uploaded image from JamesFest"
                        height="200"
                        width="200"
                        objectFit="scale-down"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAHYAdgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECEQMSMf/EABcBAQEBAQAAAAAAAAAAAAAAAAIBAAP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A9ojIkKlTqailU06mopVNOlUVNKnSVCIyVgCHVQwnoVHpFQVFSqbTqLUtUWptFqbRtLBSHQOrhAybWxNKqqKUqYVpWlam05RV0M/oKj1yppoqm1narVZ6o2rCtT0Wp65WnIrpolVB9HigAsqYmo0us9HKNjPVZ3St1jqnKFP6DK6BC+gqapGkVGmWq00y0FKItLoqXHqukXKuM4uOZrgEM4iKy210y26QKw3XPut/RzbrpAqboM7QQvp6mqRWZnplprploaUZ0jpOPUdIqLyiLgYWrhlDOQbUaZba6ZbOQbXN6Ob0dPo5tnIFYX9B2A8F9OmmmsyNMtNdM6NhRnSVS4FhSnFxMVE8rqoZApE1OmW2umWykHXPtz7jp2w3CkG1z2BdgLEfQpplUZFRV1FRYikqkmEcOFFRsbTAJcHU1nppWelxNY7Y6jfTHRIysCrArPbKgCyKmgISKAGUKgDIBQFRNZ6AVGWmWgFRFADM/9k="
                      />
                    </a>
                  </div>
                );
              })}
              {Object.keys(nextQuery).length > 0 && (
                <Button variant="primary" onClick={handleNextQuery}>
                  See More!
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
