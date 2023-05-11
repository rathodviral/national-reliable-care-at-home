import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { ASSETS_URL } from "../utilities";

const PageTitle = ({ icon, title, description, children, id = "" }) => {
  const { layoutData } = useContext(AppContext);
  const { content: data } = layoutData.find((item) => item.id === id) || {
    content: ""
  };
  return id ? (
    <div
      className="page-title"
      style={{
        background: `#f8f8f8 url(${ASSETS_URL}/${data.image}) left top repeat`
      }}
    >
      <div className="container">
        <div className="row bg-white-transperent-7">
          <div className="span12 py-1">
            {/* <i className={`icon-${data.icon}`}></i> */}
            <h2>{data.title} /</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="page-title">
      <div className="container">
        <div className="row">
          <div className="span6">
            <i className={icon}></i>
            <h2>{title} /</h2>
            <p>{description}</p>
          </div>
          <div className="span6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
