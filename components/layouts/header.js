import Head from "next/head";
import { CustomNavbar } from "../CustomNavbar";

export default function Header({ children, title, showNavLinks }) {
  let metaTitle = title ? `${title} | ` : "";
  metaTitle += "JamesFest2022";
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content="JamesFest: Celebrating the wedding of Ian and Anna"
        />
        <link rel="icon" href="/JamesFest-Logo.ico" />
      </Head>
      <CustomNavbar showNavLinks={showNavLinks} />
    </>
  );
}
