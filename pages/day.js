import DefaultLayout from "../components/layouts/DefaultLayout";
import timelineItems from "../components/data/timelineItems";

const TimelineCard = ({ timelineItem, index }) => {
  const moveItemRight = index % 2; // Whether to move the item right
  const orderClass = (onRight) => {
    if (onRight) {
      return 3;
    }
    return 1;
  };
  return (
    <div className="row justify-content-center">
      <div
        className={
          "col-sm-5 col-lg-4 col-xl-3 d-none d-sm-flex order-" +
          orderClass(!moveItemRight)
        }
      ></div>
      <div className="col-auto text-center flex-column d-none d-sm-flex order-2">
        <div className="vr h-50 mx-4"></div>
        <span className="timeline-icon">{timelineItem.icon}</span>
        <div className="vr h-50 mx-4 mt-2"></div>
      </div>
      <div
        className={
          "col-sm-5 col-lg-4 col-xl-3 py-2 order-" + orderClass(moveItemRight)
        }
      >
        <div className="card shadow rounded-10px">
          <div className="card-body">
            <h3 className="h5 header-timeline-icon d-sm-none">
              {timelineItem.icon}
            </h3>
            <div className="text-muted">{timelineItem.time}</div>
            <div className="card-text">
              <p>{timelineItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OnTheDay() {
  return (
    <DefaultLayout title="On the Day">
      <section id="content">
        <div className="section-background day">
          <div className="container">
            <h1 className="textOverlay-container">The Day</h1>
          </div>
        </div>
      </section>
      <section id="plan-for-the-day">
        <div className="backgroundPrimary">
          <div className="container">
            <div className="row text-center">
              <div className="col-12 w-100 py-3">
                <div className="mb-3 mx-auto">
                  <h2 className="h3 mb-3">What&apos;s On</h2>
                  {timelineItems.map((timelineItem, index) => (
                    <TimelineCard
                      key={index}
                      timelineItem={timelineItem}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="backgroundAlt py-5" id="useful-information">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 w-100">
                <div className="mx-auto card customCard shadow mb-0">
                  <h2 className="h3 mb-3">Useful Information</h2>
                  <ul className="text-start">
                    <li>
                      There is a car park at the venue and you can leave your
                      car overnight if required
                    </li>
                    <li>
                      After arriving, simply follow the signs to the ceremony
                    </li>
                    <li>
                      Make yourself comfortable on a Chair or Hay bale for the
                      Ceremony
                    </li>
                    <li>Please only use natural / biodegradable confetti</li>
                    <li>There will be music and games all afternoon</li>
                    <li>
                      There will be benches and hay bales scattered around the
                      grounds all day
                    </li>
                    <li>
                      If you want to bring your own special comfy chair then
                      please go ahead
                    </li>
                    <li>
                      The whole day will be spent in the gardens so please
                      consider this when selecting footwear
                    </li>
                    <li>
                      Please also consider something to keep warm in the evening
                      … and sun cream (Fingers Crossed)
                    </li>
                    <li>
                      We will be holding a communal singalong in the evening
                    </li>
                    <li>The venue will be locked at 12 midnight</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
