import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./home/Home";
import Category from "./ProductList/Category";
import Main from "./main/Main";
import RouteError from "./components/RouteError";

function App() {

  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/categories/:category" element={<Category></Category>}></Route>
          <Route path="*" element={<RouteError></RouteError>}></Route>
        </Routes>
      </Main>

    </>

  );
}

export default App;
