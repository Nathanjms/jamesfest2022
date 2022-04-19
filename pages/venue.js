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
    <DefaultLayout title="Venue">
      <section id="venue" className="section">
        <div id="venueBackground" className="d-flex align-items-center">
          <div className="container">
            <div className="textOverlay-container venue-container m-auto">
              <h1 className="pb-3">Venue</h1>
              <div className="row pb-3">
                <div className="col-md-9 m-auto">
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
              <div className="col-12 pb-3">
                <h3>Google Maps</h3>
                <p>Click the map below to navigate to Google Maps</p>
              </div>
              <div className="col-12">
                <a
                  href="https://www.google.com/maps/place/Claines,+Worcester+WR3+7ST/@52.225868,-2.2120985,17z/data=!3m1!4b1!4m5!3m4!1s0x4870f1a67a9d5cef:0x911a8e2b4e4c8097!8m2!3d52.2257742!4d-2.2085095"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Maps.webp"
                    alt="Google Maps Screenshot"
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
