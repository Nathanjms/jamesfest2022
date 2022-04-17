import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "../styles/nprogress.css";
import "../styles/globals.css";
import "../styles/navbar.css";
import NProgress from "nprogress";
import { Router } from "next/router";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
