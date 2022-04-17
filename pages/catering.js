import DefaultLayout from "../components/layouts/DefaultLayout";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "catering",
});

export default function Catering({ user }) {
  return (
    <DefaultLayout>
      <div id="#catering" className="section">
        <h1>Catering</h1>
        <h2>{user.authenticated}</h2>
      </div>
    </DefaultLayout>
  );
}
