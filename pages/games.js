import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "catering",
});

export default function Games({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Games">
      <div id="#games" className="section">
        <h1>Games</h1>
        <h2>Coming Soon...</h2>
      </div>
    </DefaultLayout>
  );
}
