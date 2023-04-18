import { useState, useEffect } from 'react';
import onFlixLogo from '../assets/onflix logo.png'
import '../index.css'
import { NavDropdown } from "react-bootstrap";
useState

function NavigationBar () {

  const [isLogin, setIsLogin] = useState(false);
  const [usernameID, setUsernameID] = useState("");

  const handleIsLogin = () => {
    localStorage.getItem("SID") ? setIsLogin(true) : setIsLogin(false);
  };

  // Delete Session ID
  const deleteSession = () => {
    alert("You have logged out!");
    localStorage.removeItem("SID");
    setIsLogin(false);
    axios({
      method: "post",
      url: `https://api.themoviedb.org/3/authentication/session?api_key=${process.env.REACT_APP_APIKEY}`,
      data: {
        session_id: sessionID,
      },
    });
  };

  useEffect(() => {
    handleIsLogin();

    // Fetch account details
    if (isLogin) {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_APIKEY}&session_id=${sessionID}`,
      }).then(function (response) {
        setUsernameID(response.data.username);
      });
    }
  });

  const sessionID = localStorage.getItem("SID");

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark nav-transparent position-fixed w-100">
            <div className="container-fluid  ">
                {/* Logo Website */}
              <a className="navbar-brand" href="#"> <img src={onFlixLogo} alt="" className='OnFlix-Logo' /> </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Area Burger Menu */}
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                {/* Menu */}
                <ul className="navbar-nav col justify-content-center mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link nav-active" aria-current="page" href="./index.html">Home</a>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="">Coming Soon</a></li>
                  <li className="nav-item"><a className="nav-link" href="">On Cinema</a></li>
                  <li className="nav-item"><a className="nav-link" href="">Contact Us</a></li>
                </ul>
                {/* Button Log In */}
                
                <div className="forLogin">
                  {isLogin ? (
                    <NavDropdown title={usernameID} id="nav-dropdown">
                      <NavDropdown.Item >View Profile</NavDropdown.Item>
                      <NavDropdown.Item onClick={deleteSession}>Logout</NavDropdown.Item>
                      
                    </NavDropdown>
                  ) : (<a href="/login" className="login-header">
                        Login
                      </a>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </>
    )
}

export default NavigationBar;