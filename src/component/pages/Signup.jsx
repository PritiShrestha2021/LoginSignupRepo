import axios from 'axios';
import React, { useState} from 'react';


function Signup() {   
const [SignupData,setSignupData] = useState({
    name:"",
    address:"",
    phoneNumber:"",
    userName :"",
    password:""
})

const [message,setMessage] = useState({});

const handleSignup = async(e) =>{
    e.preventDefault();
    console.log(SignupData);
    const postData = await axios.post('http://localhost:3001/signup/create', SignupData);
  //  console.log(postData.data);
    setMessage(postData.data);

}

const onChangeHandler = async(e) => {
    setSignupData({...SignupData,[e.target.name]:e.target.value })
}

return (
    <div>
        <h1>Signup Page !!!</h1>
        <form />
        <div>
           <label>Name: </label>
       <input
        type="text"
        name="name"
        onChange={(e)=> onChangeHandler(e)}
        value={SignupData.name}
        placeholder="Enter name"
      />           
       </div> 
       <div>
           <label>Address: </label>
       <input
        type="text"
        name="address"
        onChange={(e)=> onChangeHandler(e)}
        value={SignupData.address}
        placeholder="Enter address"
      />           
       </div> 
       <div>
           <label>PhoneNumber: </label>
       <input
        type="text"
        name="phoneNumber"
        onChange={(e)=> onChangeHandler(e)}
        value={SignupData.phoneNumber}
        placeholder="Enter phonenumber"
      />           
       </div> 


       <div>
           <label>Username: </label>
       <input
        type="text"
        name="userName"
        onChange={(e)=> onChangeHandler(e)}
        value={SignupData.userName}
        placeholder="Enter username"
      />           
       </div> 
       <div><label>Password:</label> 
       <input
        type="text"
        name="password"
        onChange={(e)=> onChangeHandler(e)}
        value={SignupData.password}
        placeholder="Enter password"
      />           
       </div> 
       <button type="button" onClick={(e) => handleSignup(e)}>
            Signup
        </button>
        {
            message.msg
        }
    </div>
)
}

export default Signup