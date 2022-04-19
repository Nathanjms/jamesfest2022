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
            {whatsOnContent.map((content, index) => {
              return <WhatsOnCard content={content} key={index} />;
            })}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

const WhatsOnCard = ({ content }) => {
  return (
    <div
      className={
        "whatsOnCardContainer col-md-" + (content.fullWidth ? "12" : "6")
      }
    >
      <div className="card h-100 whatsOnCard">
        <h3 className="h1">{content.icon}</h3>
        <p className="ps-2 pe-2">{content.text}</p>
      </div>
    </div>
  );
};

const whatsOnContent = [
  {
    icon: <MdOutlinePark />,
    text: (
      <>
        Firstly the venue, we think you’ll love it. The venue has beautiful
        trees, natural grounds and wonderful countryside views. Back in the
        1930’s it was a horticultural college which explains why so many lovely
        and unusual trees can be found here... In fact, we have chosen a
        &quot;special&quot; tree, under which, we intend to hold our wedding
        ceremony, with you all very close by, lounging on hay bales.
      </>
    ),
    fullWidth: true,
  },

  {
    icon: <GiTeapot />,
    text: (
      <>
        After the ceremony, you can relax or take a wander around the grounds
        while enjoying reception drinks, followed closely by an afternoon tea in
        our magical tipi.
      </>
    ),
    fullWidth: false,
  },
  {
    icon: <MdSportsCricket />,
    text: (
      <>
        We have a great afternoon planned for you; a series of musical acts
        throughout the day, along with heaps of communal games. Let’s try to
        break the record for the most people playing in a rounder’s game!!
      </>
    ),
    fullWidth: false,
  },
  {
    icon: <FaIceCream />,
    text: (
      <>
        We’ll have an antique ice cream cart on duty throughout the afternoon
        and of course an outdoor bar. In the early evening, we will have street
        food available outside the tipi.
      </>
    ),
    fullWidth: false,
  },
  {
    icon: <FaMusic />,
    text: (
      <>
        We are planning a mammoth communal sing-along around fire-pits while the
        sun is setting, before dancing all night long to the fabulous Ellie
        Jones and the Giants.
      </>
    ),
    fullWidth: false,
  },
];

export { WhatsOnCard, whatsOnContent };
