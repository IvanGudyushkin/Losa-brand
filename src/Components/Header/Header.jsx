import React, {useEffect, useState} from 'react';
import cl from './Header.module.css'
import losa from '../../Assets/Icons/Logo.svg'
import {Link, useNavigate} from "react-router-dom";
import cart from '../../Assets/Icons/HeaderCart.svg'
import {useWindowSize} from "../../Hooks/useWindowSize";
import menu from '../../Assets/Icons/humburger.svg'
import x from '../../Assets/Icons/x.svg'
const Header = () => {
    const navigate = useNavigate();
    const [width] = useWindowSize()

    console.log(width)
    const goToHome = () => {
        navigate('/'); // Переход на главную страницу
    };

    const goToCart = () => {
        navigate('/cart')
    }

    const [menuVisible, setMenuVisible] = useState(false);
    const [ menuHeight, setMenuHeight] = useState('48px'); // Start with 0px to avoid initial expansion

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);

        // Update the height based on current visibility and content height
        if (!menuVisible) {  // If the menu is about to be opened
            setMenuHeight(`220px`); // Set the height to scrollHeight
        } else { // If the menu is about to be closed
            setMenuHeight('48px'); // Collapse it smoothly
        }
    };

    const closeMenu = (event) => {
        if ((!event.target.closest(`.${cl.mobileMenu}`) && !event.target.closest(`.${cl.menu}`)) || event.target.closest(`.${cl.link}`)) {
            setMenuVisible(false);
            setMenuHeight('48px'); // Reset height when menu is closed from outside click
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeMenu);
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);

    return (
        <>
            { width >= 560 &&
                <header className={cl.header}>
                    <div className={cl.content}>
                        <button onClick={goToHome} className={cl.logo}>
                            <img src={losa} alt={'losa'}/>
                        </button>
                        <div className={cl.items}>
                            <Link to={'/collection'} className={cl.link}>коллекция</Link>
                            <Link to={'/about'} className={cl.link}>о бренде</Link>
                            <Link onClick={closeMenu} to={'/contacts'} className={cl.link}>контакты</Link>
                            <button onClick={goToCart} className={cl.cart}>
                                <img src={cart} alt={'Корзина'}/>
                            </button>
                        </div>
                    </div>
                </header>
            }
            {
                width < 560 &&
                <header className={cl.header} style={{ maxHeight: menuHeight }}>
                    <div className={`${cl.mobileMenu} ${menuVisible ? cl.visible : ''}`}>
                        <div className={cl.content}>
                            <button onClick={goToHome} className={cl.logo}>
                                <img src={losa} alt={'losa'}/>
                            </button>
                            <button onClick={toggleMenu} className={cl.cart}>
                                {menuVisible ? <img src={x} alt={'losa'}/> : <img src={menu} alt={'losa'}/>}
                            </button>
                        </div>
                        <div className={cl.container}>
                            <Link to={'/collection'} className={cl.link}>коллекция</Link>
                            <Link to={'/about'} className={cl.link}>о бренде</Link>
                            <Link to={'/contacts'} className={cl.link}>контакты</Link>
                            <Link to={'/cart'} className={cl.link}>корзина</Link>
                        </div>
                    </div>
                </header>
            }
        </>

    );
};

export default Header;