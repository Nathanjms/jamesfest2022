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
    <DefaultLayout title="Gift List">
      <div id="#gift-list" className="section">
        <h1>Gift List</h1>
        <h2>Coming Soon...</h2>
      </div>
    </DefaultLayout>
  );
}
