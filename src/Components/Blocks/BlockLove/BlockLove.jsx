import React from 'react';
import cl from "./BlockLove.module.css";
import love from "../../../Assets/Icons/Mask group.webp";
import {loveInfo} from "./info";
import {useWindowSize} from "../../../Hooks/useWindowSize";

const BlockLove = () => {
    const [width] = useWindowSize()

    return (
        <div className={cl.block}>
            <div className={cl.block1}>
                <span className={cl.col1}>ценности проекта</span>
                <div className={cl.col2}>
                    <span className={cl.word1}>рукотворность</span>
                    <span className={cl.word2}>чудо</span>
                    <span className={cl.word3}>природность</span>
                </div>
            </div>
            <div className={cl.block2}>
                {width >= 1400 && <p>{loveInfo.desktop}</p>}
                {(width < 1400 && width >= 960) &&<p>{loveInfo.notebook}</p>}
                {width < 560 && <p>{loveInfo.phone}</p>}
                <img className={cl.love} src={love} alt={'С любовью, волшебство'}/>
            </div>
        </div>
    );
};

export default BlockLove;