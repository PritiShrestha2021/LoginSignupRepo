import axios from "axios";
import React, { useState } from "react";

function Signup(props) {
  console.log("inside sigup page");
  const [SignupData, setSignupData] = useState({
    name: props.item ? props.item.name : "",
    address: props.item ? props.item.address : "",
    phoneno: props.item ? props.item.phoneno : "",
    username: props.item ? props.item.username : "",
    password: props.item ? props.item.password : "",
  });

  const [message, setMessage] = useState({});

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(SignupData);
    const postData = await axios.post(
      "http://localhost:3001/signup/create",
      SignupData
    );
    //  console.log(postData.data);
    setMessage(postData.data);
    console.log(postData, "data");
  };

  const onChangeHandler = async (e) => {
    setSignupData({ ...SignupData, [e.target.name]: e.target.value });
  };

  const onChangeImageHandler = async (e) => {
    console.log(e.target.files);
  };

  return (
    <div>
      <h1>Signup Page !!!</h1>
      <form />
      <div>
        <label>Insert Image:</label>
        <input
          type="file"
          name="file"
          onChange={(e) => onChangeImageHandler(e)}
        ></input>
      </div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => onChangeHandler(e)}
          value={SignupData.name}
          placeholder="Enter name"
        />
      </div>
      <div>
        <label>Address: </label>
        <input
          type="text"
          name="address"
          onChange={(e) => onChangeHandler(e)}
          value={SignupData.address}
          placeholder="Enter address"
        />
      </div>
      <div>
        <label>PhoneNumber: </label>
        <input
          type="text"
          name="phoneno"
          onChange={(e) => onChangeHandler(e)}
          value={SignupData.phoneno}
          placeholder="Enter phonenumber"
        />
      </div>
      <div>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          onChange={(e) => onChangeHandler(e)}
          value={SignupData.username}
          placeholder="Enter username"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          name="password"
          onChange={(e) => onChangeHandler(e)}
          value={SignupData.password}
          placeholder="Enter password"
        />
      </div>

      {!props.item && (
        <button type="button" onClick={(e) => handleSignup(e)}>
          Signup
        </button>
      )}
      {message.msg}
    </div>
  );
}

export default Signup;
