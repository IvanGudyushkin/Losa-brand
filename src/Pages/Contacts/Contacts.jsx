import React from 'react';
import cl from './Contacts.module.css'
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import love from "../../Assets/Icons/Mask group.webp";
const Contacts = () => {

    const breadcrumbs = [
        { title: 'Главная', path: '/' },
        { title: 'Контакты', path: '/contacts' },
    ];

    return (
        <div className={cl.block}>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <div className={cl.content}>
                <p className={cl.text}>По всем вопросам и предложениям писать на почту или в телеграм-аккаунт бренда LOSA:</p>
                <p className={cl.contacts}>
                    losa.support@gmail.com <br/>
                        @losa_support
                </p>
                <img className={cl.love} src={love} alt={'С любовью, волшебство'}/>
            </div>
        </div>
    );
};

export default Contacts;