import { whatsOnContent } from "./data/whatsOnContent";

export default function WhatsOn() {
  return (
    <section className="section pb-4">
      <div className="container text-center">
        <h2 className="h3 mb-3">
          Here&apos;s what we&apos;ve got planned (at the moment)
        </h2>
        <div className="row justify-content-center">
          {whatsOnContent.map((content, index) => (
            <WhatsOnCard content={content} key={index} />
          ))}
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
        <p className="px-2">{content.text}</p>
      </div>
    </div>
  );
};

export { WhatsOnCard };
