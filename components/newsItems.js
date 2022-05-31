import Image from "next/image";
import Link from "next/link";

export const newsItems = [
  {
    title: "Welcome to the News Section!",
    date: "25th May 2022",
    content: (
      <>
        <p>
          We will update this section with every new change to the website - be
          sure to check back here to stay updated on any website changes!
        </p>
      </>
    ),
  },
  {
    title: "Music Section",
    date: "25th May 2022",
    content: (
      <>
        <p>
          Introducing the Music section... featuring some of the acts that will
          be playing at JamesFest, <Link href="/music">click here</Link> to go
          to this section now!
        </p>
      </>
    ),
  },
  {
    title: "Music Section - Updates",
    date: "31st May 2022",
    content: (
      <>
        <p>
          The Music section has been updated with even more of the acts that
          will be playing at JamesFest! <Link href="/music">Click here</Link> to
          see the updates!
        </p>
        <div className="row justify-items-center mt-4">
          <div className="col-md-6 text-center mb-3">
            <Image
              src="/robotRadio-logo.webp"
              alt="Robot Radio Logo"
              height={117}
              width={245.25}
            />
          </div>
          <div className="col-md-6 text-center mb-3">
            <Image
              src="/moselele-logo.webp"
              alt="Moselele Logo"
              height={117}
              width={245.25}
            />
          </div>
        </div>
      </>
    ),
  },
];
