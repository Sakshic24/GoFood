import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is included

const Between = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ height: "70vh" }} // Adjust height here
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" w-100 "
              alt="..."
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" w-100"
              alt="..."
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" w-100"
              alt="..."
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success text-white bg-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Between;
