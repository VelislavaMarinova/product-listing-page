import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductLists from "./ProductLists";
import ProductSort from "./ProductSort";
import ProductFilter from "./ProductFilter";
import useFetch from "../hooks/useFetch";

const Category = () => {
    const { category } = useParams()
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [canLoadMore, setCanLoadMore] = useState(false);
    const [sortOption, setSortOption] = useState('choose');

    useEffect(() => {
        setPage(1)
    }, [category])


    const onLoadMore = () => {
        setPage(page => page + 1)
    }

    return (<>
        <div>{category}</div>
        <select
            className="product-list-select-products-per-page"
            value={limit} onChange={e => setLimit(e.target.value)}
        >
            <option value="12">12 per page</option>
            <option value="24">24 per page</option>
        </select>
        <ProductSort setSortOption={setSortOption} sortOption={sortOption}></ProductSort>
        <ProductFilter category={category}></ProductFilter>
        <ProductLists
            category={category}
            page={page}
            limit={limit}
            sortOption={sortOption}
            setCanLoadMore={setCanLoadMore}
        // key={category}???

        ></ProductLists>
        <button onClick={onLoadMore} disabled={!canLoadMore}>Load More</button>
    </>
    )
}
export default Category