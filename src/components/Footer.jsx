/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { ASSETS_URL } from "../utilities";

const Footer = () => {
  const history = useHistory();
  const { footer, social } = useContext(AppContext);

  const About = ({ title, information, link }) => (
    <div className="widget span3">
      <h4>{title}</h4>
      <p>{information}</p>
      <p>
        <a onClick={() => history.push(link)}>Read more...</a>
      </p>
    </div>
  );

  const Blog = ({ title, blog = [] }) => (
    <div className="widget span3">
      <h4>{title}</h4>
      <div className="show-tweets">
        <ul>
          {blog.map((x, i) => (
            <li
              key={"blog-" + i}
              style={{ fontSize: "15px", lineHeight: "30px" }}
            >
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  const Image = ({ title, images = [] }) => (
    <div className="widget span3">
      <h4>{title}</h4>
      <ul className="flickr-feed">
        {images.map((x, i) => (
          <li key={x.link + "-" + i}>
            <a onClick={() => history.push(x.link)}>
              <img src={`${ASSETS_URL}/${x.image}`} alt="Roopa" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  const Address = ({ title, address = [] }) => (
    <div className="widget span3">
      <h4>{title}</h4>
      {address.map((x) => {
        return x.email ? (
          <p key={x.information}>
            <i className={`icon-${x.icon}`}></i> {x.information}
            <a href={`mailto:${x.email}`}>{x.email}</a>
          </p>
        ) : (
          <p key={x.information}>
            <i className={`icon-${x.icon}`}></i> {x.information}
          </p>
        );
      })}
    </div>
  );
  return (
    <footer>
      <div className="container">
        <div className="row">
          {footer &&
            footer.map((item) => {
              if (item.information) {
                return <About {...item} key={item.title} />;
              } else if (item.blog) {
                return (
                  <Blog
                    title={item.title}
                    blog={item && item.blog.length > 0 ? item.blog : []}
                    key={item.title}
                  />
                );
              } else if (item.images) {
                return <Image {...item} key={item.title} />;
              } else {
                return <Address {...item} key={item.title} />;
              }
            })}
        </div>
        <div className="footer-border"></div>
        <div className="row">
          <div className="copyright span4">
            {social && social.copyright && (
              <p>
                {social.copyright[0]}{" "}
                <a href={social.copyright[2]}>{social.copyright[1]}</a>.
              </p>
            )}
          </div>
          <div className="social span8">
            {social &&
              social.list &&
              social.list.map((item, index) => (
                <a
                  key={item.link + index}
                  className={item.icon}
                  href={item.link}
                  target="_blank"
                ></a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
