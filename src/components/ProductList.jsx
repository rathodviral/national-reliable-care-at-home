/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import { ASSETS_URL } from "../utilities";

const ProductList = ({ data }) => {
  const history = useHistory();

  return (
    <div className="what-we-do container">
      <div className="row">
        {data &&
          data.map((item, index) => {
            return (
              <div className="service span3" key={`${item.icon}-${index}`}>
                <img
                  src={`${ASSETS_URL}/${
                    item.other && item.other.image
                      ? item.other.image
                      : "images/pattern.jpg"
                  }`}
                  className="img-thumbnail mt-1"
                  alt="Author Roopa"
                  style={{ maxHeight: "150px" }}
                />
                <h4>{item.title}</h4>
                <h5 className="mb-2">
                  Amount : {item.amount} | Quantity : {item.quantity}
                </h5>
                <a
                  onClick={() => history.push(`shop/${item.id}`)}
                  className="cursor-pointer"
                >
                  Detail
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
