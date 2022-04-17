import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  {
    name: "Directions",
    link: "/directions",
  },
  {
    name: "Accommodation",
    link: "/accommodation",
  },
  {
    name: "Music",
    link: "/music",
  },
  {
    name: "Catering",
    link: "/catering",
  },
  {
    name: "The Day",
    link: "/day",
  },
  {
    name: "Venue",
    link: "/venue",
  },
];

export const CustomNavbar = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = (e) => {
    let overlay = document.querySelector("#navOverlay");
    let mobileNavBtn = e.currentTarget;

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
      <MobileOverlay
        navItems={navItems}
        toggleOverlay={toggleOverlay}
        overlayOpen={overlayOpen}
      />
      <DesktopNavbar navItems={navItems} toggleOverlay={toggleOverlay} />
    </>
  );
};

const MobileOverlay = ({ navItems, toggleOverlay, overlayOpen }) => {
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
            objectFit="fill"
          />
        </div>

        <div className="overlay-content text-white">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.link} onClick={toggleOverlay}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <button
        className="btn btn-primary"
        id="mobileNavBtn"
        onClick={toggleOverlay}
      >
        {overlayOpen ? <FaTimes /> : <FaBars />}
      </button>
    </>
  );
};

const DesktopNavbar = ({ navItems, toggleOverlay }) => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="md" fixed="top" id="navbar">
        <Container>
          <Navbar.Brand className="w-100 d-inline-block align-top" href="/">
            <div className="navImageLogo">
              <Image
                src="/JamesFestText.png"
                height={100}
                width={350}
                alt="JamesFest"
                objectFit="contain"
              />
            </div>
          </Navbar.Brand>
          <button
            className="btn btn-light navbar-toggler"
            style={{ border: 0 }}
            onClick={toggleOverlay}
          >
            <FaBars />
          </button>
          <Navbar.Collapse>
            <Nav>
              {navItems.map((item, index) => {
                return (
                  <Link passHref={true} key={index} href={item.link}>
                    <Nav.Link>{item.name}</Nav.Link>
                  </Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
