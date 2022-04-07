import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const getData = async (accessPassword) => {
  const res = await fetch("/api/hello", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accessPassword: accessPassword,
    }),
  });
  const response = await res.json();
  console.log(response);
};

export default function Home() {
  const testKey2 = process.env.NEXT_PUBLIC_API_KEY;
  return (
    <div className={styles.container}>
      <Head>
        <title>JamesFest2022</title>
        <meta
          name="description"
          content="JamesFest: Celebrating the weeding of Ian and Anna"
        />
        <link rel="icon" href="/JamesFest3.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container text-center">
          <Image src="/JamesFest1.png" alt="JamesFest Logo" width={500} height={500} />
        </div>
      </main>
    </div>
  );
}
