import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const DeleteConfirmation = (props) => {
  return (
    <>
      <Modal show={props.showModel} onHide={()=>{}}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{}}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{}}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteConfirmation;