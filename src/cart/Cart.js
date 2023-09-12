import Modal from "../ui/Modal"
import classes from './Cart.module.css';
const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{ id: 'c1', name: "sushi", price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>
    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.26</span>
        </div>
        <div classes={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}> Close</button>
            <button className={classes.button}>Oreder</button>
        </div>
    </Modal>
}
export default Cart
