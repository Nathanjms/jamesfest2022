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
    title: "Music Section - Updated",
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
  {
    title: "The Day - Updated",
    date: "2nd June 2022",
    content: (
      <>
        <p>
          &apos;The Day&apos; has been updated, containing the latest
          information on the plan for the day, as well as some useful
          information! <Link href="/day">Click here</Link> to see the updates
          now!
        </p>
      </>
    ),
  },
  {
    title: "Gift List",
    date: "3rd June 2022",
    content: (
      <>
        <p>
          Our Gift List has been added to the website, please{" "}
          <Link href="/gift-list">click here</Link> to visit!
        </p>
      </>
    ),
  },
  {
    title: "Music Section - New Act!",
    date: "13th June 2022",
    content: (
      <>
        <p>
          The Music section has been updated with another act who will be
          playing at JamesFest! <Link href="/music">Click here</Link> to see the
          updates!
        </p>
      </>
    ),
  },
  {
    title: "Food Section",
    date: "13th June 2022",
    content: (
      <>
        <p>
          The Food section has been added. Take a look to get an idea of what
          food we have for you, and <b>to contact us about any allergies</b>.{" "}
          <Link href="/food">Click here</Link> to see the food section now!
        </p>
      </>
    ),
  },
  {
    title: "Music Section - Community Singalong",
    date: "25th June 2022",
    content: (
      <>
        <p>
          The Music section now has a download to the songbook for our Community
          Singalong. <Link href="/music">Click here</Link> to find out what
          songs we&apos;ll all be singing, and to brush up on some lyrics!
        </p>
      </>
    ),
  },
  {
    title: "Venue Section - Venue Map",
    date: "2nd July 2022",
    content: (
      <>
        <p>
          The Venue section now contains a map of the Venue for the day.{" "}
          <Link href="/venue">Click here</Link> to see where we&apos;ll all be
          singing, dancing and drinking!
        </p>
      </>
    ),
  },
  {
    title: "Food Section - Important Allergens Update",
    date: "8th July 2022",
    content: (
      <>
        <p>
          The Food section has been updated with an allergens update from our
          caterers. <Link href="/food">Click here</Link> to find out more, and
          please don&apos;t forget to contact us if you have any allergies!
        </p>
      </>
    ),
  },
  {
    title: "Music Section - New Act!",
    date: "10th July 2022",
    content: (
      <>
        <p>
          The Music section has been updated with our final act,{" "}
          <Link href="/music">click here</Link> to see who it is!
        </p>
      </>
    ),
  },
  {
    title: "Merch Section",
    date: "13th July 2022",
    content: (
      <>
        <p>
          A merchandise section is now on the site,{" "}
          <Link href="/meggies-merch">click here</Link> to take a look!
        </p>
      </>
    ),
  },
  {
    title: "Photos Section",
    date: "20th July 2022",
    content: (
      <>
        <p>
          We&apos;ve added a photos section to the website, where you can upload
          your favourite from JamesFest, as well as see everyone&apos;s photos.{" "}
          <Link href="/photos">Click here</Link> to visit it now!
        </p>
      </>
    ),
  },
];
