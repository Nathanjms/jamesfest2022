import DefaultLayout from "../components/layouts/DefaultLayout";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "venue",
});

export default function Venue({ user }) {
  return (
    <DefaultLayout>
      <div id="#venue" className="section">
        <h1>Venue</h1>
      </div>
    </DefaultLayout>
  );
}
