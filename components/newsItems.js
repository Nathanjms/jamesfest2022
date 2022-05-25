import Link from "next/link";

export const newsItems = [
  {
    title: "Welcome to the News Section!",
    date: "25th May 2022",
    content: (
      <>
        <p>We will update this section with every new change to the website - be sure to check back here to stay updated on any website changes!</p>
      </>
    ),
  },
  {
    title: "Music Section",
    date: "25th May 2022",
    content: (
      <>
        <p>The Music section has been updated with the latest acts that will be playing at JamesFest, <Link href="/music">click Here to see the updates!</Link> </p>
      </>
    ),
  },
];
