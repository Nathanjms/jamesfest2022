import Header from "./header";
import Footer from "./footer";
import { CustomNavbar } from "../CustomNavbar";

export default function DefaultLayout({
  children,
  props,
  title = "",
  homeLinkOnly = false,
}) {
  return (
    <>
      <Header title={title} />
      <CustomNavbar homeLinkOnly={homeLinkOnly} />
      <main className="mt-5">{children}</main>
      <Footer />
    </>
  );
}
