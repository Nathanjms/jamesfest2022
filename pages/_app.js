import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "../styles/globals.css";
import "../styles/navbar.css";
import DefaultLayout from "../components/layouts/default";

export default function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
