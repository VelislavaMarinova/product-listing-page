import useFetch from "../hooks/useFetch"

const ProductList = ({ page, category, limit,sortOption }) => {
   console.log(sortOption);
    const url = `http://localhost:3200/products?_embed=reviews&category=${category}&_page=${page}&_limit=${limit}`
    // if(sortOption!=="coose")
    const { data, totalLengthOfResult, error, isLoading } = useFetch(url);

    const numTotalPages = Math.ceil(totalLengthOfResult / limit);
    console.log(numTotalPages,"numTotalPages, ");

    console.log(data);
    return (
        <div>{data.map((p, index) => <p key={index}>{p.id}. {p.title}</p>)}</div>
    )
}
export default ProductList