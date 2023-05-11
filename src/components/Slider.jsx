import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { ASSETS_URL } from "../utilities";

const Slider = ({ id }) => {
  const { layoutData } = useContext(AppContext);
  const { content: slider } = layoutData.find((item) => item.id === id);

  useEffect(() => {
    if (slider.length > 0) {
      const event = new Event("loadSlider");
      window.dispatchEvent(event);
    }
  }, [slider]);

  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="span10 offset1">
            <div className="flexslider my-3">
              <ul className="slides">
                {slider &&
                  slider.map((item, index) => {
                    return (
                      <li
                        data-thumb={`${ASSETS_URL}/${item.image}`}
                        key={item.image}
                      >
                        <img
                          src={`${ASSETS_URL}/${item.image}`}
                          alt={index + 1}
                        />
                        <p className="flex-caption">{item.information}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
