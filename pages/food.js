import Image from "next/image";
import { Carousel } from "react-bootstrap";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Unauthenticated from "../components/Unauthenticated";
import { getUserFromServerSession } from "../lib/withSession";
import { useState } from "react";
import { AllergenModal } from "../components/AllergenModal";

export const getServerSideProps = getUserFromServerSession({
  redirectToLogin: true,
  redirectUrl: "food",
});

export default function Food({ user }) {
  const [showModal, setShowModal] = useState(false);
  if (!user) {
    return <Unauthenticated />;
  }

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <DefaultLayout title="Food">
      <section id="accommodation">
        <div className="section-background food">
          <div className="container">
            <h1 className="textOverlay-container">Food</h1>
          </div>
        </div>
        <div className="py-4 backgroundPrimary">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-12 mb-2">
                <h2 className="h4 pb-2">Note from ASJ Catering</h2>
                <p>
                  For both the afternoon tea service and the evening food, all
                  of the foods will be close proximity due to the way they are
                  prepared, served and displayed. Save for veggie foods, which
                  will be separate at all times but still subject to allergens.
                </p>
                <p>
                  Please let us know in advance of any allergies, so we can plan
                  and prepare something separate. There will be a menu board on
                  display.
                </p>
                <AllergenModal
                  showModal={showModal}
                  handleShow={handleShow}
                  handleClose={handleClose}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 backgroundAlt">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-6">
                <div className="h-100 d-flex flex-column justify-content-center">
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
                    We will also have a stash of <b>Crisps and Chocolate</b>{" "}
                    hidden away for those of you that can find it!
                  </p>
                  <p className="mb-md-0">
                    All food is being supplied by local caterers, ASJ Catering.{" "}
                    <b>
                      If you have any specific dietary requirements please let
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
                          placeholder="blur"
                          blurDataURL={value.blurDataUrl}
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
    url: "/food/food1.webp",
    alt: "Ice Cream from Marshfield Ice Cream",
    blurDataUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAHYAdgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECEQMSMf/EABcBAQEBAQAAAAAAAAAAAAAAAAIBAAP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A9ojIkKlTqailU06mopVNOlUVNKnSVCIyVgCHVQwnoVHpFQVFSqbTqLUtUWptFqbRtLBSHQOrhAybWxNKqqKUqYVpWlam05RV0M/oKj1yppoqm1narVZ6o2rCtT0Wp65WnIrpolVB9HigAsqYmo0us9HKNjPVZ3St1jqnKFP6DK6BC+gqapGkVGmWq00y0FKItLoqXHqukXKuM4uOZrgEM4iKy210y26QKw3XPut/RzbrpAqboM7QQvp6mqRWZnplprploaUZ0jpOPUdIqLyiLgYWrhlDOQbUaZba6ZbOQbXN6Ob0dPo5tnIFYX9B2A8F9OmmmsyNMtNdM6NhRnSVS4FhSnFxMVE8rqoZApE1OmW2umWykHXPtz7jp2w3CkG1z2BdgLEfQpplUZFRV1FRYikqkmEcOFFRsbTAJcHU1nppWelxNY7Y6jfTHRIysCrArPbKgCyKmgISKAGUKgDIBQFRNZ6AVGWmWgFRFADM/9k=",
  },
  {
    url: "/food/food5.webp",
    alt: "Afternoon Tea, laid out on tables, from ASJ Catering",
    blurDataUrl: "data:image/webp;base64,UklGRgAQAAB",
  },
  {
    url: "/food/food2.webp",
    alt: "Ice Cream from Marshfield Ice Cream",
    blurDataUrl:
      "data:image/webp;base64,UklGRhAEAABXRUJQVlA4WAoAAAAgAAAAdQAAdQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCDSAQAA0A4AnQEqdgB2AD7tbKtQP7Y2qiqUnKPwHYllO39YBYCeCmjMG3A7mo34UazeAkOknD1+rhkdK+uZy4+z/4pi7vqIsbFrFxY/cQsFzP8T+hRdfW5sWiGE2mYZZLJNDjOKqNxpOC4A/gv69LZ9bvA/0LW18M+bd/v2iZmxTgeMoAD+iv3Uz7D+iS/yE4SdcKZ0uOdHbiC/DAFZeacF6czdYD/jLDpHsIhzaZCxTfZUl7rccJIngYo2+a1zTQkFFUueTtjo+56zHnRFY6RnYovGi6pAVuSOSADholbZ91InMoXq+YQlnRxm4imWqzsKuHPpEczhsPBsccCkI2urt6YcUexVv9ontUFgmKcX9yBTCBiM1IvywwHBWEs4p/anBdkXv7I+yCv/yD8DLRyr73oINqM6Q6yya36H1kG9dVSAfDI9R+0Br1MPHNsx9R8i533WF9BMrZ9KW6V0ozhF2woWCXsr4VcgywubeDaEfeTzLNJzPHM5wUX4Yhn9k/t2AqkAKYo4wEe+2KCR1HqJcQWI4vpQEnb1DmgSrUBBAwFw34Y29JJBuDfnzUo7cFOpL0HmmLRUk0DuBwBjcsYdrz7u0nFoRwBeXcfcL4LscykUq0wAAA==",
  },
  {
    url: "/food/food3.webp",
    alt: "Afternoon Tea from ASJ Catering",
    blurDataUrl:
      "data:image/webp;base64,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",
  },
  {
    url: "/food/food4.jpg",
    alt: "Afternoon Tea from ASJ Catering",
    blurDataUrl:
      "data:image/webp;base64,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",
  },
];
