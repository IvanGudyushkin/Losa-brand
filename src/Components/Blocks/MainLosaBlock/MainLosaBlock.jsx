import React from 'react';
import cl from './MainLosaBlock.module.css'
import losa from '../../../Assets/Icons/Title.svg'
import losamobile from '../../../Assets/Icons/LosaMobile.svg'
import {useWindowSize} from "../../../Hooks/useWindowSize";
const MainLosaBlock = ({isAbout= false}) => {
    const [width] = useWindowSize()
    return (
        <div className={cl.block}>
            <div className={cl.content}>
                {width >= 560 && <img className={cl.title} src={losa} alt={'losa'}/>}
                {width < 560 && <img className={cl.title} src={losamobile} alt={'losa'}/>}
            </div>
        </div>
    );
};

export default MainLosaBlock;