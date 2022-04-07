import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const weddingDate = new Date(1657926000000);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

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
          <Image
            src="/JamesFest1.png"
            alt="JamesFest Logo"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="/Small_JamesFest1.png"
          />
          <div>
            <TimerDisplay timeLeft={timeLeft} />
          </div>
        </div>
      </main>
    </div>
  );
}

const TimerDisplay = ({ timeLeft }) => {
  if (!timeLeft) {
    return <h1>Loading...</h1>;
  }
  if (timeLeft?.ended) {
    return;
  }
  return (
    <h3 className="animate__animated animate__flipInX">
      {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes,{" "}
      {timeLeft.seconds} seconds
    </h3>
  );
};

const calculateTimeLeft = (date) => {
  let difference = date - new Date();

  if (difference < 0) {
    return {
      ended: true,
    };
  }

  let timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return timeLeft;
};
