import Link from "next/link";
import DefaultLayout from "./layouts/DefaultLayout";

export default function Unauthenticated() {
  return (
    <DefaultLayout title="Unauthenticated">
      <div className="section">
        <h1>Unauthenticated!</h1>
        <p>
          Please <Link href="/login">Login</Link> to access this page.
        </p>
      </div>
    </DefaultLayout>
  );
}
