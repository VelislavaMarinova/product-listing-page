import{Route,Routes} from "react-router-dom";
import Header from "./Header";
import useFetch from "./hooks/useFetch";
import Category from "./ProductList/Category";

function App() {
  
 
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/categories/:category" element={<Category></Category>}></Route>
    </Routes>
    <div>hello</div>
  </> 
     
  );
}

export default App;
