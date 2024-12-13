import React from 'react';
import cl from './Cart.module.css'
import arrow from '../../Assets/Icons/ArrowGreen.svg'
import ProductItem from "../../Components/ProductItem/ProductItem";
import {useCart} from "../../Context/cartContext";
import {useNavigate} from "react-router-dom";
import {useWindowSize} from "../../Hooks/useWindowSize";
const Cart = () => {

    const navigate = useNavigate()

    const { cart } = useCart();

    const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);

    const [width] = useWindowSize()

    return (
        <div className={cl.block}>
            <span className={cl.order}>Корзина ({totalItems})</span>
            {totalItems !== 0 ?
                <>
                    <p className={cl.description}>
                        { width >=560 && <>
                        {'     После нажатия на кнопку «Оформить заказ» от вас потребуется ввод личных данных, чтобы LOSA могла связаться с вами для создания изделия по вашим индивидуальным меркам. \n' +
                            '\n' +
                            '                      Чудо бывает требует бережного обращения,поэтому нам также понадобится уточнить у вас способы доставки в личных сообщениях.'}
                        </>
                        }
                        { width < 560 &&
                            <>
                                {'          После нажатия на кнопку «Оформить заказ» от вас потребуется ввод личных данных, чтобы LOSA могла связаться с вами для создания изделия по вашим индивидуальным меркам.\n' +
                                    '\n' +
                                    '          Чудо требует бережного обращения, поэтому нам также понадобится уточнить у вас способы доставки в личных сообщениях.'
                                }
                            </>
                        }
                        </p>
                    <div className={cl.row}>
                        <div className={cl.col}>
                            <span className={cl.cost}>Стоимость</span>
                            <span className={cl.cost}>{cart.totalCost} р.</span>
                        </div>
                        <button onClick={() => navigate('/order')} className={cl.button}>
                            оформить заказ <img src={arrow} alt={'arrow'}/>
                        </button>
                    </div>
                    <div className={cl.container}>
                        {cart.items.map((item) => (
                            <ProductItem product={item} key={item.id}/>
                        ))}
                    </div>
                    <div className={cl.row2}>
                        <div className={cl.col}>
                            <span className={cl.cost}>стоимость заказа</span>
                            <span className={cl.cost}>{cart.totalCost} р.</span>
                        </div>
                        <button onClick={() => navigate('/order')} className={cl.button}>
                            оформить заказ <img src={arrow} alt={'arrow'}/>
                        </button>
                    </div>
                </>
                :
                <>
                    <div className={cl.ifNo}>
                        <span className={cl.cost}>
                            В заказе пока пусто.
                        </span>
                        <button onClick={()=> navigate('/collection')} className={cl.button2}>
                            отправиться за чудесами
                            <img src={arrow} alt={'arrow'}/>
                        </button>
                    </div>
                </>
            }
        </div>
    );
};

export default Cart;