import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link className="back-home" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
