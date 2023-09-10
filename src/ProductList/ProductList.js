import useFetch from "../hooks/useFetch"

const ProductList = ({ page, category, limit, sortOption, setCanLoadMore, selectedBrand, selectedPrice }) => {
    console.log(sortOption, "ProductList sortOption");
    let priceMin = 0
    let priceMax = 0
    let url = `http://localhost:3200/products?_embed=reviews&category=${category}`
    if (sortOption !== "choose") {
        const [sort, order] = sortOption.split(" ");
        url += `&_sort=${sort}&_order=${order}`
    }
    console.log(selectedPrice, "selectedPrice");
    if (selectedPrice !== "" && selectedPrice !== "remove filter") {
        if (selectedPrice === "more than 199") {
            priceMin = selectedPrice.split(" ")[2]
            priceMax = 1000;
        }  else {
            priceMin = selectedPrice.split("-")[0]
            priceMax = selectedPrice.split("-")[1]
        }
        url += `&price_gte=${priceMin}&price_lte=${priceMax}`
    }
    if (selectedBrand !== "" && selectedBrand!=="remove filter") {
        
        url += `&brand=${selectedBrand}`
    }
    url = url + `&_page=${page}&_limit=${limit}`
    const { data, error, isLoading } = useFetch(url, setCanLoadMore, limit);



    console.log(data);
    return (
        <ul>{data.map((p, index) => <li key={index}>
            <p>{p.id}. {p.title}</p>
        <p>Price: {p.price}</p>
        <p>discountPercentage: {p.discountPercentage}%</p>
        <p>{p.brand}</p>
        {/* <img src={p.thumbnail} alt={p.title} /> */}
            </li>)}</ul>
    )
}
export default ProductList