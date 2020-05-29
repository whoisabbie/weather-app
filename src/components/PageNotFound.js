import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <h1>Oops!</h1>
        <h2>Dead End!</h2>
        <Link to="/">
          <button className="btn btn-dark btn-sm">Search Above</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
