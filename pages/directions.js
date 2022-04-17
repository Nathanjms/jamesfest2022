import DefaultLayout from "../components/layouts/DefaultLayout";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "directions",
});

export default function Directions({ user }) {
  return (
    <DefaultLayout>
      <div id="#directions" className="section">
        <h1>Directions</h1>
        
      </div>
    </DefaultLayout>
  );
}
