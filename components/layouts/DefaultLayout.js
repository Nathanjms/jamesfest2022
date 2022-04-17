import Header from "./header";
import Footer from "./footer";

export default function DefaultLayout({
  children,
  props,
  title = "",
  showNavLinks = true,
}) {
  return (
    <>
      <Header title={title} showNavLinks={showNavLinks} />
      <main className="mt-5">{children}</main>
      <Footer />
    </>
  );
}
