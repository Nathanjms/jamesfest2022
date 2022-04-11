import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const CustomNavbar = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    let overlay = document.querySelector("#myNav");
    let mobileNavBtn = document.querySelector("#mobileNavBtn");
    if (overlayOpen) {
      closeNav(overlay);
    } else {
      openNav(overlay);
    }
    setOverlayOpen(!overlayOpen);
  };
  /* Open when someone clicks on the span element */
  function openNav(overlay) {
    overlay.style.height = "100%";
    document.querySelector("body").classList.add("overlay-open");
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav(overlay) {
    overlay.style.height = "0%";
    document.querySelector("body").classList.remove("overlay-open");
  }

  return (
    <>
      <div id="myNav" className="overlay">
        <a href="#" className="closebtn" onClick={() => closeNav()}>
          &times;
        </a>

        <div className="overlay-content text-white">
          <Image
            src="/JamesFestText.png"
            alt="JamesFest Logo"
            width={200}
            height={50}
          />
          {/* <h3>JamesFest</h3> */}
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <button
          className="btn btn-danger"
          id="mobileNavBtn"
          onClick={toggleOverlay}
        >
          {overlayOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </>
  );
};
