import Head from "next/head";

export default function Header({ children, title }) {
  let metaTitle = title ? `${title} | ` : "";
  metaTitle += "JamesFest2022";
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta
        name="description"
        content="JamesFest: Celebrating the wedding of Ian and Anna"
      />
      <link rel="icon" href="/JamesFest-Logo.ico" />
    </Head>
  );
}
