import React from 'react';
import cl from './Main.module.css'
import MainPreview from "../../Components/Blocks/MainPreview/MainPreview";

const Main = () => {

    return (
        <div className={cl.block}>
            <MainPreview/>
        </div>
    );
};

export default Main;