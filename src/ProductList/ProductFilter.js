import useFetch from "../hooks/useFetch";

const ProductFilter = ({ category,selectedBrand,setSelectedBrand,selectedPrice,setSelectedPrice }) => {

    const url = `http://localhost:3200/products?category=${category}`;

    const { data } = useFetch(url);

    const uniqueBrands = [...new Set(data.map(product => product.brand))];

    uniqueBrands.push('remove filter')

    const priceRanges = ["0-49", "50-99", "100-149", "150-199", "more than 199", "remove filter"]

    const onFilterByPriceChange = (e) => {
        setSelectedPrice(e.target.value)
    }
    const onFilterByBrandChange =(e)=>{
        setSelectedBrand(e.target.value)
    }

    return (
        <div>
                <div>
                    <label htmlFor="">Filter by price ranges</label>
                    {priceRanges.map(range => <div key={range}><input
                        type="radio"
                        id={range + "price"}
                        value={range}
                        name="price"
                        checked={selectedPrice === range}
                        onChange={onFilterByPriceChange}
                    /><label htmlFor={range + "price"}>{range} $</label></div>)}
                </div>
                <div>
                    <label htmlFor="">Filter by brand name</label>
                    {uniqueBrands.map(brand => <div key={brand}><input
                        type="radio"
                        id={brand + "brand"}
                        value={brand} name="brand"
                        checked={selectedBrand===brand}
                        onChange={onFilterByBrandChange}
                    /><label htmlFor={brand + "brand"}>{brand}</label></div>)}
                </div>
        </div>
    )
};

export default ProductFilter;