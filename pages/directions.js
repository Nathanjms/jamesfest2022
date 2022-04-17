import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "directions",
});

export default function Directions({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout>
      <div id="#directions" className="section">
        <h1>Directions</h1>
      </div>
    </DefaultLayout>
  );
}
