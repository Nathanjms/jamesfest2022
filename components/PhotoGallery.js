import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [nextQuery, setNextQuery] = useState({});
  const [initialLoading, setInitialLoading] = useState(true);

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
    setInitialLoading(false);
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
    <div className="row justify-content-center customCard mx-auto shadow">
      {initialLoading && <div className="col-12">Loading...</div>}
      {!initialLoading && photos.length === 0 && (
        <div className="col-12">
          <p>No photos found.</p>
          <p>
            <i>Tip: Upload some above!</i>
          </p>
        </div>
      )}
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="col-6 col-md-4 col-lg-3">
            <a href={photo.url} target="_blank" rel="noopener noreferrer">
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
        <Button
          variant="primary"
          style={{ width: "75%" }}
          onClick={handleNextQuery}
        >
          See More!
        </Button>
      )}
    </div>
  );
}
