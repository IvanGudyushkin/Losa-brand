import React from 'react';
import cl from './Order.module.css'
import {useCart} from "../../Context/cartContext";
import MicroProduct from "../../Components/MicroProduct/MicroProduct";
import arrow from "../../Assets/Icons/ArrowGreen.svg";
import BlockLove from "../../Components/Blocks/BlockLove/BlockLove";
import {useWindowSize} from "../../Hooks/useWindowSize";

const Order = () => {

    const { cart } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Форма успешно отправлена');
    }

    const [width] = useWindowSize()

    return (
        <div className={cl.block}>
            <span className={cl.title}>Оформление заказа</span>
            <p className={cl.description}>
                {width >= 560 &&
                    <>
                        {
                            '     Мы очень хотим создать изделия, подходящие именно под ваши параметры, поэтому нам потребуется ваши личные данные, чтобы LOSA могла связаться с вами для создания изделия.\n' +
                            '\n' +
                            '                     Чудо бывает требует бережного обращения, поэтому нам также понадобится уточнить у вас способы и стоимость доставки в личных сообщениях.'
                        }
                    </>
                }
                {width < 560 &&
                    <>
                        {
                            '          Мы очень хотим создать изделия, подходящие именно под ваши параметры, поэтому нам потребуется ваши личные данные, чтобы LOSA могла связаться с вами для создания изделия.\n' +
                            '\n' +
                            '          Чудо требует бережного обращения,поэтому нам также понадобится уточнить у вас способы доставки в личных сообщениях.'
                        }
                    </>
                }
            </p>
            <div className={cl.order}>
                <div className={cl.col1}>
                    <span className={cl.title}>Ваш заказ:</span>
                    {cart.items.map((item) => (
                        <MicroProduct product={item} key={item.id}/>
                    ))}
                </div>
                <form className={cl.form} onSubmit={handleSubmit}>
                    <div className={cl.row1}>
                        <p className={cl.text}>Укажите, пожалуйста, следующую информацию:   </p>
                        <div className={cl.inputContainer}>
                            <input type="text" id="name" name="name" required placeholder={'Имя'}/>
                            <input type="text" id="telegram" name="telegram" required placeholder={'Ник в Telegram'}/>
                            <input type="tel" id="phone" name="phone" required placeholder={'Номер телефона'}/>
                            <input type="email" id="email" name="email" required placeholder={'Адрес электронной почты'}/>
                        </div>
                    </div>
                    <div className={cl.row2}>
                        <div className={cl.costContainer}>
                            <span className={cl.text}>Стоимость*</span>
                            <span className={cl.text}>{cart.totalCost} р.</span>
                        </div>
                        <p className={cl.agree}>{'*Без учёта доставки. Детали отправки LOSA обсудит с вами в указанном месенджере после оформления заказа на сайте.'}</p>
                        <button type={"submit"} className={cl.button}>
                            перейти к оплате <img src={arrow} alt={'arrow'}/>
                        </button>
                        <p className={cl.agree1}>
                            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
                        </p>
                    </div>
                </form>
            </div>
            {width >= 560 && <BlockLove/> }
        </div>
    );
};

export default Order;