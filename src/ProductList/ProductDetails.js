import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import StarRating from "./StarRating";
import ProductReviews from "./ProductReviews";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../store/cart-context";
import { useAuth } from "../store/auth-context";
import Loading from "../components/Loading";
import LoadingError from "../components/LoadingError";

const ProductDetails = () => {
    const [showReview, setShowReview] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate()
    const cartCtx = useContext(CartContext);
    const { auth } = useAuth();

    const url = `http://localhost:3200/products/${id}?_embed=reviews`;

    const { data, isLoading, error } = useFetch(url);

    let userHasAddedReview = false;

    if (data.reviews && auth) {
        userHasAddedReview = data.reviews.some(r => r.userId === auth.user.id)
    }

    const onToggleReviews = () => {
        setShowReview(prev => !prev)
    };

    const onAddReview = () => {
        navigate('add-review')
    };

    const onMessage = () => {
        setShowMessage(prev => !prev)
    };

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: data.id,
            name: data.title,
            amount: amount,
            price: data.price
        })
    };

    if (isLoading) {
        return <Loading />
    }


    if (error) {
        return <LoadingError value={error.message} />
    }

    return <div>
        <p>Product {data.title}</p>
        <p>Description: {data.description}</p>
        <p>Price {data.price}</p>
        <p>discountPercentage: {data.discountPercentage}</p>
        <img src={data.thumbnail} alt={data.title} />
        <StarRating reviews={data.reviews} />
        {auth && <ProductItemForm onAddToCart={addToCartHandler} />}
        {auth && <button onClick={onToggleReviews}>{showReview ? 'Hide Review' : 'Show reviews'}</button>}
        {auth && <button onClick={userHasAddedReview ? onMessage : onAddReview} >Add Review</button>}
        {showMessage && <p>You have alredy added review!</p>}
        {showReview && <ProductReviews reviews={data.reviews} userHasAddedReview={userHasAddedReview}></ProductReviews>}
    </div>
};

export default ProductDetails;