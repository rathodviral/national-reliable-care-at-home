/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";

const Portfolio = () => {
  // const history = useHistory();
  const { service } = useContext(AppContext);

  return (
    <div className="portfolio portfolio-page container">
      <div className="row">
        <ul className="portfolio-img">
          {service &&
            service.map((item) => {
              return (
                <li data-id="p-1" data-type="web-design" className="span3">
                  <div className="work">
                    <a href="assets/img/portfolio/work1.jpg" rel="prettyPhoto">
                      <img src="assets/img/portfolio/work1.jpg" alt="" />
                    </a>
                    <h4>Lorem Website</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      {/* <div className="row">
        {service &&
          service.map((item) => {
            return (
              <div className="service span3" key={item.icon}>
                               <img
                  src={`${ASSETS_URL}/img/service-3.jpg`}
                  alt=""
                  className="mb-1"
                />
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
      </div> */}
    </div>
  );
};

export default Portfolio;
