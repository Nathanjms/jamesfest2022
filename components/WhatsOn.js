import { FaIceCream, FaMusic } from "react-icons/fa";
import { GiMicrophone, GiTeapot } from "react-icons/gi";
import { MdOutlinePark } from "react-icons/md";

export default function WhatsOn() {
  return (
    <section className="section pb-0">
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
        Firstly, the venue. We know you&apos;ll love its beautiful trees,
        natural grounds and wonderful countryside views. Back in the 1930&apos;s
        it was a horticultural college which explains why so many lovely and
        unusual trees can be found there. We have chosen a &quot;special&quot;
        tree, around which we intend to hold our wedding ceremony…
      </>
    ),
    fullWidth: true,
  },

  {
    icon: <GiTeapot />,
    text: (
      <>
        After the ceremony, you can enjoy a reception drink while taking in the
        breath-taking scenery or maybe take a leisurely wander around the
        grounds. After some photographs, we&apos;ll all be served an afternoon
        tea in our magical tipi.
      </>
    ),
    fullWidth: false,
  },
  {
    icon: <FaMusic />,
    text: (
      <>
        We have a great afternoon planned for you; a series of musical acts
        throughout the day, with some lively communal games to keep us on our
        toes. Let&apos;s try to break the record for the most people playing in
        a rounder&apos;s game!!
      </>
    ),
    fullWidth: false,
  },
  {
    icon: <FaIceCream />,
    text: (
      <>
        We&apos;ll have an antique ice cream cart on duty throughout the
        afternoon and of course an outdoor bar. In the early evening we will be
        serving street food outside the tipi.
      </>
    ),
    fullWidth: false,
  },
  {
    icon: <GiMicrophone />,
    text: (
      <>
        As the sun starts to set we plan to stage a communal sing-along around
        the fire-pits, before returning to the tipi for an all-night dance off
        with the fabulous Ellie Jones and the Giants.
      </>
    ),
    fullWidth: false,
  },
];

export { WhatsOnCard, whatsOnContent };
