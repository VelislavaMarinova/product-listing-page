import { useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import StarRating from "./StarRating";
import ProductReviews from "./ProductReviews";
import AddReview from "./AddReview";

const ProductDetails = () => {
    const { id } = useParams();
    const [showReview, setShowReview] = useState(false);
    const [showAddReview, setShowAddReview] = useState(false);
    console.log(id);
    const url = `http://localhost:3200/products/${id}?_embed=reviews`
    const { data, isLoading, error } = useFetch(url);
    console.log(data);

    const onToggleReviews = () => {
        setShowReview(prev => !prev)
    }
    const onAddReview = () => {
        setShowAddReview(prev => !prev)
    }
    console.log(showReview);
    return <div>
        <p>Product {data.title}</p>
        <p>Description: {data.description}</p>
        <p>Price {data.price}</p>
        <p>discountPercentage: {data.discountPercentage}</p>
        <img src={data.thumbnail} alt={data.title} />
        <StarRating reviews={data.reviews} />
        <button onClick={onToggleReviews}>{showReview ? 'Hide Review' : 'Show reviews'}</button>
        <button onClick={onAddReview}>Add review</button>
        {showReview && <ProductReviews reviews={data.reviews}></ProductReviews>}
        {showAddReview && <AddReview product={data}></AddReview>}
    </div>
}
export default ProductDetails;