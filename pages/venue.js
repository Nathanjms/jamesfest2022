import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";
import { IoMapSharp } from "react-icons/io5";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "venue",
});

export default function Venue({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Venue" backgroundClass="backgroundAlt">
      <section id="venue">
        <div className="section-background venue">
          <div className="container">
            <h1 className="textOverlay-container">Venue</h1>
          </div>
        </div>
        <div className="section backgroundAlt">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4">
                <h2 className="h4">Location of the Venue</h2>
                <div className="textOverlay-container venue-container my-3">
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
                <p>
                  There is a car park at the venue and you can leave your car
                  overnight if required. After arriving, simply follow the signs
                  to the ceremony. The venue will be locked at 12 midnight.
                </p>
                <p>For directions, click the map below to go to Google Maps:</p>
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
              <div className="col-md-6 mb-4">
                <h2 className="h4">Venue Map</h2>
                <a
                  href="/weddingMapFull.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100 py-2 td-none"
                >
                  <Image
                    src="/weddingMap.png"
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
