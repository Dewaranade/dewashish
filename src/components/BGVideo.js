import React from "react";
import BGVid from '../assets/video.mp4'
import Social from "./Social";
import Data from "./Data";
import '../Styles/bgvideo.css'

const BGVideo = () => {
    return(
        <div className="bgContainer">
            <div className="overlay">
                <video src={BGVid} autoPlay loop muted />
                <div className="content">
                </div>
            </div>

        </div>
    )
}

export default BGVideo;