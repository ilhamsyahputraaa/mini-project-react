import GitHub from '../assets/sosmed icons/github.svg'
import Behance from '../assets/sosmed icons/behance.svg'
import Dribbble from '../assets/sosmed icons/dribbble.svg'
import Instagram from '../assets/sosmed icons/instagram.svg'
import LinkedIn from '../assets/sosmed icons/linkedin.svg'
import Logo from '../assets/logo/logo FUll dark.png'

function Footer () {
    return (
        <>
        <footer className="bg-dark text-white" >
            <div className="container-fluid px-5 py-5" id="footeratas">
                {/* Baris pertama */}
            <div id="barisPertama" className="row">
                {/* Kolom 1 */}
                <div id="kolom1" className="col-md-3">
                    <img src={Logo} alt=""/>
                <p>Informasi tentang film terbaru dan film paling populer di box office worldwide.</p>
                </div>
                {/* Kolom 3 */}
                <div id="kolom3" className="col-md-3">
                
                </div>
                {/* Kolom 2 */}
                <div id="kolom2" className="col-md-3">
                <h5>About OnFlix</h5>
                <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="/contact-us.html">Contact Us</a></li>
                    <li><a href="#watch-list">Watch List</a></li>
                    <li><a data-bs-toggle="modal" data-bs-target="#signInModal">Log In</a></li>
                </ul>
                </div>
                {/* Kolom4 */}
                <div id="kolom4" className="col-md-3">
                <h5>Follow Me</h5>
                <ul className="list-unstyled">
                    <li><a href="https://dribbble.com/arteroid"> <img src={Dribbble} alt=""/> Dribbble</a></li>
                    <li><a href="https://www.behance.net/ilhamsyahzp"> <img src={Behance} alt=""/> Behance</a></li>
                    <li><a href="https://github.com/ilhamsyahputraaa"> <img src={GitHub} alt=""/> Github</a></li>
                    <li><a href="https://www.instagram.com/ilhamsyahzp/"> <img src={Instagram} alt=""/> Instagram</a></li>
                    <li><a href="https://www.linkedin.com/feed/"> <img src={LinkedIn} alt=""/>LinkedIn</a></li>
                </ul>
                </div>
            </div>
            </div>

            {/* Baris kedua */}
            <div className="container-fluid bg-secondary py-3">
            <div className="container text-center">
                <p className="mb-0">&copy; Ilhamsyah Putra. All rights reserved.</p>
            </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;