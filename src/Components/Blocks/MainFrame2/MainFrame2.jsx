import React, {useEffect, useRef} from 'react';
import cl from "./MainFrame2.module.css";
import video from "../../../Assets/Video/DSC_0080.webm";
import {ContentMain} from "../../../Pages/Main/ContentMain";
import {useWindowSize} from "../../../Hooks/useWindowSize";

const MainFrame2 = () => {

    const [width] = useWindowSize()

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <div className={cl.frame2}>
            <video ref={videoRef} className={cl.video} autoPlay muted loop playsInline>
                <source src={video} type="video/webm"/>
            </video>
            {width >= 1400 && <p>{ContentMain.frame2.desktop}</p>}
            {(width < 1400 && width >= 560) && <p>{ContentMain.frame2.notebook}</p>}
            {width < 560 && <p>{ContentMain.frame2.phone}</p>}
        </div>
    );
};

export default MainFrame2;