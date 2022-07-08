import Link from "next/link";
import { Button, Modal } from "react-bootstrap";

export const BottomBannerModal = ({ showModal, handleClose, whatsNew }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Updates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalBodyContent whatsNew={whatsNew} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" size="sm" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const ModalBodyContent = ({ whatsNew }) => (
  <>
    <p>
      Below are the sections that have been updated since your last site visit.
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
