import { Link } from "react-router-dom";
import StarRating from "./StarRating";
const ProductItem = ({ product }) => {
   
    return (<>
        <p>{product.id}. {product.title}</p>
        <p>Price: {product.price}</p>
        <p>discountPercentage: {product.discountPercentage}%</p>
        <p>{product.brand}</p>
       <StarRating reviews={product.reviews}/>
        {/* <img src={p.thumbnail} alt={p.title} /> */}
        <button>Add to cart</button>
        <p className="product-login"><Link to="/auth/login">Login</Link> to enable the button!</p>
    </>)
}
export default ProductItem;