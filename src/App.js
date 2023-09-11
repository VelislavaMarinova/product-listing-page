import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./home/Home";
import Category from "./productList/Category";
import Main from "./main/Main";
import RouteError from "./components/RouteError";
import Footer from "./footer/Footer";
import ProductDetails from "./productList/ProductDetails";

function App() {

  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories/:category" element={<Category/>}></Route>
          <Route path="/categories/:category/:id" element={<ProductDetails />}></Route>
          <Route path="*" element={<RouteError />}></Route>
        </Routes>
      </Main>
      <Footer/>

    </>

  );
}

export default App;
