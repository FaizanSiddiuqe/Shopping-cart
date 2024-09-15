import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Cart, ProductDetails } from "./pages/index";
import Layout from "./Layout";
function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
         <Route path=""  element={<Home/>}/>
         <Route path="cart" element={<Cart/>}/>
         <Route path="product/:id" element={<ProductDetails/>}/>
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
