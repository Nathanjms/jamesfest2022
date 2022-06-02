import { AiOutlineRightCircle } from "react-icons/ai";
import { MdOutlineBreakfastDining, MdOutlinePark } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiDrink, BiVolumeMute } from "react-icons/bi";
import { FaMusic, FaRing, FaTaxi } from "react-icons/fa";
import { GiFoodTruck, GiMicrophone, GiPartyFlags } from "react-icons/gi";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "day",
});

const TimelineCard = ({ timelineItem }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-auto text-center flex-column d-none d-sm-flex">
        <div className="vr h-50 mx-4 mt-2"></div>
        {timelineItem.icon}
        <div className="vr h-50 mx-4 mt-2"></div>
      </div>
      <div className="col py-2">
        <div className="card shadow animate__animated animate__fadeInRight">
          <div className="card-body">
            <h3 className="h5 d-sm-none">{timelineItem.icon}</h3>
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

export default function OnTheDay({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="On the Day">
      <section id="#day">
        <div className="section-background day">
          <div className="container">
            <h1 className="textOverlay-container">The Day</h1>
          </div>
        </div>
        <div className="py-5">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 w-100">
                <div className="mx-auto card customCard shadow">
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
              <div className="col-12 w-100">
                <div className="mb-3 mx-auto">
                  <h2 className="h3 mb-3">Plan for the Day</h2>
                  {timelineItems.map((timelineItem, index) => (
                    <TimelineCard key={index} timelineItem={timelineItem} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

const timelineItems = [
  {
    time: "12 Noon",
    description: <>Arrival at Oakland Gardens (The River School Droitwich)</>,
    icon: <MdOutlinePark className="timeline-icon" />,
  },
  {
    time: "12.30pm",
    description: <>Ceremony</>,
    icon: <FaRing className="timeline-icon" />,
  },
  {
    time: "1pm",
    description: <>Reception Drinks</>,
    icon: <BiDrink className="timeline-icon" />,
  },
  {
    time: "2pm",
    description: <>Wedding Breakfast</>,
    icon: <MdOutlineBreakfastDining className="timeline-icon" />,
  },
  {
    time: "3.30pm",
    description: <>Music &amp; Games</>,
    icon: <FaMusic className="timeline-icon" />,
  },
  {
    time: "7pm",
    description: <>Communal Singalong</>,
    icon: <GiMicrophone className="timeline-icon" />,
  },
  {
    time: "7.30pm",
    description: <>Street Food</>,
    icon: <GiFoodTruck className="timeline-icon" />,
  },
  {
    time: "8.30pm",
    description: <>Party time in the Tipi (with Ellie Jones and the Giants)</>,
    icon: <GiPartyFlags className="timeline-icon" />,
  },
  {
    time: "11.30pm",
    description: <>Music Ends</>,
    icon: <BiVolumeMute className="timeline-icon" />,
  },
  {
    time: "11.45pm",
    description: <>Chariots &amp; Taxis</>,
    icon: <FaTaxi className="timeline-icon" />,
  },
  {
    time: "Midnight",
    description: <>Venue Closes</>,
    icon: <BsFillMoonStarsFill className="timeline-icon" />,
  },
];
