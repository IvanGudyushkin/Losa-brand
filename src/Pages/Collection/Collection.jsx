import React from 'react';
import MainCollectionStoryBlock from "../../Components/Blocks/MainCollectionStoryBlock/MainCollectionStoryBlock";
import cl from './Collection.module.css'
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Collection = () => {
    const breadcrumbs = [
        { title: 'Главная', path: '/' },
        { title: 'Коллекция', path: '/collection' },
    ];
    return (
        <div className={cl.block}>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <MainCollectionStoryBlock isCollection={true}/>
        </div>
    );
};

export default Collection;