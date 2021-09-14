import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function DeleteBtn(props) {
  console.log(props);
  return (
    <Modal show={props.show} centered>
      <Modal.Header>Are you sure?</Modal.Header>
      <Modal.Body>If you click yes , user will be deleted</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.deleteItem}>Yes</Button>
        <Button onClick={props.handleClose}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}
