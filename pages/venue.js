import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { IoMapSharp } from "react-icons/io5";

export default function Venue() {
  return (
    <DefaultLayout title="Venue">
      <section id="venue">
        <div className="section-background venue">
          <div className="container">
            <h1 className="textOverlay-container">Venue</h1>
          </div>
        </div>
        <div className="section backgroundAlt">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="h4">Location of the Venue</h2>
                <div className="textOverlay-container venue-container venueAddress px-5 my-3">
                  <h3 className="h5">Oakfield Gardens</h3>
                  <p className="mb-0">
                    The River School
                    <br />
                    Droitwich Road
                    <br />
                    Worcester
                    <br />
                    WR3 7ST
                  </p>
                </div>
                <div className="venueInfo mx-auto py-3">
                  <p>
                    There is a car park at the venue and you can leave your car
                    overnight if required. After arriving, simply follow the
                    signs to the ceremony. The venue will be locked at 12
                    midnight.
                  </p>
                </div>
                <a
                  href="https://goo.gl/maps/cihWvG7oFdzG82Pk9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100 py-2 td-none"
                >
                  <div className="card whatsOnCard venueCard mx-auto text-black">
                    <h3 className="h1">
                      <IoMapSharp />
                    </h3>
                    <p className="px-2">Click here for directions</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section pb-1 backgroundPrimary">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="h4">Venue Map</h2>
                <p>Click the map below to see it in more detail!</p>
                <a
                  href="/venue/weddingMapFull.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100 py-2 td-none"
                >
                  <Image
                    src="/venue/weddingMap.png"
                    alt="Map of the venue"
                    height="400"
                    width="450"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
