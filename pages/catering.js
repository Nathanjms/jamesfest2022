import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: '/catering',
});

export default function Catering({ user }) {
  return (
    <div>
      <h1>Catering</h1>
      <h2>{user.authenticated}</h2>
    </div>
  );
}
