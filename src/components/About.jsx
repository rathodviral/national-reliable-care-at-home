import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { getClassName } from "../utilities";

const About = ({ id, className }) => {
  const { layoutData } = useContext(AppContext);
  const { content: about } = layoutData.find((item) => item.id === id);

  return (
    <div className={`about-us container${getClassName(className)}`}>
      <div className="row">
        <div className="about-us-text span12">
          {about &&
            about.list.map((item, index) => (
              <React.Fragment key={item.title + index}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
