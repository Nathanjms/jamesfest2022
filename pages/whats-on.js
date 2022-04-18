import { FaIceCream, FaMusic } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";
import { MdOutlinePark, MdSportsCricket } from "react-icons/md";
import DefaultLayout from "../components/layouts/DefaultLayout";

export default function WhatsOn() {
  return (
    <DefaultLayout footerAlt={true}>
      <section className="section">
        <div className="container text-center">
          <h2 className="h3 mb-3">
            Here&apos;s what we&apos;ve got planned (at the moment)
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-12 whatsOnCardContainer">
              <div className="card h-100 whatsOnCard">
                <h3 className="h1">
                  <MdOutlinePark />
                </h3>
                Firstly the venue, we think you’ll love it. We chose the river
                school as we liked the beautiful trees, natural grounds and
                wonderful countryside views. Back in the 1930’s it was a
                horticultural college which explains why so many lovely and
                unusual trees can be found here... In fact, we have chosen a
                &quot;special&quot; tree, under which, we intend to hold our
                wedding ceremony, with you all very close by, lounging on hay
                bales.
              </div>
            </div>
            <div className="col-md-6 whatsOnCardContainer">
              <div className="card h-100 whatsOnCard">
                <h3 className="h1">
                  <GiTeapot />
                </h3>
                After the ceremony, you can relax or take a wander around the
                grounds while enjoying reception drinks, followed closely by an
                afternoon tea in our magical tipi.
              </div>
            </div>
            <div className="col-md-6 whatsOnCardContainer">
              <div className="card h-100 whatsOnCard">
                <h3 className="h1">
                  <MdSportsCricket />
                </h3>
                We have a great afternoon planned for you; a series of musical
                acts throughout the day, along with heaps of communal games.
                Let’s try to break the record for the most people playing in a
                rounder’s game!!
              </div>
            </div>
            <div className="col-md-6 whatsOnCardContainer">
              <div className="card h-100 whatsOnCard">
                <h3 className="h1">
                  <FaIceCream />
                </h3>
                We’ll have an antique ice cream cart on duty throughout the
                afternoon and of course an outdoor bar. In the early evening, we
                will have street food available outside the tipi.
              </div>
            </div>
            <div className="col-md-6 whatsOnCardContainer">
              <div className="card h-100 whatsOnCard">
                <h3 className="h1">
                  <FaMusic />
                </h3>
                We are planning a mammoth communal sing-along around fire-pits
                while the sun is setting, before dancing all night long to the
                fabulous Ellie Jones and the Giants.
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-3">
            <div className="col-12 whatsOnCardContainer">
              With all this in mind, please keep your fingers and everything
              else crossed for good weather.
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
