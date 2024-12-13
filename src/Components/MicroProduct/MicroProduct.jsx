import React from 'react';
import cl from './MicroProduct.module.css'
import {useWindowSize} from "../../Hooks/useWindowSize";
const MicroProduct = ({product}) => {
    const [width] = useWindowSize()
    return (
        <div className={cl.item}>
            <div className={cl.img}>
                <img src={product.images[0]} alt={product.fullName}/>
            </div>
            <div className={cl.info}>
                {width >= 560 &&
                    <>
                        <h5 className={cl.name}>{product.fullName}</h5>
                        <span className={cl.count}>х{product.quantity}</span>
                        <span className={cl.cost}>{product.cost * product.quantity} р.</span>
                    </>
                }
                {width < 560 &&
                    <>
                        <div className={cl.rowMobile}>
                            <h5 className={cl.name}>{product.currentName}</h5>
                            <span className={cl.cost}>{product.cost * product.quantity} р.</span>
                        </div>
                        <span className={cl.count}>х{product.quantity}</span>
                    </>
                }
            </div>
        </div>
    );
};

export default MicroProduct;