import useFetch from "../hooks/useFetch"

const ProductList = ({ page, category, limit }) => {
    const url = `http://localhost:3200/products?_embed=reviews&category=${category}&_page=${page}&_limit=${limit}`
    const { data } = useFetch(url)
    console.log(data);
    return (
        <div>{data.map((p,index)=><p key={index}>{p.id}. {p.title}</p>)}</div>
    )
}
export default ProductList