import React from 'react';
import cl from './ProductItem.module.css'
import Counter from "../UI/Counter/Counter";
import garbage from '../../Assets/Icons/Garbage.svg'
import {useCart} from "../../Context/cartContext";
import {useWindowSize} from "../../Hooks/useWindowSize";
const ProductItem = ({product}) => {

    const {dispatch} = useCart();

    // Функция для удаления товара из корзины
    const removeItemFromCart = () => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: {id: product.id, cost: product.cost, quantity: product.quantity}
        });
    };
    const increment = () => {
        dispatch({
            type: 'INCREMENT',
            payload: {id: product.id, cost: product.cost}
        });
    };

    const decrement = () => {
        dispatch({
            type: 'DECREMENT',
            payload: {id: product.id, cost: product.cost}
        });
    };

    const [width] = useWindowSize()

    return (
        <div className={cl.item}>
            {width >= 560 &&
                <>
                    <img className={cl.image} src={product.images[0]} alt={product.fullName}/>
                    <button className={cl.garbage} onClick={removeItemFromCart}>
                        <img src={garbage} alt={'Удалить'}/>
                    </button>
                    <div className={cl.info}>
                        <h5 className={cl.name}>{product.currentName}</h5>
                        <p className={cl.description}>{product.itemDescriprion}</p>
                        <div className={cl.lastrow}>
                            <Counter count={product.quantity} increment={increment} decrement={decrement}/>
                            <span className={cl.cost}>{product.cost} р.</span>
                        </div>
                    </div>
                </>
            }
            {
                width < 560 &&
                <>
                    <img className={cl.image} src={product.images[0]} alt={product.fullName}/>
                    <div className={cl.info}>
                        <div className={cl.rowMobile}>
                            <h5 className={cl.name}>{product.currentName}</h5>
                            <span className={cl.cost}>{product.cost} р.</span>
                        </div>
                        <div className={cl.rowMobile}>
                            <Counter count={product.quantity} increment={increment} decrement={decrement}/>
                            <button className={cl.garbage} onClick={removeItemFromCart}>
                                <img src={garbage} alt={'Удалить'}/>
                            </button>
                        </div>
                        <p className={cl.description}>{product.itemDescriprion}</p>
                    </div>
                </>
            }
        </div>
    )
        ;
};

export default ProductItem;