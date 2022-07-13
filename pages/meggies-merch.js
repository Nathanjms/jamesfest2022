import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { AiOutlineAmazon } from "react-icons/ai";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "meggies-merch",
});

export default function MeggiesMerch({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Meggie's Merch" backgroundClass="backgroundAlt">
      <section id="meggies-merch">
        <div className="py-4">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-6 my-3">
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <Image
                    height={400}
                    width={300}
                    src={`/meggies-merch/logo.png`}
                    alt="Meggie's Merch logo"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,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"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="h-100 d-flex flex-column justify-content-center">
                  <p>
                    We intend to have a wedding merchandise tent on site for the
                    duration of our wedding. This will contain a variety of
                    JamesFest memorabilia that we hope you&apos;ll enjoy. All
                    items have been hand-made by my daughter, Meggie, over the
                    last 6 months. Meggie has created a wide variety of items,
                    so hopefully there will be something you&apos;d all like to
                    take home to help remember our special day.
                  </p>
                  <p>
                    The merchandise tent will also stock some glow sticks for
                    the evening, garlands for our dance party and songbooks for
                    the evening singalong. We may also have some snacks in the
                    merch tent for those who are a little peckish.
                  </p>
                  <p>
                    Just to be clear were not expecting any payment for these
                    items and there are plenty to go around, so please do help
                    yourself.
                  </p>
                  <p className="mb-sm-0">
                    You can find Meggie&apos;s contact details along with some
                    of her other creations at{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://meggiesmerch.com"
                    >
                      meggiesmerch.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12 mx-auto">
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <Carousel>
                    {imageKeyArray.map((value, index) => (
                      <Carousel.Item key={value}>
                        <div className="row justify-content-center">
                          {value.map((value2, index2) => (
                            <div className="col-3" key={value2}>
                              <Image
                                height={500}
                                width={400}
                                src={`/meggies-merch/merch${value2}.jpeg`}
                                alt="Jamesfest Merch"
                                placeholder="blur"
                                objectFit="scale-down"
                                blurDataURL="data:image/webp;base64,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"
                              />
                            </div>
                          ))}
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

const imageKeyArray = [
  [2, 3, 4],
  [6, 7, 8],
];
