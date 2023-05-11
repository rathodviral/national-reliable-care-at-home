import React from "react";

const Error = ({ text = "Page Not Found" }) => {
  return (
    <div className="container h-50vh d-flex align-items-center justify-content-center">
      <h1>Oppss... {text}</h1>
    </div>
  );
};

export default Error;
