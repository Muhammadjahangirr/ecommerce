import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import PageLoader from "../layout/PageLoader/PageLoader";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import { useAlert } from "react-alert";
import { clearErrors } from "../../actions/productAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllProductsDetails(params.id));
  }, [dispatch, params.id, error, alert]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product?.ratings,
    isHalf: true,
  };
  return (
    <Fragment>
      {loading ? (
        <PageLoader />
      ) : (
        <Fragment>
          <div className="productDetails">
            <div>
              <Carousel className="carousal">
                {product?.image[0] &&
                  product?.image?.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product?.name} </h2>
                <p>Product # {product?._id} </p>
              </div>

              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({product?.noOfReviews} Reviews)</span>
              </div>

              <div className="detailsBlock-3">
                <h1>{`Rs.${product?.price}`} </h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input type="number" value="1" />
                    <button>+</button>
                  </div>
                  <button>Add to Cart</button>
                </div>
              </div>

              <p>
                Status:{" "}
                <b className={product?.Stock < 1 ? "redColor" : "greenColor"}>
                  {product?.Stock < 1 ? "Out Of Stock" : "In Stock"}{" "}
                </b>{" "}
              </p>
              <div className="detailsBlock-4">
                Description : <p>{product?.description} </p>
              </div>

              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeadng">REVIEWS</h3>
          {product?.reviews && product?.reviews[0] ? (
            <div className="reviews">
              {product?.reviews &&
                product?.reviews.map((review) => (
                  <ReviewCard review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
