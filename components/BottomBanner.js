import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { navItems } from "./data/navItems";
import { BottomBannerModal } from "./BottomBannerModal";

export const BottomBanner = () => {
  const [whatsNew, setWhatsNew] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
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

  const dismissBanner = (e) => {
    e.currentTarget.disabled = true; // Disable button
    document
      .querySelector("#bottomBanner")
      .classList.add("animate__fadeOutDown"); // Animate fade out
  };

  return (
    <>
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
                className="mx-auto w-100"
                style={{ maxWidth: "500px" }}
                variant="primary"
                size="sm"
                onClick={handleShow}
              >
                View Updates
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <BottomBannerModal
        showModal={showModal}
        handleClose={handleClose}
        whatsNew={whatsNew}
      />
    </>
  );
};
