const ProductReviews=({reviews})=>{
    if(reviews && reviews.length){
        return <ul>{reviews.map(r=><li key={r.id}>{r.review} {r.rating}</li>)}</ul>
    }
    if(!reviews){
        return <div>No reviews added</div>
    }

}
export default ProductReviews;