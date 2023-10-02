import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllProducts } from "../../actions/productAction";
import PageLoader from "../layout/PageLoader/PageLoader";
import ProductCard from "../Home/ProductCard";
import { Link, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import pagination from "react-js-pagination";
import "./Products.css";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);
  const keyword = params.keyword;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllProducts(keyword, currentPage));
  }, [dispatch, error, alert, params, keyword, currentPage]);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  return (
    <Fragment>
      {loading ? (
        <PageLoader />
      ) : (
        <Fragment>
          <Link className="searchButton" to={`/search`}>
            Search
          </Link>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox"></div>

          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
