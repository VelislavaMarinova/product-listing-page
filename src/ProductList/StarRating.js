import styles from "./StarRatig.module.css";
const StarRating = ({ reviews }) => {
    let goldStars = []
    let blueStars = Array(5).fill(null)
    let productRating = 0
    if (reviews.length) {

        const sumAllProducRatings =reviews.reduce((currentRating, review) => {
            return currentRating + review.rating
        }, 0)

        productRating = sumAllProducRatings /reviews.length;
        goldStars = Array(Math.round(productRating)).fill(null);
        blueStars = Array(5 - Math.round(productRating)).fill(null)
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