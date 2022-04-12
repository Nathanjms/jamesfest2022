import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TimerDisplay } from "../components/TimerDisplay";
import { CustomNavbar } from "../components/CustomNavbar";

const weddingDate = new Date(1657926000000);
export default function Home() {
  return (
    <div>
      <Head>
        <title>JamesFest2022</title>
        <meta
          name="description"
          content="JamesFest: Celebrating the wedding of Ian and Anna"
        />
        <link rel="icon" href="/JamesFest-Logo.ico" />
      </Head>

      <CustomNavbar />

      <main className={styles.main}>
        <div className="container text-center">
          <Image
            src="/JamesFest.png"
            alt="JamesFest Logo"
            width={500}
            height={500}
          />
          <div>
            <TimerDisplay date={weddingDate} />
          </div>
        </div>
      </main>
    </div>
  );
}
