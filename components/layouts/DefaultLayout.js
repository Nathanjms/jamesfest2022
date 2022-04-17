import Header from "./header";
import Footer from "./footer";

export default function DefaultLayout({ children, props, title = '' }) {
  return (
    <>
      <Header title={title} />
      <main className="mt-5">{children}</main>
      <Footer />
    </>
  );
}
