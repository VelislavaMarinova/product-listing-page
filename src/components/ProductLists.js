import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductList from "./ProductList";

const ProductLists = ({category, page, limit}) => {
  const pageArray=  Array.from({ length: page }, (_, index) => index + 1);
  console.log(page);
  console.log(pageArray);

  return (<div>{pageArray.map((page,index)=><ProductList category={category} page={page} limit={limit} key={index}></ProductList>)}</div>)

}
export default ProductLists;