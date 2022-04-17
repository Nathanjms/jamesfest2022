import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "venue",
});

export default function Venue({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout>
      <div id="#venue" className="section">
        <h1>Venue</h1>
        <h2>Super secret data</h2>
      </div>
    </DefaultLayout>
  );
}
