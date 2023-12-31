import ProductList from "./ProductList";

const ProductLists = ({ category, page, limit, sortOption, getTotalPages,setCanLoadMore, selectedBrand,selectedPrice }) => {
  const pageArray = Array.from({ length: page }, (_, index) => index + 1);
  console.log(page,"ProductLists page");
  console.log(pageArray,"ProductLists pageArray");

  const listWirthProducts = pageArray.map((page, index) => <li key={index}><ProductList
    category={category}
    page={page}
    limit={limit}
    getTotalPages={getTotalPages}
    setCanLoadMore={setCanLoadMore}
    selectedBrand={selectedBrand}
    selectedPrice = {selectedPrice}
    // passTotalPages={passTotalPages}
    sortOption={sortOption}></ProductList></li>)

  return (<ul>{listWirthProducts}</ul>)

};

export default ProductLists;