import DefaultLayout from "../components/layouts/DefaultLayout";
import { FaAirbnb, FaHotel } from "react-icons/fa";

export default function Accommodation() {
  return (
    <DefaultLayout title="Accommodation" backgroundClass="backgroundAlt">
      <section id="accommodation">
        <div className="section-background accommodation">
          <div className="container">
            <h1 className="textOverlay-container">Accommodation</h1>
          </div>
        </div>
        <div className="py-5 backgroundAlt">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6">
                <div className="h-100">
                  <p>Hi Everyone,</p>
                  <p>
                    Well this hasn&apos;t been as straightforward as we&apos;d
                    hoped. The wedding venue has recommended a number of hotels
                    in the area but we feel they are a bit pricey. The
                    <a
                      href="https://www.worcesterwhitehouse.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Worcester Whitehouse Hotel
                    </a>{" "}
                    offers a{" "}
                    <b>
                      10% discount if you mention you are attending a wedding at
                      Oakfield Gardens
                    </b>
                    . If and when other suitable options become available
                    we&apos;ll add them to this page
                  </p>
                  <p>
                    However there are{" "}
                    <b>plenty of Airbnb&apos;s and guest houses in the area</b>{" "}
                    which we feel could be a better option... that&apos;s what
                    we&apos;ve decided to do! If you are planning to stay over
                    we would recommend you{" "}
                    <b>don&apos;t leave it too long to book somewhere</b>,
                    it&apos;s a really busy time of year and places get booked
                    up quickly.
                  </p>
                  <p>So book early!!! XX</p>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="d-flex h-100 flex-column justify-content-center">
                  <a
                    href="https://airbnb.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100 py-2 td-none"
                  >
                    <div className="card whatsOnCard accomCard airbnb mx-auto">
                      <h3 className="h1">
                        <FaAirbnb />
                      </h3>
                      <p className="px-2">Go To AirBnb</p>
                    </div>
                  </a>
                  <a
                    href="https://www.worcesterwhitehouse.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100 py-2 td-none"
                  >
                    <div className="card whatsOnCard accomCard hotel mx-auto">
                      <h3 className="h1">
                        <FaHotel />
                      </h3>
                      <p className="px-2">
                        Go To Worcester Whitehouse Hotel
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
