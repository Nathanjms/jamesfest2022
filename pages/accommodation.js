import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "accommodation",
});

export default function Accommodation({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Accommodation">
      <section id="#accommodation">
        <div className="section-background accommodation">
          <div className="container">
            <h1 className="textOverlay-container">Accommodation</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              Hi Everyone; well this hasn&apos;t been as straightforward as
              we&apos;d hoped. The wedding venue has recommended a number of
              hotels in the area but we feel they are a bit pricey. The
              <a
                href="https://www.worcesterwhitehouse.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Worcester Whitehouse Hotel
              </a>{" "}
              offers a 10% discount if you mention you are attending a wedding
              at Oakfield Gardens. If and when other suitable options become
              available we&apos;ll add them to this page
            </p>
            <p>
              However there are plenty of Airbnb&apos;s and guest houses in the
              area which we feel could be a better option .....that&apos;s what
              we&apos;ve decided to do! If you are planning to stay over we
              would recommend you don&apos;t leave it too long to book
              somewhere, it&apos;s a really busy time of year and places get
              booked up quickly. So book early!!! XX
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </section>
    </DefaultLayout>
  );
}
