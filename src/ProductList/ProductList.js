import useFetch from "../hooks/useFetch"

const ProductList = ({ page, category, limit, sortOption, setCanLoadMore }) => {
    console.log(sortOption, "ProductList sortOption");
    let url = `http://localhost:3200/products?_embed=reviews&category=${category}`
    if (sortOption !== "choose") {
        const [sort, order] = sortOption.split(" ");
        url += `&_sort=${sort}&_order=${order}`
    }
    url = url + `&_page=${page}&_limit=${limit}`
    const { data, error, isLoading } = useFetch(url, setCanLoadMore, limit);
   


    console.log(data);
    return (
        <ul>{data.map((p, index) => <li key={index}>{p.id}. {p.title}</li>)}</ul>
    )
}
export default ProductList