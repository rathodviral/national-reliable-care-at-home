/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { getClassName } from "../utilities";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";

export const Action = ({ className, id }) => {
  const history = useHistory();
  const { layoutData } = useContext(AppContext);
  const { content: action } = layoutData.find((item) => item.id === id);

  return (
    <div className={`call-to-action container pb-0${getClassName(className)}`}>
      <div className="row">
        <div className="call-to-action-text span12 py-1">
          <div className="ca-text">
            <p className="my-0 line-height-60px">
              {action &&
                action.description &&
                action.description.map((item, index) => {
                  if (item.style === "color") {
                    return (
                      <span className="violet" key={index}>
                        {item.info}
                      </span>
                    );
                  } else if (item.style === "bold") {
                    return <strong key={index}>{item.info}</strong>;
                  } else {
                    return item.info;
                  }
                })}
            </p>
          </div>
          {action && action.buttonText && (
            <div className="ca-button">
              <a onClick={() => history.push(action.buttonLink)}>
                {action.buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
