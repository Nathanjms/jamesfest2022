import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "music",
});

export default function Music({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Music">
      <div id="#music" className="section">
        <div className="container text-center">
          <h1 className="pb-5 color-primary">Music</h1>
          <div className="row musicCard">
            <h2 className="h3 mb-5">Ellie Jones &amp; The Giants</h2>
            <div className="col-md-6 d-flex flex-column justify-content-center animate__animated animate__fadeIn">
              <Image
                src="/EJandG.jpg"
                alt="Ellie Jones and The Giants performing on stage"
                width={400}
                height={400}
                className="rounded-img mb-2"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center animate__animated animate__fadeIn">
              <p>
                Ellie Jones and The Giants are a combination of eclectic
                musicians who come together to play the songs you love spanning
                many decades and artists: Pop, Soul, Jazz, Reggae, Blues, Ska,
                Rock, Rock n&apos; Roll and Irish. With Ellie on vocals and
                guitar, boasting a unique lounge/easy listening voice and funky
                guitar style that adapts to each song they perform.
              </p>
              <p>
                The Giants are a collective of musicians of all ages, who each
                represent their own personalities in their playing; from
                sophisticated, cool and jazzy, to fun, spontaneous and
                party-like. Their shows are fun and relaxed, and adaptable
                depending on the event or venue. The line-up can vary; from a
                3-piece band, all the way to a 6/7 piece.
              </p>
            </div>
          </div>
          <div className="row musicCard">
            <h2 className="h3 mb-5">Barry Lee Martin</h2>
            <div className="col-lg-6 order-lg-2 d-flex flex-column justify-content-center mb-3 animate__animated animate__fadeIn">
              <Image
                src="/BarryLeeMartin.jpg"
                alt="Barry Lee Martin Singing on Stage"
                width={475}
                height={255}
                className="mb-1"
              />
            </div>
            <div className="col-lg-6 order-lg-1 d-flex flex-column justify-content-center animate__animated animate__fadeIn">
              <p>
                Barry has been singing most of his life, firstly in local
                community choirs from the age of twelve, then with local amateur
                dramatic groups from around the age of sixteen.
              </p>
              <p>
                Following a stint in the RAF, Barry then started to sing solo in
                clubs and at private parties. Then, he took the plunge and went
                to Las Vegas, where he performed in a variety of top Vegas
                hotels including the Flamingo Hilton and the Sahara Hotel.
                During this time, he was based at the largest piano bar in Las
                Vegas.
              </p>
              <p>
                It was that this point that he was then signed to one of the top
                agencies at the time. They arranged for him to go to Malta to
                sing solo in a main cabaret slot for weeks at a time, at the
                prestigious Corinthia Palace Hotel. He also performed routinely
                on the Miami Carnival Cruise Line.
              </p>
            </div>
          </div>
          <div className="row musicCard animate__animated animate__fadeIn">
            <h2 className="h3">...And More!</h2>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
