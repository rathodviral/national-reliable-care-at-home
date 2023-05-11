/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { ASSETS_URL } from "../utilities";

const Work = ({ name }) => {
  const history = useHistory();
  const { work, layoutData } = useContext(AppContext);
  const workList = layoutData.filter((item) => item.type === "work");

  const [heading, setHeading] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (workList.length > 0 && name) {
      const { content } = workList.find((item) => item.name === name);
      setHeading(content.heading);
      setList(content.list);
    }
  }, [workList]);

  useEffect(() => {
    if (work && !name) {
      setHeading(work.heading);
      setList(work.list);
    }
  }, [work]);

  useEffect(() => {
    if (list.length > 0) {
      const event = new Event("loadWork");
      window.dispatchEvent(event);
    }
  }, [list]);
  return (
    <div className="portfolio container mt-0 mb-3">
      <div className="portfolio-title">
        <h3>{heading}</h3>
      </div>
      <div className="row">
        {list &&
          list.map((item, index) => {
            return (
              <div className="work span3" key={item.image + index}>
                <img src={`${ASSETS_URL}/${item.image}`} alt="" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="icon-awesome">
                  <a
                    href={`${ASSETS_URL}/${item.image}`}
                    rel="prettyPhoto"
                    style={{ marginRight: "3px" }}
                  >
                    <i className="icon-search"></i>
                  </a>
                  <a
                    onClick={() => history.push(item.link)}
                    style={{ marginRight: "3px" }}
                  >
                    <i className="icon-link"></i>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Work;
