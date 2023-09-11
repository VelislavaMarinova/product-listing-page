import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import styles from "./ProductItem.module.css";
const ProductItem = ({ product }) => {

    return (<div className={styles.product}> <Link to={`/categories/${product.category}/${product.id}`} >
        <p>{product.id}. {product.title}</p>
        <p>Price: {product.price}</p>
        <p>discountPercentage: {product.discountPercentage}%</p>
        <p>{product.brand}</p>
        <StarRating reviews={product.reviews} />
        {/* <img src={p.thumbnail} alt={p.title} /> */}

    </Link>
        <button>Add to cart</button>
      {/* <p className="product-login"><Link to="/auth/login">Login</Link> to enable the button!</p> */}
    </div>
    )


}
export default ProductItem;