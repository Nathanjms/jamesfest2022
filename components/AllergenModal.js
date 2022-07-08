import { Button, Modal } from "react-bootstrap";

export const AllergenModal = ({ showModal, handleShow, handleClose }) => {
  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        View Allergens Info
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Allergens Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Afternoon Tea</h5>
          {allergenInfo.afternoonTea}
          <h5>Dinner</h5>
          {allergenInfo.dinner}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="sm" onClick={handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const allergenInfo = {
  afternoonTea: (
    <>
      <p>
        Guests should be warned of the following allergens for the afternoon tea
        service, we will also place a warning label.
      </p>
      <ul className="text-start">
        <li>Gluten </li>
        <li>Eggs </li>
        <li>Milk </li>
        <li>Fish </li>
        <li>Mustard </li>
        <li>Soy </li>
        <li>Sulphur and Sulphites </li>
        <li>Nuts (Although we will not use nuts)</li>
      </ul>
    </>
  ),
  dinner: (
    <>
      <p>For the evening food the allergens will be:</p>
      <ul className="text-start">
        <li> Gluten </li>
        <li> Eggs </li>
        <li> Milk </li>
        <li> Mustard </li>
        <li>Soy</li>
      </ul>
    </>
  ),
};
