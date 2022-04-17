import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "day",
});

export default function Day({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout>
      <div id="#day" className="section">
        <h1>Day</h1>
        
      </div>
    </DefaultLayout>
  );
}
