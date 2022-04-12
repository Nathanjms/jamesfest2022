import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <a href="#" className="closeBtn" id="overlayCloseBtn" tabIndex={0} onClick={toggleOverlay}>
          &times;
        </a>
        <div className="pt-5 text-center">
          <Image
            src="/JamesFestText.png"
            alt="JamesFest Logo"
            width={200}
            height={50}
          />
        </div>

        <div className="overlay-content text-white">
          {/* <h3>JamesFest</h3> */}
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contacts">Contact</a>
        </div>
        <button
          className="btn btn-primary"
          id="mobileNavBtn"
          onClick={toggleOverlay}
        >
          {overlayOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </>
  );
};
