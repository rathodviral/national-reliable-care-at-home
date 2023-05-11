/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { ASSETS_URL, getClassName } from "../utilities";
import { AppContext } from "../AppContext";

export const ServiceDetail = ({ className, name, id }) => {
  const { layoutData } = useContext(AppContext);
  const { content: sd } = layoutData.find((item) => item.id === id);

  const Image = () => (
    <div
      className="services-half-width-image py-0 w-50"
      style={{
        background: `url(${ASSETS_URL}/${sd.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* <img src={`${ASSETS_URL}/${sd.image}`} alt="" /> */}
    </div>
  );

  return (
    sd && (
      <div
        className={`services-half-width container${getClassName(className)}`}
      >
        <div className="line-height-0px">
          {sd.isImageLeft && <Image />}
          <div
            className={`services-half-width-text py-0 w-50 d-inline-block${
              sd.isTheme ? " bg-color-dark f-color-white" : ""
            }`}
          >
            <div>
              <h4 className={sd.isTheme ? " f-color-light" : ""}>{sd.title}</h4>
              <div className="theme-border-wrapper">
                <div
                  className={`theme-border${
                    sd.isTheme ? " bg-color-white" : ""
                  }`}
                ></div>
              </div>
              <p className="mb-0">
                {sd.description &&
                  sd.description.map((item, index) => {
                    if (item.style === "color") {
                      return (
                        <span
                          key={index}
                          className={`violet${
                            sd.isTheme ? " f-color-light" : ""
                          }`}
                        >
                          {item.info}
                        </span>
                      );
                    } else if (item.style === "bold") {
                      return <strong key={index}>{item.info}</strong>;
                    } else if (item.style === "point") {
                      return (
                        <div
                          key={index}
                          className="d-flex align-items-start mt-0-5"
                        >
                          <div className="w-10 d-flex justify-content-center ">
                            <i className="icon-ok-circle f-color-dark fs-25"></i>
                          </div>
                          <div className="w-90">{item.info}</div>
                        </div>
                      );
                    } else {
                      return (
                        <span key={index} className="mx-0">
                          {item.info}
                        </span>
                      );
                    }
                  })}
              </p>
            </div>
          </div>
          {!sd.isImageLeft && <Image />}
        </div>
      </div>
    )
  );
};
