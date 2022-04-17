import DefaultLayout from "../components/layouts/DefaultLayout";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "music",
});

export default function Music({ user }) {
  return (
    <DefaultLayout>
      <div id="#music" className="section">
        <h1>Music</h1>
      </div>
    </DefaultLayout>
  );
}
