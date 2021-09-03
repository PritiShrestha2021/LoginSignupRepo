import axios from 'axios';
import React, { useState} from 'react';

function Login() {
    //const [text, setText] = useState(null);
    //const [unamepwdvalue, setUnamePwdValue] = useState(0);

    
const [loginData,setLoginData] = useState({
    username :"",
    password:""
})
  
const [message,setMessage] = useState({});
    
    const handleLogin = async (event) => {
       // console.log("Inside Handle Login");
       event.preventDefault();
       console.log(loginData)
       const postData = await axios.post('http://localhost:3001/login', loginData)
       console.log(postData.data)
       console.log(postData.data.token);

       setMessage(postData.data);
        const Token = postData.data.token;
       localStorage.setItem("token",Token);
       window.location.replace('/home');

    };
console.log(message.msg);

    const onChangeHandler = async (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form />
           <div>
               <label>Username: </label>
           <input
            type="text"
            name="username"
            onChange={(e)=> onChangeHandler(e)}
            value={loginData.username}
            placeholder="Enter username"
          />           
           </div> 
           <div><label>Password:</label> 
           <input
            type="text"
            name="password"
            onChange={(e)=> onChangeHandler(e)}
            value={loginData.password}
            placeholder="Enter password"
          />           
           </div> 
           <button type="button" onClick={(e) => handleLogin(e)}>
                Login
            </button>
            <div>
                {
                    message.msg
                }
            </div>
        </div>
    )
}

export default Login