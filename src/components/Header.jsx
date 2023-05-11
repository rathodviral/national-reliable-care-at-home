/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AppContext } from "../AppContext";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const { title, menu } = useContext(AppContext);

  const [isMenuShow, setMenuShow] = useState(false);
  const [isMobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const resizeWindow = () => {
    setMobileScreen(window.innerWidth < 768);
    setMenuShow(false);
  };

  const MenuItem = ({ icon, label, link }) => {
    return (
      <li className={location.pathname === link ? "current-page" : ""}>
        <a
          onClick={(e) => {
            history.push(link);
            setMenuShow(!isMenuShow);
          }}
          className="cursor-pointer"
        >
          <i className={`icon-${icon}`}></i>
          <br />
          {label}
        </a>
      </li>
    );
  };

  const Title = () => {
    // const [p1, p2] = title.split(" ");
    return (
      // <h1>
      //   <a className="brand cursor-pointer" onClick={(e) => history.push("/")}>
      //     <span>{p1}</span>
      //     {p2}
      //   </a>
      // </h1>
      <div className="logo cursor-pointer" onClick={() => history.push("/")}>
        <img src="img/logo.png" alt="" />
      </div>
    );
  };

  const Notification = () => {
    // const [p1, p2] = title.split(" ");
    return (
      <div className="notification-bar d-flex justify-content-center align-items-center">
        <p className="my-0">
          <a
            className="brand cursor-pointer"
            onClick={(e) => history.push("/")}
          >
            {/* <span>{p1}</span> */}
            {title}
          </a>
        </p>
      </div>
    );
  };
  return (
    <React.Fragment>
      <Notification />
      <div className="container">
        <div className="header row">
          <div className="span12">
            <div className="navbar">
              <div className="navbar-inner px-0">
                <span
                  className="btn btn-navbar"
                  style={{ marginTop: "36px" }}
                  onClick={() => setMenuShow(!isMenuShow)}
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </span>
                {title && <Title />}
                {/* <p>a super cool design agency...</p> */}
                <div
                  className={
                    isMobileScreen && isMenuShow
                      ? "nav-collapse collapse show-menu"
                      : "nav-collapse collapse"
                  }
                >
                  <ul className="nav pull-right">
                    {menu &&
                      menu.map((item, index) => {
                        return <MenuItem key={item.icon + index} {...item} />;
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
