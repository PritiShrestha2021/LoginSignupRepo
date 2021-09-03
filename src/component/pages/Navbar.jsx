import React from 'react'
import './navbar.css'
import {useHistory, withRouter, Redirect} from 'react-router-dom'
  
function Navbar() {

   const history = useHistory()

    const handleClick = (urlPath) => {       
        history.push(urlPath);
    }

    console.log(window.location.pathname,"pathname" );

    const checkToken = localStorage.getItem('token');

    const handleLogout = () => {
        console.log("inside logout");
       // localStorage.clear(); //removes all localstorage
       localStorage.removeItem('token');
       window.location.replace('/login');
      
     // return <Redirect to="/home"/>

    }

    return(        
        <div>
            
            {checkToken?
         <div className="flex">  
                    <div className = {`nav-item ${window.location.pathname === "/home" ? "activeColor" : ""}`} onClick={()=> handleClick("/home")}  >
                            Home
                    </div>   
                    <div className = {`nav-item ${window.location.pathname === "/contact" ? "activeColor" : ""}`} onClick={()=> handleClick("/contact")} >                        
                            Contact
                    </div>
                    <div className = {`nav-item ${window.location.pathname === "/aboutUs" ? "activeColor" : ""}`} onClick={()=> handleClick("/aboutUs")} > 
                    About Us 
                </div>
                <div className = "nav-item"  onClick={()=> handleLogout()} > 
                    Log out 
                </div>
                </div>
                :
                <><div className="flex">  
                    <div className = {`nav-item ${window.location.pathname === "/login" ? "activeColor" : ""}`} onClick={()=> handleClick("/login")} >              
                        Login
                    </div>
                    <div className = {`nav-item ${window.location.pathname === "/signup" ? "activeColor" : ""}`} onClick={()=> handleClick("/signup")}  >              
                        Signup
                    </div>
                    </div>
                </>}
                

            </div>  
        
    )
}
export default withRouter(Navbar);