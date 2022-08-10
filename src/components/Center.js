import React from "react";

function Center() {
  return (
    <div className="Center">
      {/* Center component */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/2160/1100/"
              className="d-block w-100"
              style={{ height: "94vh" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/2160/1200/"
              className="d-block w-100"
              style={{ height: "94vh" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/2160/1400/"
              className="d-block w-100"
              style={{ height: "94vh" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Center;
