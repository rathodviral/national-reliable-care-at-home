import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Loader = () => {
  const { isLoaderShow } = useContext(AppContext);
  return (
    isLoaderShow && (
      <div className="loader-backdrop">
        <div className="loader-wrapper">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  );
};

export default Loader;
