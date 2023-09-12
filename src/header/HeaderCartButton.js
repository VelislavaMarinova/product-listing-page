import { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>numberOfCartItems</span>
        </button>
    )
}

export default HeaderCartButton;