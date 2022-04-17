import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "catering",
});

export default function Catering({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout>
      <div id="#catering" className="section">
        <h1>Catering</h1>
        
      </div>
    </DefaultLayout>
  );
}
