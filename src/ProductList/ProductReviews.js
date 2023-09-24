const ProductReviews=({reviews, userHasAddedReview})=>{
    if(reviews && reviews.length){
        return <ul>{reviews.map(r=><li key={r.id}><span>{r.username} rated: {r.rating} <p>{r.review}</p></span></li>)}</ul>
    }
   
        return <div>No reviews added!</div>


}
export default ProductReviews;