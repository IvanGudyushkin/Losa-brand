import React from 'react';
import cl from "./MainFrame3.module.css";
import {ContentMain} from "../../../Pages/Main/ContentMain";
import {useWindowSize} from "../../../Hooks/useWindowSize";

const MainFrame3 = () => {

    const [width] = useWindowSize()

    return (
        <div className={cl.block}>
            <div className={cl.content}>
                {width >= 1400 && <p>{ContentMain.frame3.desktop}</p>}
                {(width < 1400 && width >= 560) && <p>{ContentMain.frame3.notebook}</p>}
                {(width < 560) && <p>{ContentMain.frame3.phone}</p>}
            </div>
        </div>
    );
};

export default MainFrame3;