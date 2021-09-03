import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import AboutUs from "./component/pages/AboutUs";
import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";
import Navbar from "./component/pages/Navbar";

function App() {
  const getToken = localStorage.getItem('token');//verify ??
  console.log(getToken)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />      
       <Switch>
        <Route exact path="/home" component={Home} />
        <Route  path="/aboutus" component={AboutUs} />        
        <Route  path="/contact" component={Contact} />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={Signup} />        
        </Switch>
      </BrowserRouter>
    
        {/* <Header title="React" description={desc} />
      <Header title="Lorem" description={lorem} /> */}
    </div>
  );
}

export default App;
