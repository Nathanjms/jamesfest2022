import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import { navItems } from "./data/navItems";

export const CustomNavbar = ({ homeLinkOnly = false }) => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const router = useRouter();

  const navLinks = homeLinkOnly ? [{ name: "Home", link: "/" }] : navItems;
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
        navItems={navLinks}
        toggleOverlay={toggleOverlay}
        overlayOpen={overlayOpen}
      />
      <DesktopNavbar
        navItems={navLinks}
        toggleOverlay={toggleOverlay}
        pathName={router.pathname}
      />
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
          <Link href="/" passHref={true}>
            <a onClick={toggleOverlay}>
              <Image
                src="/JamesFestText.webp"
                alt="JamesFest Logo"
                width={200}
                height={50}
                objectFit="fill"
              />
            </a>
          </Link>
        </div>

        <div className="overlay-content text-white">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.link} passHref={true}>
                <a onClick={toggleOverlay}>{item.name}</a>
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

const DesktopNavbar = ({ navItems, toggleOverlay, pathName }) => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="md" fixed="top" id="navbar">
        <Container>
          <Link href="/" passHref={true}>
            <Navbar.Brand className="w-100 d-inline-block align-top">
              <div className="navImageLogo">
                <Image
                  src="/JamesFestText.webp"
                  height={100}
                  width={350}
                  alt="JamesFest"
                  // objectFit="contain"
                />
              </div>
            </Navbar.Brand>
          </Link>
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
                  <Link href={item.link} passHref={true} key={index}>
                    <Nav.Link
                      className={pathName === item.link ? "active" : ""}
                    >
                      {item.name}
                    </Nav.Link>
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
