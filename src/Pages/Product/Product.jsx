import React from 'react';
import cl from './Product.module.css'
import useGetParams from "../../Hooks/useGetParams";
import {ProductData} from "../../Info/info";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import cartIcon from "../../Assets/Icons/cart.svg";
import Counter from "../../Components/UI/Counter/Counter";
import {useCart} from "../../Context/cartContext";
import InCartIcon from "../../Assets/Icons/Incart.svg";
import {useWindowSize} from "../../Hooks/useWindowSize";
const Product = () => {

    const [width] = useWindowSize()

    const product = useGetParams(Object.entries(ProductData));
    const { cart, dispatch } = useCart();

    const addItemToCart = item => {
        dispatch({ type: 'ADD_ITEM', payload: {...item, quantity: 1} });
    };

    const increment = () => {
        if (isItemInCart(product)) dispatch({ type: 'INCREMENT', payload: {id: product.id, cost: product.cost} });
    };

    const decrement = () => {
        if (isItemInCart(product)) dispatch({ type: 'DECREMENT', payload: {id: product.id, cost: product.cost} });
    };

    const getItemQuantity = () => {
        const item = cart.items.find(item => item.id === product.id);
        return item ? item.quantity : 0;
    };

    const itemQuantity = getItemQuantity(); // Получаем текущее количество товара в корзине

    const isItemInCart = item => {
        return cart.items.some(cartItem => cartItem.id === item.id);
    };

    const breadcrumbs = [
        { title: 'Главная', path: '/' },
        { title: 'Коллекция', path: '/collection' },
        { title: `${product.fullName}`, path: `/collection/${product.id}` }
    ];

    return (
        <div className={cl.block}>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <div className={cl.content}>
                <div className={cl.col1}>
                    {product.images.map((image, key) => (
                            <img className={cl.img} src={image} key={key} alt={product.currentName}/>
                        )
                    )}
                </div>
                <div className={cl.col2}>
                    { width >= 560 &&
                        <>
                        <p className={cl.info}>{product.currentName}</p>
                        <p className={cl.info}>
                            {'• создаётся под вас и для вас\n' +
                                '• чудо из алюминия и имитации жемчуга'}
                        </p>
                        <p className={cl.info}>{ product.cost +' р.'}</p>
                        <div className={cl.row}>
                            {isItemInCart(product) ?
                                <button className={cl.inCart2}>
                                    добавлено в заказ
                                    <img className={cl.icon} src={InCartIcon} alt={'in cart'}/>
                                </button>
                                :
                                <button className={cl.inCart} onClick={() => addItemToCart(product)}>
                                    добавить в заказ
                                    <img className={cl.icon} src={cartIcon} alt={'in cart'}/>
                                </button>
                            }
                            <Counter count={itemQuantity} decrement={decrement} increment={increment}/>
                        </div>
                        </>
                    }
                    {
                        width < 560 &&
                        <>
                            <img className={cl.mobile} alt={product.currentName} src={product.previewImg}/>
                            <div className={cl.rowMobile}>
                                <p className={cl.info}>{product.currentName}</p>
                                <p className={cl.info}>{product.cost + ' р.'}</p>
                            </div>
                            <div className={cl.rowMobile}>
                                <Counter count={itemQuantity} decrement={decrement} increment={increment}/>
                                {isItemInCart(product) ?
                                    <button className={cl.inCart2}>
                                        <img className={cl.icon} src={InCartIcon} alt={'in cart'}/>
                                    </button>
                                    :
                                    <button className={cl.inCart} onClick={() => addItemToCart(product)}>
                                        <img className={cl.icon} src={cartIcon} alt={'in cart'}/>
                                    </button>
                                }
                            </div>
                            <p className={cl.info}>
                                {[
                                    '• создаётся под вас и для вас',
                                    '• чудо из алюминия и имитации жемчуга'
                                ].join('\n')}
                            </p>

                        </>
                    }
                </div>
            </div>
            <div className={cl.blockInfo}>
            <p className={cl.infoCol1}>{
                    'Как получить кусочек \n' +
                    '                    волшебства?'
                }
                </p>
                <p className={cl.infoCol2}>
                    {
                        '1. Добавить изделие на сайте в корзину и нажать на странце корзины «Оформление заказа»\n' +
                        '\n' +
                        '2. Произвести оплату заказа на сайте\n' +
                        '                          \n' +
                        '3. Получить сообщение от бренда в мессенджер, чтобы обсудить индивидуальные мерки и способ доставки\n' +
                        '\n' +
                        '4. Подождать 2–3 недели для изготовления\n' +
                        '\n' +
                        '5. Принять изделие в пункте выдачи, оплата при получении'}
                </p>
            </div>
        </div>
    );
};

export default Product;