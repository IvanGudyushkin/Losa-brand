import React from 'react';
import cl from './Counter.module.css'
import minus from '../../../Assets/Icons/minus.svg'
import plus from '../../../Assets/Icons/plus.svg'
const Counter = ({count, increment, decrement}) => {
    return (
        <div className={cl.counter}>
            <button onClick={decrement} className={cl.button}>
                <img src={minus} alt={'minus'}/>
            </button>
            <span className={cl.count}>
                {count}
            </span>
            <button onClick={increment} className={cl.button}>
                <img src={plus} alt={'plus'}/>
            </button>
        </div>
    );
};

export default Counter;