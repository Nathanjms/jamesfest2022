import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: '/admin',
});

export default function Admin({ user }) {
  console.log("admin");
  return (
    <div>
      <h1>test</h1>
      <h2>{user.authenticated}</h2>
    </div>
  );
}
