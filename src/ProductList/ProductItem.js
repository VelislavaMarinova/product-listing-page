import { useContext } from "react";

import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import styles from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../store/cart-context";
import { useAuth } from "../store/auth-context";
const ProductItem = ({ product }) => {

    const cartCtx = useContext(CartContext);
    const {auth}=useAuth()

    const addToCartHandler = (amount) => {
        cartCtx.addItem({ 
            id: product.id,
            name: product.title,
            amount: amount,
            price: product.price
         })
    }

    return (<div className={styles.product}> <Link to={`/categories/${product.category}/${product.id}`} >
        <p>{product.id}. {product.title}</p>
        <p>Price: {product.price}</p>
        <p>discountPercentage: {product.discountPercentage}%</p>
        <p>{product.brand}</p>
        <StarRating reviews={product.reviews} />
        {/* <img src={p.thumbnail} alt={p.title} /> */}

    </Link>
        {auth &&  <ProductItemForm onAddToCart={addToCartHandler}></ProductItemForm>}
     
        {/* <p className="product-login"><Link to="/auth/login">Login</Link> to enable the button!</p> */}
    </div>
    )


}
export default ProductItem;