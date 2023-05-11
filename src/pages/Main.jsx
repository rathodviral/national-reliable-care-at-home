/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import Pages from "../components/Pages";
import Error from "./Error";

const Main = ({ page }) => {
  const { pages } = useContext(AppContext);
  const homeData = pages.find((item) => item.content.page === page);
  const [section, setSection] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (homeData) {
      const {
        content: { section: sc }
      } = homeData;
      setSection(sc);
    } else {
      setSection([]);
    }
  }, [homeData]);

  return (
    <React.Fragment>
      {section && section.length > 0 ? (
        <Pages list={section} />
      ) : (
        <Error text="In Progress" />
      )}
    </React.Fragment>
  );
};

export default Main;
