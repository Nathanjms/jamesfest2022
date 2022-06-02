import Header from "./header";
import Footer from "./footer";
import { CustomNavbar } from "../CustomNavbar";

export default function DefaultLayout({
  children,
  title = "",
  homeLinkOnly = false,
  footerAlt = false,
  backgroundClass = "",
}) {
  return (
    <>
      <Header title={title} />
      <CustomNavbar homeLinkOnly={homeLinkOnly} />
      <main className={backgroundClass ? backgroundClass : ""}>{children}</main>
      <Footer footerAlt={footerAlt} />
    </>
  );
}
