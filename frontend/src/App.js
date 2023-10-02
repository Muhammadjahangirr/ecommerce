import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Header from "./components/layout/Header/Header.js";
import Footer from "./components/layout/Footer/Footer";

import Home from "./components/Home/Home.js";
import ProductDetails from "./components/product/ProductDetails.js";

import "./App.css";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
