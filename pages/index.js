import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { TimerDisplay } from "../components/TimerDisplay";

const weddingDate = new Date(1657926000000);
export default function Home() {
  return (
    <DefaultLayout>
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
              <p className="mb-1">Sending Love</p>
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
      <section id="about" className="section">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h4">Introduction to the JamesFest Website</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="h4">What to expect</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
