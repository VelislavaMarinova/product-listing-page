const ProductSort=({setSortOption,sortOption})=>{

    return(
        <div className="sort">
        <div className="sort-wrapper">
            <label className="label">Sort</label>
            <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
            <option value="choose" disabled>Choose option</option>
                <option value="title asc">Product name asc</option>
                <option value="title desc">Product name desc</option>
                <option value="price asc">Price asc</option>
                <option value="price desc">Price desc</option>
            </select>
        </div>
    </div>
    )
    }
    
    export default ProductSort