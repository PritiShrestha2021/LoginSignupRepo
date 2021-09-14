import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Signup from "../pages/Signup";

export default function EditBtn(props) {
  console.log(props.selectedItem);

  const [editData, setEditData] = useState("");

  useEffect(() => {
    setEditData(props.selectedItem);
  }, []);

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   console.log(SignupData);
  //   const postData = await axios.post(
  //     "http://localhost:3001/signup/create",
  //     SignupData
  //   );
  //   //  console.log(postData.data);
  //   setMessage(postData.data);
  // };

  const onChangeHandler = async (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={props.editshow} centered>
      <Modal.Header>Edit!!!</Modal.Header>
      <Modal.Body>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => onChangeHandler(e)}
            value={editData.name}
            placeholder="Name"
          />
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            name="address"
            onChange={(e) => onChangeHandler(e)}
            value={editData.address}
            placeholder="Enter address"
          />
        </div>
        <div>
          <label>PhoneNumber: </label>
          <input
            type="text"
            name="phoneno"
            onChange={(e) => onChangeHandler(e)}
            value={editData.phoneno}
            placeholder="Enter phonenumber"
          />
        </div>
        {/* <Signup item={props.selectedItem} /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.editOKItem(editData)}>OK</Button>
        <Button onClick={props.handleEditCancel}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
