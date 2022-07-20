import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BottomBanner } from "../components/BottomBanner";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { SongbookSection } from "../components/SongbookSection";
import { TimerDisplay } from "../components/TimerDisplay";
import WhatsOn from "../components/WhatsOn";

const weddingDate = new Date(1657969200000);
const twentyFourHoursInMs = 36 * 60 * 60 * 1000;

export default function Home() {
  const [showSongbook, setShowSongbook] = useState(false);
  useEffect(() => {
    let currentDate = new Date();
    let diff = weddingDate.getTime() - currentDate.getTime();
    if (Math.abs(diff) < twentyFourHoursInMs) {
      // If within 36 hours of the wedding start time, show the songbook on the homepage.
      setShowSongbook(true);
    }
  }, []);

  return (
    <DefaultLayout footerAlt={true}>
      <section id="intro" className="section intro">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-5 jamesfest-img">
              <Image
                src="/JamesFest.webp"
                alt="JamesFest Logo"
                width={500}
                height={500}
                objectFit="fill"
              />
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-center">
              <h1 className="h3 mb-3">Welcome to JamesFest 2022</h1>
              <p>
                Welcome aboard everyone, it&apos;s great to have you with us on
                our very special journey. We thought this would be a great way
                to share information and to get you lovely folks involved in our
                happy day!
              </p>
              <p>
                We are planning a day that we feel represents us as a couple and
                celebrates the joining of our two wonderful families, in the
                company of our lovely friends! We can&apos;t wait to see you
                all.
              </p>
              <p>
                If you have any questions or further suggestions please get in
                touch using our wedding email address,{" "}
                <a href="mailto:Jamesfest@mail.com">Jamesfest@mail.com</a>.
              </p>
              <p className="mb-1">Sending Love,</p>
              <p>Anna &amp; Ian Xx</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="timer"
        className="text-center py-3 d-flex align-items-center"
      >
        <div className="container">
          <div className="textOverlay-container my-3">
            <TimerDisplay date={weddingDate} />
          </div>
        </div>
      </section>
      {showSongbook && <SongbookSection background="backgroundPrimary" />}
      <section id="about" className="section backgroundAlt">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h3 mb-3">Introduction to the JamesFest Website</h2>
              <p>
                We hope the website will provide you with all the info you need
                about the day. The{" "}
                <b>plan is to update the site with new information</b> as we
                figure things out ourselves. As we get closer to the big day,
                we&apos;ll be able to <b>give you more and more detail</b>.
                We&apos;re sure you&apos;d like to know about food, music and
                games, directions to the venue, accommodation, gift list, and
                much more besides.{" "}
                <b>
                  So please, please, keep checking in and hopefully all your
                  questions will be answered! Updates will appear on
                </b>{" "}
                <Link href="/news">the News page!</Link>
              </p>
              <p>
                Please note that you will require a passcode to access some
                parts of the website. Your passcode was sent to you with your
                invitation. We have full faith in the web developer who tells me
                that you should only need to enter it one time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhatsOn />
      <BottomBanner />
    </DefaultLayout>
  );
}
