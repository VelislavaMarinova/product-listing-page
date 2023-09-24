import styles from "./StarRatig.module.css";
const StarRating = ({ reviews }) => {
    let goldStars = []
    let blueStars = Array(5).fill(null)
    let productRating = 0
    if (reviews && reviews.length!==0) {

        const sumAllProducRatings =reviews.reduce((currentRating, review) => {
            return currentRating + Number(review.rating)
        }, 0)
        console.log(sumAllProducRatings,'reviews');

        productRating = (sumAllProducRatings /reviews.length).toFixed(2);
        goldStars = Array(Math.round(productRating)).fill(null);
        blueStars = Array(5 - goldStars.length).fill(null)
    }

    return (
        <div>
            {goldStars.map((_,index) => <i key={index} className={`${styles.gold} fa-solid fa-star`}></i>)}
            {blueStars.map((_,index) => <i key={index} className={`${styles.black} fa-solid fa-star`}></i>)}
            <p>Rating: {productRating}</p>
        </div>
    )
}
export default StarRating;