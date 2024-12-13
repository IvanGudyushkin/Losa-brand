import React from 'react';
import cl from './Footer.module.css'
import telega from '../../Assets/Icons/Telegram.svg'
import mail from'../../Assets/Icons/Mail.svg'
import inst from'../../Assets/Icons/inst.svg'
const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.content}>
                <div className={cl.col1}>
                    <span className={cl.link}>Пользовательское соглашение</span>
                    <span className={cl.link}>Политика обработки персональных данных</span>
                </div>
                <div className={cl.col2}>
                    <button className={cl.telega}>
                        <img src={telega} alt={'Telegram'}/>
                    </button>
                    <button className={cl.telega}>
                        <img src={mail} alt={'mail'}/>
                    </button>
                    <button className={cl.telega}>
                        <img src={inst} alt={'instagram'}/>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;