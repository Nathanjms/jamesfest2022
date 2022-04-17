import DefaultLayout from "../components/layouts/DefaultLayout";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "Accommodation",
});

export default function Accommodation({ user }) {
  return (
    <DefaultLayout>
      <div id="#accommodation" className="section">
        <h1>Accommodation</h1>
      </div>
    </DefaultLayout>
  );
}
