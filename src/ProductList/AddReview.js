
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import useFetch from "../hooks/useFetch";
import { useAuth } from "../store/auth-context";
import Loading from "../components/Loading";
import LoadingError from "../components/LoadingError";

const AddReview = () => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { category, id } = useParams();
    const navigate = useNavigate();
    const { auth } = useAuth();
    console.log(id, "productId");
    console.log(category, "productId");

    const url = `http://localhost:3200/products/${id}?_embed=reviews`;
    const { data } = useFetch(url);

    const {
        valueChangeHandler: onSelectStars,
        value: stars,
        isValid: starRatnigIsValid,
        setEnteredValue

    } = useForm(value => value !== '')

    const {
        valueChangeHandler: onWriteReview,
        value: review,
        isValid: reviewIsValid,
        reset: resetReview
    } = useForm(value => value.trim().length !== 0)

    let formIsValid = false
    if (
        starRatnigIsValid &&
        reviewIsValid
    ) {
        formIsValid = true;
    }

    const onAddReview = (e) => {
        e.preventDefault()
        if (!formIsValid) {
            return setError("Please rate and add reveiw!")
        }


        const body = {
            rating: stars,
            review: review,
            productId: data.id,
            userId: auth.user.id,
            username: auth.user.username
        }

        setError('');
        setIsLoading(true)
        fetch('http://localhost:3200/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + auth.accessToken
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            // .then((response) => {
            //     console.log(response);
            // })
            .catch((err) => {
                setError(err.message || "An error occurred.");
            })
        // navigate('/')

        setIsLoading(false)

        console.log(stars);
        console.log(review);
        setEnteredValue('choose');
        resetReview();
        navigate(`/categories/${data.category}/${data.id}`)
    }

    if (isLoading) {
        return <Loading />
    }
    if(error){
        return <LoadingError/>
    }

    return (
        <section>
            <h3>Add review about {data.title}:</h3>
            <form onSubmit={onAddReview}>
                <div>
                    <label htmlFor="rating">Rate:</label>
                    <select
                        id="rating"
                        onChange={onSelectStars}
                        defaultValue={"choose"}
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
                        name="review"
                        id="review"
                        cols="30"
                        rows="10"
                        onChange={onWriteReview}
                    ></textarea>
                </div>
                {error && <p className="error-text">{error}</p>}
                <button type="submit">Add review</button>
            </form>
        </section>
    )
};

export default AddReview;