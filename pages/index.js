import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TimerDisplay } from "../components/TimerDisplay";

const weddingDate = new Date(1657926000000);
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JamesFest2022</title>
        <meta
          name="description"
          content="JamesFest: Celebrating the wedding of Ian and Anna"
        />
        <link rel="icon" href="/JamesFest3.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container text-center">
          <Image
            src="/JamesFest1.png"
            alt="JamesFest Logo"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="/Small_JamesFest1.png"
          />
          <div>
            <TimerDisplay date={weddingDate} />
          </div>
        </div>
      </main>
    </div>
  );
}
