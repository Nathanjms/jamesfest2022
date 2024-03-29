import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Alert } from "react-bootstrap";
import FsLightbox from "fslightbox-react";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [nextQuery, setNextQuery] = useState({});
  const [error, setError] = useState("");
  const [initialLoading, setInitialLoading] = useState(true);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("/api/photos/get");
        let data = await response.json();
        setPhotos(data.files);

        if (data?.nextQuery) {
          setNextQuery(data.nextQuery);
        }
      } catch (err) {
        setError(
          "Error fetching data, please try again later and if the problem persists, get in touch."
        );
      }
      setInitialLoading(false);
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

  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };

  return (
    <div className="row justify-content-center customCard mx-auto shadow">
      <h2 className="h3">Photo Gallery</h2>
      <p>Click an image to view it in fullscreen</p>
      {error.length > 0 && <Alert variant="danger">{error}</Alert>}
      {initialLoading && <SkeletonLoader />}
      {!initialLoading && photos.length === 0 && (
        <div className="col-12">
          <p>No photos found.</p>
          <p>
            <i>Tip: Upload some above!</i>
          </p>
        </div>
      )}
      {photos.map((photo, index) => {
        return (
          <div key={photo.id} className="col-6 col-md-4 col-lg-3 py-1">
            <Image
              style={{ cursor: "pointer" }}
              onClick={() => openLightboxOnSlide(index)}
              src={photo.url}
              alt="An uploaded image from JamesFest"
              height="200"
              width="200"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAHYAdgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECEQMSMf/EABcBAQEBAQAAAAAAAAAAAAAAAAIBAAP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A9ojIkKlTqailU06mopVNOlUVNKnSVCIyVgCHVQwnoVHpFQVFSqbTqLUtUWptFqbRtLBSHQOrhAybWxNKqqKUqYVpWlam05RV0M/oKj1yppoqm1narVZ6o2rCtT0Wp65WnIrpolVB9HigAsqYmo0us9HKNjPVZ3St1jqnKFP6DK6BC+gqapGkVGmWq00y0FKItLoqXHqukXKuM4uOZrgEM4iKy210y26QKw3XPut/RzbrpAqboM7QQvp6mqRWZnplprploaUZ0jpOPUdIqLyiLgYWrhlDOQbUaZba6ZbOQbXN6Ob0dPo5tnIFYX9B2A8F9OmmmsyNMtNdM6NhRnSVS4FhSnFxMVE8rqoZApE1OmW2umWykHXPtz7jp2w3CkG1z2BdgLEfQpplUZFRV1FRYikqkmEcOFFRsbTAJcHU1nppWelxNY7Y6jfTHRIysCrArPbKgCyKmgISKAGUKgDIBQFRNZ6AVGWmWgFRFADM/9k="
            />
          </div>
        );
      })}
      {Object.keys(nextQuery).length > 0 && (
        <Button
          variant="primary"
          className="mt-2"
          style={{ width: "75%" }}
          onClick={handleNextQuery}
        >
          See More!
        </Button>
      )}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={photos.map((photo) => photo.url)}
        type="image"
        sourceIndex={lightboxController.slide}
        key={photos.length}
      />
    </div>
  );
}

const SkeletonLoader = () => {
  let loadersArray = [];
  for (let i = 0; i < 12; i++) {
    loadersArray.push(
      <div
        key={i}
        aria-hidden="true"
        className="placeholder-glow col-6 col-md-4 col-lg-3 py-1"
      >
        <Image
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAHYAdgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECEQMSMf/EABcBAQEBAQAAAAAAAAAAAAAAAAIBAAP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A9ojIkKlTqailU06mopVNOlUVNKnSVCIyVgCHVQwnoVHpFQVFSqbTqLUtUWptFqbRtLBSHQOrhAybWxNKqqKUqYVpWlam05RV0M/oKj1yppoqm1narVZ6o2rCtT0Wp65WnIrpolVB9HigAsqYmo0us9HKNjPVZ3St1jqnKFP6DK6BC+gqapGkVGmWq00y0FKItLoqXHqukXKuM4uOZrgEM4iKy210y26QKw3XPut/RzbrpAqboM7QQvp6mqRWZnplprploaUZ0jpOPUdIqLyiLgYWrhlDOQbUaZba6ZbOQbXN6Ob0dPo5tnIFYX9B2A8F9OmmmsyNMtNdM6NhRnSVS4FhSnFxMVE8rqoZApE1OmW2umWykHXPtz7jp2w3CkG1z2BdgLEfQpplUZFRV1FRYikqkmEcOFFRsbTAJcHU1nppWelxNY7Y6jfTHRIysCrArPbKgCyKmgISKAGUKgDIBQFRNZ6AVGWmWgFRFADM/9k="
          alt="Loading Image"
          height={200}
          width={200}
          className="placeholder"
        />
      </div>
    );
  }
  return (
    <>
      <p className="visually-hidden">Loading...</p>
      {loadersArray}
      <div className="placeholder-glow">
        <Button
          variant="primary"
          className="mt-2 placeholder"
          style={{ width: "75%" }}
          disabled={true}
        ></Button>
      </div>
    </>
  );
};
