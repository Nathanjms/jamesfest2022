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
      <div id="#accommodation" className="section">
        <h1>Accommodation</h1>
      </div>
    </DefaultLayout>
  );
}
