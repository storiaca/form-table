import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Form Table</h1>

      <section className="mt-4">
        <Link to="/login" className="btn btn-dark btn-lg">
          Login
        </Link>
      </section>
    </div>
  );
};

export default Home;
