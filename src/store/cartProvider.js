import { useReducer } from 'react';
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (choosenItem) => {
        dispatchCartAction({ type: 'ADD', item: choosenItem });
    };
    const removeItemFromCartHandler = (idOfChoosenItem) => {
        dispatchCartAction({ type: 'REMOVE', id: idOfChoosenItem })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler

    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>

}
export default CartProvider;