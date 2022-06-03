import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import { navItems } from "./data/navItems";

export const BottomBanner = () => {
  const [whatsNew, setWhatsNew] = useState([]);
  useEffect(() => {
    // Store last visit
    let lastVisit = localStorage.getItem("lastVisit");
    // Set new last visit
    localStorage.setItem("lastVisit", Date.now());
    if (!lastVisit) {
      return;
    }
    let updatedItems = navItems.filter((item) => item.lastUpdated >= lastVisit);
    setWhatsNew(updatedItems);
  }, []);

  if (!whatsNew.length) {
    // Don't show bottom banner if nothing is new
    return;
  }

  const showModal = () => {
    let htmlContent = (
      <>
        <p>
          Below are the sections that have been updated since your last site
          visit.
        </p>
        <ul className="text-start">
          {whatsNew.map((value) => {
            return (
              <li key={value.name}>
                <Link href={value.link}>{value.name}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
    Swal.fire({
      title: "Updated Sections",
      html: ReactDOMServer.renderToString(htmlContent),
      confirmButtonColor: "#5b8a45",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const dismissBanner = (e) => {
    e.currentTarget.disabled = true; // Disable button
    document
      .querySelector("#bottomBanner")
      .classList.add("animate__fadeOutDown"); // Animate fade out
  };

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="bottom"
        className="animate__animated animate__fadeInUp"
        id="bottomBanner"
      >
        <Container>
          <Nav className="w-100 flex-column">
            <div className="d-flex justify-content-between">
              <div className="py-2 text-white">
                <span>There have been updates since your last visit!</span>
              </div>
              <div>
                <button
                  className="btn-close closeBtn btn-close-white"
                  id="overlayCloseBtn"
                  aria-label="Close"
                  onClick={dismissBanner}
                />
              </div>
            </div>
            <Button
              onClick={showModal}
              size="sm"
              className="mx-auto w-100"
              style={{ maxWidth: "500px" }}
            >
              View Updates
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
