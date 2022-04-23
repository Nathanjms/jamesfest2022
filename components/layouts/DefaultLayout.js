import Header from "./header";
import Footer from "./footer";
import { CustomNavbar } from "../CustomNavbar";

export default function DefaultLayout({
  children,
  props,
  title = "",
  homeLinkOnly = false,
  footerAlt = false,
}) {
  return (
    <>
      <Header title={title} />
      <CustomNavbar homeLinkOnly={homeLinkOnly} />
      <main>{children}</main>
      <Footer footerAlt={footerAlt} />
    </>
  );
}
