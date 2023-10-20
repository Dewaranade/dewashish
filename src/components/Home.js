import { useRef } from "react";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import "../Styles/home.css"
import bgvideo from "../assets/video.mp4"
import Social from "./Social";
import Data from "./Data";
import BGVideo from "./BGVideo";

function Home() {
    const navRef = useRef();

    return (
        <div>
            {/* <h1>Dewashish</h1>
            <p>Designer | Engineer | Gamer</p> */}
            {/* <BGVideo/> */}

            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />
                        <div className="home__img"></div>
                        
                        <Data />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;