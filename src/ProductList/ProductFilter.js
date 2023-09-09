import useFetch from "../hooks/useFetch";

const ProductFilter=({category})=>{
    const url=`http://localhost:3200/products?category=${category}`
    
    const { data } = useFetch(url);

    const uniqueBrands = [...new Set(data.map(product => product.brand))];
    uniqueBrands.push('remove filter')

    const priceRanges=["0-49", "50-99", "100-149", "150-199", "more than 199", "remove filter"]
    

return(
    <div>
        <form>
            <div>
                <label htmlFor="">Filter by price ranges</label>
                {priceRanges.map(range=><div key={range}><input type="radio" id={range+"price"}/><label htmlFor={range+"price"}>{range} $</label></div>)}
            </div>
            <div>
                <label htmlFor="">Filter by brand name</label>
                {uniqueBrands.map(brand=><div key={brand}><input type="radio" id={brand+"brand"}/><label htmlFor={brand+"brand"}>{brand}</label></div>)}
            </div>
            <button type="submit">Filter</button>
        </form>
    </div>
)
}
export default ProductFilter;