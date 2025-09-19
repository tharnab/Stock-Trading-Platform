import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./landing_page/home/HomePage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import AboutPage from "./landing_page/about/AboutPage"
import Login from './Login'

import Navbar from "./landing_page/Navbar"
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound"
import ToBeBuild from "./landing_page/ToBeBuild";
import ScrollToTop from "./landing_page/ScrollToTop";
import SignUpPage from "./landing_page/signup/SignUpPage";




function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUpPage/>}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/tobebuild" element={<ToBeBuild />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

    <Footer />
    </>
    
  );
}

export default App;
