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
    <DefaultLayout title="On the Day">
      <div id="#day" className="section">
        <h1>Day</h1>
        <h2>Coming Soon...</h2>
      </div>
    </DefaultLayout>
  );
}
