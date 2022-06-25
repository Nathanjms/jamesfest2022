import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

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
        <div id="venueBackground" className="d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-md-10 text-center"
                style={{ maxWidth: "600px" }}
              >
                <div className="textOverlay-container venue-container my-3">
                  <h1 className="pb-3">Venue</h1>
                  <h2 className="h5">Oakfield Gardens</h2>
                  <p>
                    The River School
                    <br />
                    Droitwich Road
                    <br />
                    Worcester
                    <br />
                    WR3 7ST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section backgroundAlt">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
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
                >
                  <Image
                    src="/Maps.webp"
                    alt="Google Maps Screenshot of Oakfield Gardens"
                    height="400"
                    width="450"
                    className="border-5"
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
