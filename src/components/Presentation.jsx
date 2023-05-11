import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { getClassName } from "../utilities";

const Presentation = ({ className, id }) => {
  const { layoutData } = useContext(AppContext);
  const { content: p } = layoutData.find((item) => item.id === id);
  return (
    p &&
    p.heading && (
      <div className={`presentation container${getClassName(className)}`}>
        <h2>
          {p.heading[0]} <span className="violet">{p.heading[1]}</span>{" "}
          {p.heading[2]}
        </h2>
        <p>{p.description}</p>
      </div>
    )
  );
};

export default Presentation;
