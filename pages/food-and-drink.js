import Image from "next/image";
import { Carousel } from "react-bootstrap";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "food-and-drink",
});

export default function FoodAndDrink({ user }) {
  if (!user) {
    return <Unauthenticated />;
  }
  return (
    <DefaultLayout title="Food and Drink">
      <section id="#accommodation">
        <div className="section-background food">
          <div className="container">
            <h1 className="textOverlay-container">Food and Drink</h1>
          </div>
        </div>
        <div className="py-5">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-6 mb-2">
                <div className="h-100">
                  <p>
                    Our <b>Wedding Breakfast</b> will be held in the tipi, in
                    the form of an afternoon tea.
                  </p>
                  <p>
                    We will have a <b>Vintage Ice Cream Cart</b> on site in the
                    afternoon offering our selected flavours from Cotswolds ice
                    cream maker, Marshfield Farm Ice Creams.
                  </p>
                  <p>
                    In the evening we will be served <b>Street Food</b> from a
                    Horse Box.
                  </p>
                  <p>Yes you did hear correctly... </p>
                  <p>
                    We will also have a stash of <b>Crisps</b> and{" "}
                    <b>Chocolate</b> hidden away for those of you that can find
                    it.
                  </p>
                  <p>
                    All food is being supplied by local caterers, ASJ Catering.
                    Once we have finalised the menus, we will publish a list of
                    the food ingredients for you to review for any potential
                    allergies.
                  </p>
                  <p className="mb-md-0">
                    In the meantime,{" "}
                    <b>
                      if you have any specific dietary requirements please let
                      us know using the wedding email address{" "}
                      <a href="mailto:jamesfest@mail.com">Jamesfest@mail.com</a>
                    </b>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mb-2">
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <Carousel>
                    {carouselImages.map((value, index) => (
                      <Carousel.Item key={index}>
                        <Image
                          height={400}
                          width={400}
                          src={value.url}
                          alt={value.alt}
                        />
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

const carouselImages = [
  {
    url: "/food1.webp",
    alt: "Ice Cream from Marshfield Ice Cream",
  },
  {
    url: "/food5.webp",
    alt: "Afternoon Tea, laid out on tables, from ASJ Catering",
  },
  {
    url: "/food2.webp",
    alt: "Ice Cream from Marshfield Ice Cream",
  },
  {
    url: "/food3.webp",
    alt: "Afternoon Tea from ASJ Catering",
  },
  {
    url: "/food4.jpg",
    alt: "Afternoon Tea from ASJ Catering",
  },
];
