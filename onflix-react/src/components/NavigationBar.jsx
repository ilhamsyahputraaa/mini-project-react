import { useState, useEffect } from 'react';
import onFlixLogo from '../assets/onflix logo.png'
import '../index.css'
import { NavDropdown } from "react-bootstrap";

function NavigationBar () {

  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }
  const isLogin = JSON.parse(localStorage.getItem("session"));
  const account = JSON.parse(localStorage.getItem("account"));

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
                  {isLogin ? (<NavDropdown title={account.username} id="nav-dropdown" className='btn btn-warning me-2'>
                      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                      
                    </NavDropdown>
                    
                  ) : (
                    <a href="/login" className="btn btn-warning me-2">
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