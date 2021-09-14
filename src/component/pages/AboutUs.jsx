import axios from "axios";
import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AboutUs() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const onImageChangeHandler = async (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };
  const onUploadHandler = async () => {
    const formdata = new FormData();
    formdata.append("imagepath", image);

    const uploadImageData = await axios.post(
      "http://localhost:3001/dashboard/uploadimage",
      formdata
    );

    setMessage(uploadImageData.data.msg);

    console.log(uploadImageData.data.msg, "upload sucsess check");
  };

  return (
    <div>
      <Button onClick={() => handleShow()}>Open Modal</Button>
      <Modal show={show}>
        <Modal.Header>Are you sure?</Modal.Header>

        <Modal.Body>If you click yes , user will be deleted</Modal.Body>

        <Modal.Footer>
          <Button>Yes</Button>
          <Button onClick={() => handleClose()}>No</Button>
        </Modal.Footer>
      </Modal>
      <div>
        <label>Upload Image:</label>
        <input
          type="file"
          name="image"
          onChange={(e) => onImageChangeHandler(e)}
          accept=".jpg,.png" //"image/*"
        ></input>
      </div>
      <div>
        <button type="submit" onClick={() => onUploadHandler()}>
          Upload
        </button>
      </div>
      {message && <div>{message}</div>}
    </div>
  );
}

export default AboutUs;
