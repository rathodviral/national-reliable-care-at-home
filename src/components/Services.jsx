/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { ASSETS_URL, getClassName } from "../utilities";

const Services = ({ className, id }) => {
  const history = useHistory();
  const { layoutData } = useContext(AppContext);
  const { content: service } = layoutData.find((item) => item.id === id);
  const isImg = service.every(
    (item) => item.icon.includes(".pn") || item.icon.includes(".jp")
  );

  return (
    <div className={`what-we-do container${getClassName(className)}`}>
      <div className="row">
        {service &&
          service.map((item) => {
            return (
              <div className="service span3" key={item.icon}>
                {isImg ? (
                  <img
                    src={`${ASSETS_URL}/${item.icon}`}
                    alt=""
                    className="mb-1"
                  />
                ) : (
                  <div className="icon-awesome">
                    <i className={`icon-${item.icon}`}></i>
                  </div>
                )}
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a
                  onClick={() => history.push(item.buttonLink)}
                  className="cursor-pointer"
                >
                  {item.buttonText}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Services;
