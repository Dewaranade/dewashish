import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css"
function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return ( 
        <header>
            <h3 className="logo" href="/#home">Dewashish Ranade</h3>
             <nav ref={navRef}>
                
                <a href="/#about" onClick={showNavbar}>About</a>
                <a href="/#skills" onClick={showNavbar}>Skills</a>
                <a href="/#projects" onClick={showNavbar}>Projects</a>
                <a href="/#company" onClick={showNavbar}>Experiences</a>
                <a href="/#contact" onClick={showNavbar}>Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}> 
                    <FaTimes/>
                </button>
             </nav>
             <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
             </button>
        </header>
     );
}

export default Navbar;