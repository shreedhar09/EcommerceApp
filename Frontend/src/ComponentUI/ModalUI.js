import React from "react";
import { Modal, Button } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        
        <Modal.Title id="contained-modal-title-vcenter" className="head">
          Drop us a line
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label head">
              Email Address
            </label>
            <input type="text" className="form-control" id="recipient-name" />
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label head">
              Message
            </label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-primary">
          Send message
        </button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
