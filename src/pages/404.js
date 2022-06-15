import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 Page | Not Found</h1>

      <section className="mt-4">
        <Link to="/" className="btn btn-success btn-lg">
          Back to Home Page
        </Link>
      </section>
    </div>
  );
};

export default NotFound;
