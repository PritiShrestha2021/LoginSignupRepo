import React from 'react'
import './navbar.css'
import {useHistory, withRouter} from 'react-router-dom'
  
function Navbar() {
    const history = useHistory()

    const handleClick = (urlPath) => {       
        history.push(urlPath);
    }
console.log(window.location.pathname,"pathname" );
    return(        
        <div>
            <div className="flex">   
                <div className = {`nav-item ${window.location.pathname === "/home" ? "activeColor" : ""}`} onClick={()=> handleClick("/home")}  >
                        Home
                </div>   
                <div className = {`nav-item ${window.location.pathname === "/contact" ? "activeColor" : ""}`} onClick={()=> handleClick("/contact")} >                        
                        Contact
                </div>
                <div className = {`nav-item ${window.location.pathname === "/login" ? "activeColor" : ""}`} onClick={()=> handleClick("/login")} >              
                    Login
                </div>
                <div className = {`nav-item ${window.location.pathname === "/signup" ? "activeColor" : ""}`} onClick={()=> handleClick("/signup")}  >              
                    Signup
                </div>
                <div className = {`nav-item ${window.location.pathname === "/aboutUs" ? "activeColor" : ""}`} onClick={()=> handleClick("/aboutUs")} > 
                    About Us 
                </div>
            </div>  
        </div>      
    )
}
export default withRouter(Navbar);