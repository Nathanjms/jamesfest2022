import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "music",
});

export default function Music({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Music">
      <div id="#music" className="section">
        <h1>Music</h1>
        <h2>Coming Soon...</h2>
      </div>
    </DefaultLayout>
  );
}
