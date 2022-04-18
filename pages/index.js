import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { TimerDisplay } from "../components/TimerDisplay";

const weddingDate = new Date(1657926000000);
export default function Home() {
  return (
    <DefaultLayout footerAlt={true}>
      <section id="intro" className="section intro">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-5 jamesfest-img">
              <Image
                src="/JamesFest.png"
                alt="JamesFest Logo"
                width={500}
                height={500}
                objectFit="fill"
              />
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-center">
              <h1 className="h3 mb-3">Welcome to JamesFest 2022</h1>
              <p>
                Welcome aboard everyone, it’s great to have you with us on our
                very special journey. We thought this would be a great way to
                share information and to get you lovely folks involved in our
                happy day!
              </p>
              <p>
                We are planning a day that we feel represents us as a couple and
                to celebrate the joining of our two wonderful families in the
                company of our lovely friends! We can’t wait to see you all.
              </p>
              <p>
                If you have any questions or further suggestions please get in
                touch using our wedding email address,{" "}
                <a href="mailto:Jamesfest@mail.com">Jamesfest@mail.com</a>.
              </p>
              <p className="mb-1">Sending Love,</p>
              <p>Anna & Ian Xx</p>
            </div>
          </div>
        </div>
      </section>
      <section id="timer" className="text-center section">
        <div className="container text-center">
          <div className="timer-container">
            <TimerDisplay date={weddingDate} />
          </div>
        </div>
      </section>
      <section id="about" className="section backgroundAlt">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h3 mb-3">Introduction to the JamesFest Website</h2>
              <p>
                We hope the website will provide you with all the info you need
                about the day. The{" "}
                <b>plan is to update the site with new information</b> as we
                figure things out ourselves. Between now and the big day, we’ll
                be able to <b>give you more and more detail</b>. We’re sure
                you’d like to know about food choices, music and game
                scheduling, directions to the venue, accommodation, gift list,
                and much more besides.{" "}
                <b>
                  So please, please, keep checking in and hopefully all your
                  questions will be answered!
                </b>
              </p>
              <p>
                Please note that you will require a passcode to access some
                parts of the website. Your passcode was sent to you with your
                invitation. I have full faith in the web designer who tells me
                that you should only need to enter it one time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container text-center">
          <div className="row">
            <h2 className="h3 mb-3">
              Here&apos;s what we&apos;ve got planned (at the moment)
            </h2>
            <div className="col-md-12">
              <p>
                Firstly the venue, we think you’ll love it. We chose the river
                school as we liked the beautiful trees, natural grounds and
                wonderful countryside views. Back in the 1930’s it was a
                horticultural college which explains why so many lovely and
                unusual trees can be found here... In fact, we have chosen a
                &quot;special&quot; tree, under which, we intend to hold our
                wedding ceremony, with you all very close by, lounging on hay
                bales.
              </p>
              <p>
                After the ceremony, you can relax or take a wander around the
                grounds while enjoying reception drinks, followed closely by an
                afternoon tea in our magical tipi.
              </p>
              <p>
                We have a great afternoon planned for you; a series of musical
                acts throughout the day, along with heaps of communal games.
                Let’s try to break the record for the most people playing in a
                rounder’s game!!
              </p>
              <p>
                We’ll have an antique ice cream cart on duty throughout the
                afternoon and of course an outdoor bar. In the early evening, we
                will have street food available outside the tipi.
              </p>
              <p>
                We are planning a mammoth communal sing-along around fire-pits
                while the sun is setting, before dancing all night long to the
                fabulous Ellie Jones and the Giants.
              </p>
              <p>
                With all this in mind, please keep your fingers and everything
                else crossed for good weather.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
