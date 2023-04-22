import React from "react";
import "../css/navbar.css";
import logo from "../img/LOGO.png";
import { Link} from "react-router-dom";
import useToken from "../page/useToken";

function logout() {
    sessionStorage.removeItem("token");
    window.location.replace("http://localhost:3000/Signin");
  }
function Navbar() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="header">
        <img className="navlogo" src={logo} alt=""/>
        <nav className="navbar">
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link className="createbtn " to="/EaProduct">
                EA Product
              </Link>
            </li>
            <li>
              <Link to="/Signin">Log In </Link>
            </li>
          </ul>
        </nav>
        
      </div>
    );
  } else {
    var str1 = sessionStorage.getItem("token").replace(/(")/, "");
    var str2 = str1.replace(/(")/, "");
    //console.log(str2);
    if (str2 === "admin") {
      return (
        <div className="header">
          <img className="navlogo" src={logo} alt=""/>
          <nav className="navbar">
            <ul className="admin">
              <li>
                <Link to="/dashbord" >
                  Dashbord
                </Link>
              </li>
              <li>
                <Link onClick={logout}> Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="header">
        <img className="navlogo" src={logo} alt=""/>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link className="createbtn " to="/EaProduct">
                Ea Product
              </Link>
            </li>
            <li>
                <Link onClick={logout}> Logout</Link>
              </li>
          </ul>
        </nav>

      </div>
        
      );
    }
  }
}
export default Navbar;
