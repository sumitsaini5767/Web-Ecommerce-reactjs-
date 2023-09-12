import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Category from "./pages/category/Category";
import Checkout from "./pages/checkout/Checkout";
import Compare from "./pages/compare/Compare";
import Contact from "./pages/contact/Contact";
import CustomerService from "./pages/customer-service/CustomerService";
import Gallery from "./pages/gallery/Gallery";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Shop from "./pages/shop/Shop";


function App() {
  return (
   <>
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="blog" element={<Blog/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      <Route path="category" element={<Category/>}></Route>
      <Route path="checkout" element={<Checkout/>}></Route>
      <Route path="compare" element={<Compare/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="customer-service" element={<CustomerService/>}></Route>
      <Route path="gallery" element={<Gallery/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="products" element={<Products/>}></Route>
      <Route path="shop" element={<Shop/>}></Route>


    </Routes>
    <Footer/>
    </Router>

   </>
  );
}

export default App;
