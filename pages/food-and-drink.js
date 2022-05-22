import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "food-and-drink",
});

export default function FoodAndDrink({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Food and Drink">
      <div id="#foodAndDrink" className="section">
        <h1>Food and Drink</h1>
        <h2>Coming Soon...</h2>
      </div>
    </DefaultLayout>
  );
}
