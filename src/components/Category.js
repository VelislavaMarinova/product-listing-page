import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductLists from "./ProductLists";
const Category = () => {
    const { category } = useParams()
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    
    useEffect(() => {
        setPage(1)
    }, [category])


    console.log("render");

    const onLoadMore = () => {
        setPage(page + 1)

    }

    return (<>
        <div>{category}</div>
        <ProductLists category={category} page={page} limit={limit}></ProductLists>
        <button onClick={onLoadMore}>Load More</button>
    </>
    )
}
export default Category