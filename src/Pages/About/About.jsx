import React from 'react';
import cl from './About.module.css'
import MainLosaBlock from "../../Components/Blocks/MainLosaBlock/MainLosaBlock";
import MainFrame3 from "../../Components/Blocks/MainFrame3/MainFrame3";
import BlockLove from "../../Components/Blocks/BlockLove/BlockLove";
const About = () => {

    return (
        <div className={cl.block}>
            <MainLosaBlock isAbout={true}/>
            <MainFrame3/>
            <BlockLove/>
        </div>
    );
};

export default About;