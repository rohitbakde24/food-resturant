import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

const Cart = () => {
    const [state, setState] = useState(false)
    
     const openModal = () => setState(true);
     const closeModal = () => setState(false);
  return (
    <>
          <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={openModal}>
          Launch demo modal
        </Button>
      </div>

        <Modal  show={state} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  

export default Cart