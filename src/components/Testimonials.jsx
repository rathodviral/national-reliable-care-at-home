/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext, useEffect, useState } from "react";
import { ASSETS_URL, getClassName } from "../utilities";
import { AppContext } from "../AppContext";

const Testimonials = ({ className, id }) => {
  const { layoutData } = useContext(AppContext);
  const { content: testimonials, name } = layoutData.find(
    (item) => item.id === id
  );
  let [active, setActive] = useState(0);
  useEffect(() => {
    if (testimonials.length > 1) {
      let c = 0;
      setInterval(() => {
        c++;
        setActive(c);
        if (c === testimonials.length) {
          setActive(0);
          c = 0;
        }
      }, 3000);
    }
  }, [testimonials]);

  return (
    <div className={`testimonials container pb-0${getClassName(className)}`}>
      {name && (
        <div className="testimonials-title">
          <h3>{name}</h3>
        </div>
      )}
      <div className="row">
        <div className="testimonial-list span12">
          <div className="tabbable tabs-below">
            <div className="tab-content">
              {testimonials &&
                testimonials.map((item, index) => {
                  return (
                    <div
                      className={
                        index === active ? "tab-pane active" : "tab-pane"
                      }
                      key={`${item.from}-${index}`}
                    >
                      {item.image && (
                        <img
                          src={`${ASSETS_URL}/${item.image}`}
                          title=""
                          alt=""
                        />
                      )}
                      <p>
                        {item.description}
                        <br />
                        <span className="violet">{item.from}</span>
                      </p>
                    </div>
                  );
                })}
            </div>
            <ul className="nav nav-tabs">
              {testimonials &&
                testimonials.map((item, index) => {
                  return (
                    <li
                      className={index === active ? "active" : ""}
                      key={`${item.from}-${index}`}
                    >
                      <a onClick={() => setActive(index)}></a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
