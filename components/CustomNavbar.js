import Image from "next/image";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    link: "#intro",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "More",
    link: "#more",
  },
];

export const CustomNavbar = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    let overlay = document.querySelector("#navOverlay");
    let mobileNavBtn = document.querySelector("#mobileNavBtn");
    // Disable button during transition
    mobileNavBtn.disabled = true;
    setTimeout(() => {
      mobileNavBtn.disabled = false;
    }, 400);
    if (overlayOpen) {
      closeOverlay(overlay);
    } else {
      openOverlay(overlay);
    }
    setOverlayOpen(!overlayOpen);
  };
  /* Open when someone clicks on the span element */
  function openOverlay(overlay) {
    overlay.style.height = "100%";
    document.querySelector("body").classList.add("overlay-open");
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeOverlay(overlay) {
    overlay.style.height = "0%";
    document.querySelector("body").classList.remove("overlay-open");
  }

  return (
    <>
      <div id="navOverlay" className="overlay">
        <button
          className="btn-close closeBtn btn-close-white"
          id="overlayCloseBtn"
          aria-label="Close"
          onClick={toggleOverlay}
        />
        <div className="pt-5 text-center">
          <Image
            src="/JamesFestText.png"
            alt="JamesFest Logo"
            width={200}
            height={50}
          />
        </div>

        <div className="overlay-content text-white">
          {navItems.map((item, index) => {
            return (
              <a key={index} href={item.link} onClick={toggleOverlay}>
                {item.name}
              </a>
            );
          })}
        </div>
        <button
          className="btn btn-primary"
          id="mobileNavBtn"
          onClick={toggleOverlay}
        >
          {overlayOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <Navbar expand="md" bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            JamesFest
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {navItems.map((item, index) => {
                return (
                  <Nav.Link key={index} href={item.link}>
                    {item.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
