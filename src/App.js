import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./header/Header";
import Home from "./home/Home";
import Category from "./productList/Category";
import Main from "./main/Main";
import RouteError from "./components/RouteError";
import Footer from "./footer/Footer";
import ProductDetails from "./productList/ProductDetails";
import Cart from "./cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const hideCartHandler = () => {
    setShowCart(false)
  }
  const showCartHandler = () => {
    setShowCart(true)
  }
  return (
    <>
      {showCart && <Cart onHideCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler} />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories/:category" element={<Category />}></Route>
          <Route path="/categories/:category/:id" element={<ProductDetails />}></Route>
          <Route path="*" element={<RouteError />}></Route>
        </Routes>
      </Main>
      <Footer />

    </>

  );
}

export default App;
