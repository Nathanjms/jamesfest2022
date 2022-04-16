import Header from "./header";
import Footer from "./footer";

export default function DefaultLayout({ children, props, title }) {
  console.dir(children, props, title);
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
