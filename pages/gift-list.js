import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "gift-list",
});

export default function GiftList({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="On the Day">
      <section id="#gift-list">
        <div className="section-background gift-list">
          <div className="container">
            <h1 className="textOverlay-container">Gift List</h1>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
