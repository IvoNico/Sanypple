import React, { useState, useContext } from 'react';
import { CartContext } from '../../Utils/CartContext/CartContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function Example({handleCloses, open , children}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {totalPrice} = useContext(CartContext);

  return (
    <>
    <h3>Checkout</h3>
    <p>Precio Total: ${totalPrice}</p>
      <Button variant="primary" onClick={handleShow}>
        Completar Compra
      </Button>

      <Modal show={show} onHide={handleClose} onClose={handleCloses} open={open}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        {children}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

