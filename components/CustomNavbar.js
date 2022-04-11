import Image from "next/image";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

export const CustomNavbar = () => {
  return (
    <>
      <div id="myNav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>
          &times;
        </a>

        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <button className="btn btn-danger" id="mobileNavBtn" onClick={() => openNav()}>open</button>
    </>
  );
};

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
} 
