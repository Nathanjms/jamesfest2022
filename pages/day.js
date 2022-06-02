import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "day",
});

export default function OnTheDay({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="On the Day" backgroundClass="backgroundAlt">
      <section id="#day">
        <div className="section-background day">
          <div className="container">
            <h1 className="textOverlay-container">The Day</h1>
          </div>
        </div>
        <div className="py-5">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 mb-3 card customCard shadow">
                <h2 className="h3 mb-3">Plan for the Day</h2>
                <ul className="text-start">
                  <li>
                    12 noon - Arrival at Oakland Gardens (The River School
                    Droitwich)
                  </li>
                  <li>12.30pm - Ceremony</li>
                  <li>1pm - Reception Drinks</li>
                  <li>2pm - Wedding Breakfast</li>
                  <li>3.30pm - Music &amp; Games</li>
                  <li>7pm - Communal Singalong</li>
                  <li>7.30pm - Street Food</li>
                  <li>
                    8.30 - Party time in the Tipi (with Ellie Jones and the
                    Giants)
                  </li>
                  <li>11.30 - Music Ends</li>
                  <li>11.45 - Chariots &amp; Taxis</li>
                  <li>12 Midnight - Venue Closes</li>
                </ul>
              </div>
              <div className="col-12 card customCard shadow">
                <h2 className="h3 mb-3">Useful Information</h2>
                <ul className="text-start">
                  <li>
                    There is a car park at the venue and you can leave your car
                    overnight if required
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
                    Please also consider something to keep warm in the evening …
                    and sun cream (Fingers Crossed)
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
    </DefaultLayout>
  );
}
