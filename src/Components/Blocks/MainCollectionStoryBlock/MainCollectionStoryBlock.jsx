import React from 'react';
import cl from './MainCollectionStoryBlock.module.css'
import {ProductData} from "../../../Info/info";
import arrow from '../../../Assets/Icons/ArrowGreen.svg'
import cartIcon from  '../../../Assets/Icons/cart.svg'
import InCartIcon from  '../../../Assets/Icons/Incart.svg'
import {useCart} from "../../../Context/cartContext";
import {useNavigate} from "react-router-dom";
const MainCollectionStoryBlock = ({isCollection= false}) => {

    const navigate = useNavigate()

    const { cart, dispatch } = useCart();

    const addItemToCart = item => {
        if (!isItemInCart(item)) {
            dispatch({ type: 'ADD_ITEM', payload: item });
        }
    };

    const isItemInCart = item => {
        return cart.items.some(cartItem => cartItem.id === item.id);
    };

    return (
        <div className={cl.block}>

            {isCollection
                ? <div className={cl.hidden}/>
                :
                <h2 className={cl.title}>
                    {'Коллекция волшебной \n' +
                        '                   бижутерии «Сказка»'}
                </h2>
            }
            {
                Object.entries(ProductData).map(([key, item]) => (
                    <div key={key} className={cl.row}>
                        <img className={cl.image} src={item.previewImg} alt={item.name}/>
                        {
                            isCollection
                                ?
                                <div className={cl.collectionis}>
                                    <div className={cl.content}>
                                        <span className={cl.name}>{item.name}</span>
                                        <button className={cl.button} onClick={()=>{navigate(`/collection/${item.id}`)}}>
                                            {item.buttonText} <img src={arrow} alt={'arrow'}/>
                                        </button>
                                    </div>

                                        {isItemInCart(item) ?
                                            <button className={cl.inCart2}>
                                                добавлено в заказ
                                                <img className={cl.icon} src={InCartIcon} alt={'in cart'}/>
                                            </button>
                                            :
                                            <button className={cl.inCart} onClick={() => addItemToCart(item)}>
                                                добавить в корзину
                                                <img className={cl.icon} src={cartIcon} alt={'in cart'}/>
                                            </button>
                                        }
                                </div>
                                :
                                <div className={cl.content}>
                                    <span className={cl.name}>{item.name}</span>
                                    <button className={cl.button} onClick={()=>{navigate(`/collection/${item.id}`)}}>
                                        {item.buttonText} <img src={arrow} alt={'arrow'}/>
                                    </button>
                                </div>
                        }
                    </div>
                    )
                )
            }
        </div>
    )
        ;
};

export default MainCollectionStoryBlock;