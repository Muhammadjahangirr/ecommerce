import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData.js";
import { getAllProducts } from "../../actions/productAction.js";
import { useSelector, useDispatch } from "react-redux";
import PageLoader from "../layout/PageLoader/PageLoader.js";
import { useAlert } from "react-alert";
import { clearErrors } from "../../actions/productAction.js";

import "./Home.css";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllProducts());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <PageLoader />
      ) : (
        <Fragment>
          <MetaData title="E-Commerce" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>Find Amazing Products Below</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
