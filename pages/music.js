import Image from "next/image";
import { FaGuitar } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
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
    <DefaultLayout title="Music" footerAlt="true">
      <section id="content">
        <div className="section-background music">
          <div className="container">
            <h1 className="textOverlay-container">Music</h1>
          </div>
        </div>
      </section>
      <section id="songbook" className="backgroundAlt py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <h2 className="h3 pb-2">Singalong Songbook</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                Click the buttons below to see the songbook for our Community
                Singalong.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center">
              <a
                href="/singalong/JamesFestSingalongWords.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 py-2 td-none h-100 text-dark"
              >
                <div className="card whatsOnCard mx-auto h-100">
                  <h3 className="h1">
                    <GrGroup />
                  </h3>
                  <p className="px-2">Download the Signalong Version</p>
                </div>
              </a>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <a
                href="/singalong/JamesFestSingalongChords.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 py-2 td-none h-100"
              >
                <div className="card whatsOnCard mx-auto h-100 text-dark">
                  <h3 className="h1">
                    <FaGuitar />
                  </h3>
                  <p className="px-2">Download the Chords Version</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="acts" className="py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <h2 className="h3 pb-2">Acts Playing at JamesFest</h2>
            </div>
          </div>
          <div className="row customCard mx-auto shadow">
            <h3 className="h4 mb-lg-5 mb-md-3">Ellie Jones &amp; The Giants</h3>
            <div className="col-lg-6  d-flex align-items-center justify-content-center">
              <div className="w-100 mb-3" style={{ maxWidth: "400px" }}>
                <Image
                  src="/music/EJandG.jpg"
                  alt="Ellie Jones and The Giants performing on stage"
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
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
          <div className="row customCard mx-auto shadow">
            <h3 className="h4 mb-lg-5 mb-md-3">Barry Lee Martin</h3>
            <div className="order-lg-2 col-lg-6 mb-3 d-flex align-items-center justify-content-center">
              <div className="w-100 mb-3" style={{ maxWidth: "475px" }}>
                <Image
                  src="/music/BarryLeeMartin.jpg"
                  alt="Barry Lee Martin Singing on Stage"
                  width={475}
                  height={255}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 d-flex flex-column justify-content-center">
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
          <div className="row customCard mx-auto shadow">
            <h3 className="c4l-12 h3 mb-3">
              <Image
                src="/music/moselele-logo.webp"
                alt="Moselele Logo"
                height={117}
                width={245.25}
              />
            </h3>
            <div className="col-lg-12 order-lg-1 d-flex flex-column justify-content-center">
              <p>
                Moselele is a ukulele group for people who live in (or can be
                bothered!) to travel to Moseley in Birmingham.
              </p>
              <p>
                We meet on the 1st and 3rd Thursday of every month - you can
                find all the dates on our calendar. We meet at 8:00pm in the
                shed in the beer garden of The Prince of Wales on Alcester Road,
                we go on until well past 11 and it&apos;s usually down to when
                the pub decide to throw us out. If you&apos;re looking for a
                ukulele group where you get to play all of the ukulele classics
                like Rawhide or Bring Me Sunshine then we are not the group for
                you. We&apos;ve got a vast collection of songs that we&apos;ve
                largely worked out ourselves and we try to keep them as
                contemporary as possible. What&apos;s the point of playing songs
                you wouldn&apos;t listen to? So if you want to drink beer and
                loudly sing songs by Modest Mouse, Chic and The Flaming Lips
                then we are exactly the sort of group you&apos;ve been looking
                for.
              </p>
            </div>
          </div>
          <div className="row customCard mx-auto shadow">
            <h3 className="h4 mb-3">
              <Image
                src="/music/robotRadio-logo.webp"
                alt="Robot Radio Logo"
                height={117}
                width={245.25}
              />
            </h3>
            <div className="col-lg-6 order-lg-1 d-flex flex-column">
              <h3 className="h4 mb-4 fw-bold">Robot Radio: Top Ten Facts</h3>
              <div className="">
                <ol className="text-start">
                  <li>
                    Described as Harmonious pop rockers with a punk attitude
                  </li>
                  <li>There&apos;s 4 in the band</li>
                  <li>A guitarist, drummer, bassist and a Ukulele player</li>
                  <li>Yes, a Ukulele Player</li>
                  <li>They all sing</li>
                  <li>Sometimes its in harmony</li>
                  <li>They all went to school together</li>
                  <li>That was a while ago</li>
                  <li>They formed in Lockdown</li>
                  <li>
                    Their first single{" "}
                    <a
                      href="https://robotradio.hearnow.com/durtii-robot"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DURTII Robot
                    </a>{" "}
                    was released on all digital platforms on 13 May &apos;22.
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-6 mb-3 d-flex align-items-center justify-content-center">
              <div className="w-100 mt-3" style={{ maxWidth: "475px" }}>
                <Image
                  src="/music/robotRadio.webp"
                  alt="Robot Radio performing on stage"
                  width={404}
                  height={276}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="row customCard mx-auto shadow">
            <h3 className="h4 mb-lg-5 mb-md-3">Joe Cook</h3>
            <div className="col-lg-6  d-flex align-items-center justify-content-center order-lg-2">
              <div className="w-100 mb-3" style={{ maxWidth: "400px" }}>
                <Image
                  src="/music/joeCook.jpg"
                  alt="Joe Cook performing on stage"
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center order-lg-1">
              <p>
                Joe Cook a.k.a Cookie is a spoken word artist, musician and
                activist from Birmingham UK. Originally a lyricist for
                Birmingham reggae punk band Lobster, Joe has exploded onto the
                spoken word scene. Joe&apos;s style has been described as
                &apos;The Streets meets Joe Strummer&apos;. Joe delivers social
                commentary in lyrical rhythmic style. His two biggest influences
                are Bill Hicks and Immortal Technique merging these styles to
                deliver comical hard hitting rhymes. Joe produced and hosted
                season three of Level UP! a sell-out spoken word event at The
                REP Birmingham
              </p>
              <p>
                Joe facilitates poetry/rap, music and drumming workshops across
                the midlands working in schools, youth clubs, community centres
                and hostels as well as volunteering at local youth centres. Most
                recently Joe has released a video for BBC Arts entitled
                &apos;How To Be A Poet With Dyslexia&apos; which received great
                feedback online and was also shared by the BBC on National
                Poetry Day 2016 &apos;Five Great Performances&apos; alongside
                John Cooper Clarke, Kate Tempest, George The Poet and Rachel
                McCrum.
              </p>
            </div>
          </div>
          <div className="row customCard mx-auto shadow">
            <h3 className="h4 mb-lg-5 mb-md-3">Paul Edwards</h3>
            <div className="col-lg-6  d-flex align-items-center justify-content-center">
              <div className="w-100 mb-3" style={{ maxWidth: "400px" }}>
                <Image
                  src="/music/PaulEdwards.jpg"
                  alt="Paul Edwards' album cover, 'I Sing of the Road'"
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <p>
                <a
                  href="https://www.pauledwardsmusic.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paul Edwards
                </a>{" "}
                is a singer/songwriter from Birmingham who has been recording
                his songs since 1975. He regards his music as a way of keeping
                account of the journey we all share through life. Although he
                draws inspiration from personal experiences, they are written
                and wrapped in a style that engages his listeners by weaving the
                threads that bind us.
              </p>
              <p>
                To date, Paul has released seven albums with the most recent,
                &apos;I sing of the road&apos;, released this year.
              </p>
              <p>
                Paul is passionate about letting people hear his music, offering
                any of his albums for a voluntary contribution on his{" "}
                <a href="https://pauledwards1.bandcamp.com">Bandcamp page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
