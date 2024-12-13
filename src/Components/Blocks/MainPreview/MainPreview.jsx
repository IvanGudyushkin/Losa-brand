import React from 'react';
import cl from "./MainPreview.module.css";
import arrow from '../../../Assets/Icons/Arrow.svg'
import {useNavigate} from "react-router-dom";
import {useWindowSize} from "../../../Hooks/useWindowSize";


const MainPreview = () => {
    const navigate = useNavigate()
    const [width] = useWindowSize()
    return (
        <div className={cl.preview}>
            <div className={cl.content}>
                <div className={cl.previewContent}>
                    {
                        width >= 560  &&
                        <>
                            <p>Сказка открывает свои объятия для тех,</p>
                            <p>кто готов</p>
                        </>
                    }
                    {
                        width < 560  &&
                        <>
                            <p>Сказка</p>
                            <p>открывает свои объятия для тех, кто готов</p>
                        </>
                    }
                </div>
                <button className={cl.button} onClick={()=> navigate('/collection')}>
                    прикоснуться к чуду <img src={arrow} alt={'arrow'}/>
                </button>
            </div>
        </div>
    );
};

export default MainPreview;