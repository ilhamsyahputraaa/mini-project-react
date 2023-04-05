function NavBar () {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark nav-transparent position-fixed w-100">
            <div className="container-fluid  ">
                {/* Logo Website */}
              <a className="navbar-brand" href="#"><img src="/src/onflix logo.png" alt="onflix" style="width: 9rem"/></a>
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
                  <li className="nav-item"><a className="nav-link" href="#coming-soon">Coming Soon</a></li>
                  <li className="nav-item"><a className="nav-link" href="#on-cinema">On Cinema</a></li>
                  <li className="nav-item"><a className="nav-link" href="./contact-us.html">Contact Us</a></li>
                </ul>
                {/* Button Log In */}
                <button type="button" className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#signInModal">Log In</button>
                
              </div>
            </div>
          </nav>
        </>
    )
}

export default NavBar;