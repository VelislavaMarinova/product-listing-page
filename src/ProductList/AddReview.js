
const AddReview=({product})=>{
return(
    <section>
    <h3>Add review about {product.title}:</h3>
    <form>
        <div>
            <label htmlFor="rating">Rate:</label>
            <select
                id="rating"
            >
                <option
                    value={"choose"}
                    disabled
                >Choose rating</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐ </option>
            </select>
            
        </div>
        <div >

            <label htmlFor="review">Add review:</label>
            <textarea
                name=""
                id="review"
                cols="30"
                rows="10"
            ></textarea>
        </div>
        <button type="submit">Add review</button>
    </form>
</section>
)
}
export default AddReview