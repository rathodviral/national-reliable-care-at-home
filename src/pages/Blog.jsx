/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { ASSETS_URL, formatDate, getCurrentMonth } from "../utilities";

const Blog = () => {
  const history = useHistory();
  const {
    blogList = [],
    getBlogListData,
    setLoaderShow
  } = useContext(AppContext);
  const month = getCurrentMonth();
  const [filter, setFilter] = useState({ title: "", start: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const searchClick = () => {
    setLoaderShow(true);
    getBlogListData({ ...filter, end: formatDate(new Date()) });
    const inputList = document.querySelectorAll(".form-control input");
    inputList.forEach((element) => {
      element.value = "";
    });
  };

  return (
    <div>
      <PageTitle
        icon={"icon-tasks page-title-icon"}
        title={"Blog List"}
        description={month}
      >
        <div className="form-control-wrapper">
          <div className="form-control w-40">
            <input
              type="text"
              className="mb-0"
              placeholder="Seach By Title"
              onChange={(e) => setFilter({ ...filter, title: e.target.value })}
            />
          </div>
          <div className="form-control w-40">
            <input
              type="date"
              className="mb-0"
              placeholder="Seach By Date"
              onChange={(e) => setFilter({ ...filter, start: e.target.value })}
            />
          </div>
          <div className="form-control w-20">
            <button onClick={searchClick}>Search</button>
          </div>
        </div>
      </PageTitle>
      <div className="call-to-action container mt-1 mb-2 pb-0">
        {blogList.length > 0 ? (
          blogList.map((blog) => {
            return (
              <div className="row mt-1" key={blog.id}>
                <div className="call-to-action-text span12">
                  <div className="ca-text">
                    <h2 className="txt-lobster-24">{blog.id}</h2>
                  </div>
                  <div className="ca-text" style={{ width: "60px" }}>
                    <img
                      src={`${ASSETS_URL}/${
                        blog.other && blog.other.image
                          ? blog.other.image
                          : "images/pattern.jpg"
                      }`}
                      className="img-thumbnail"
                      alt={blog.title}
                      style={{ maxHeight: "60px", maxWidth: "60px" }}
                    />
                  </div>
                  <div className="ca-text">
                    <p>
                      <span className="violet">
                        <b>{blog.title}</b> (
                        <small>{formatDate(blog.date, "DD-MM-YYYY")}</small>)
                      </span>
                      <br />
                      {blog.description}
                    </p>
                  </div>
                  <div className="ca-button">
                    <a
                      onClick={() => history.push(`blog/${blog.id}`)}
                      className="cursor-pointer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="row mt-1">
            <div className="call-to-action-text span12">
              <h2 className="txt-lobster-24 text-center w-100">
                No blogs found for {month}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
