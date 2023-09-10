import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import LoadingError from "../components/LoadingError";
import ProductItem from "./ProductItem";

const ProductList = ({ page, category, limit, sortOption, setCanLoadMore, selectedBrand, selectedPrice }) => {
    console.log(sortOption, "ProductList sortOption");
    let priceMin = 0;
    let priceMax = 0;
    let url = `http://localhost:3200/products?_embed=reviews&category=${category}`
    if (sortOption !== "choose") {
        const [sort, order] = sortOption.split(" ");
        url += `&_sort=${sort}&_order=${order}`
    }
    console.log(selectedPrice, "selectedPrice");
    if (selectedPrice !== "" && selectedPrice !== "remove filter") {
        if (selectedPrice === "more than 199") {
            priceMin = selectedPrice.split(" ")[2];
            priceMax = 1000;
        } else {
            priceMin = selectedPrice.split("-")[0];
            priceMax = selectedPrice.split("-")[1];
        }
        url += `&price_gte=${priceMin}&price_lte=${priceMax}`;
    }
    if (selectedBrand !== "" && selectedBrand !== "remove filter") {

        url += `&brand=${selectedBrand}`;
    }
    url = url + `&_page=${page}&_limit=${limit}`;
    const { data, error, isLoading } = useFetch(url, setCanLoadMore, limit);

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <LoadingError value={error.message} />
    }

    console.log(data);

    return (
        <ul>{data.map((product) => <li key={product.id}>
          <ProductItem product={product}></ProductItem>
        </li>)}
        </ul>
    );
};
export default ProductList;