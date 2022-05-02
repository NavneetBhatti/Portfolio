import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="projects_section" className="mt-5 ">
      <Row>
        <h1 style={{ textAlign: "center" }} className="project_heading">
          Projects
        </h1>
      </Row>
      <Row className="p-5">
        <Col className="p-4">
          <img
            src={require("../components/images/car.png")}
            className="image"
          />
        </Col>
        <Col className="col4 p-4 mt-4">
          <h3>Car Rental Service</h3>
          <p>
            This is a website to rent a car. User can login and book the car and
            Admin has access to confirm and reject booking. Admin can add,
            delete or update the car information.{" "}
          </p>
          <h5>Technologies included: </h5>
          React, Node js, MongoDB, Bootstrap
          <br />
          <button
            type="button"
            class="btn btn-success"
            onClick={() =>
              openInNewTab("https://carrentalclientmatrix.herokuapp.com/")
            }
          >
            {" "}
            Website
          </button>
          <button
            type="button"
            class="btn btn-success m-3"
            onClick={() =>
              openInNewTab(
                "https://github.com/NavneetBhatti/car_rental_service"
              )
            }
          >
            Source Code
          </button>
        </Col>
      </Row>

      <Row className="p-5">
        <Col className="col4 p-4 mt-4">
          <h3>Personal Portfolio</h3>
          <p>
            This is my Portfolio website. I've used React for component-based
            structure and Bootstrap for designing.
          </p>
          <h5>Technologies included: </h5>
          React, Bootstrap
          <br />
          <button
            type="button"
            class="btn btn-success"
            onClick={() => openInNewTab("https://portfolio-navneet.herokuapp.com/")}
          >
            Website
          </button>
          <button
            type="button"
            class="btn btn-success m-3"
            onClick={() =>
              openInNewTab("https://github.com/NavneetBhatti/Portfoliio")
            }
          >
            Source Code
          </button>
        </Col>
        <Col className="p-4">
          <img
            src={require("../components/images/portfolio.png")}
            className="image"
          />
        </Col>
      </Row>

      <Row className="p-5">
        <Col className="p-4">
          <img
            src={require("../components/images/portfolio.png")}
            className="image"
          />
        </Col>
        <Col className="col4 p-4 mt-4">
          <h3>BrandDeal</h3>
          <p>
            This is a coupon and deals websites where you can find latest deals
            on different Products.
          </p>
          <h5>Technologies included: </h5>
          React, Node js
          <br />
          <button
            type="button"
            class="btn btn-success"
            onClick={() => openInNewTab("https://google.com")}
          >
            Website
          </button>
          <button
            type="button"
            class="btn btn-success m-3"
            onClick={() =>
              openInNewTab("https://github.com/NavneetBhatti/Portfoliio")
            }
          >
            Source Code
          </button>
        </Col>
      </Row>

      <Row className="p-5">
        <Col className="col4 p-4 mt-4">
          <h3>Load Test</h3>
          <p>
            This is a Load testing tool to test the performance of the website
            under a specific expected load to determine how the website behaves
            while being accessed by multiple users simultaneously.
          </p>
          <h5>Technologies included: </h5>
          ReactJS, GraphQL, Ant Component, JAVA, Springboot, Hibernate, MySQL
          <br />
          <button
            type="button"
            class="btn btn-success"
            onClick={() => openInNewTab("https://google.com")}
          >
            Website
          </button>
          <button
            type="button"
            class="btn btn-success m-3"
            onClick={() =>
              openInNewTab("https://github.com/NavneetBhatti/weather-app")
            }
          >
            Source Code
          </button>
        </Col>
        <Col className="p-4">
          <img
            src={require("../components/images/loadTest.png")}
            className="image"
          />
        </Col>
      </Row>

      <Row className="p-5">
        <Col className="p-4">
          <img
            src={require("../components/images/portfolio.png")}
            className="image"
          />
        </Col>
        <Col className="col4 p-4 mt-4">
          <h3>QuestionAnswer</h3>
          <p>
            This a website where user can ask questions related to Programming
            languages{" "}
          </p>
          <h5>Technologies included: </h5>
          Asp.net
          <br />
          <button
            type="button"
            class="btn btn-success"
            onClick={() => openInNewTab("https://google.com")}
          >
            Website
          </button>
          <button
            type="button"
            class="btn btn-success m-3"
            onClick={() =>
              openInNewTab("https://github.com/NavneetBhatti/Portfoliio")
            }
          >
            Source Code
          </button>
        </Col>
      </Row>

      <Row className="p-5">
        <Col className="col4 p-4 mt-4">
          <h3>OpenWeather</h3>
          <p>
            The application is a weather app which displays basic weather
            information depending on the users location.
          </p>
          <h5>Technologies included: </h5>
          Java
          <br />
          <button
            type="button"
            class="btn btn-success"
            onClick={() => openInNewTab("http://slideme.org/application/openweather")}
          >
            Website
          </button>
          <button
            type="button"
            class="btn btn-success m-3"
            onClick={() =>
              openInNewTab("https://github.com/NavneetBhatti/weather-app")
            }
          >
            Source Code
          </button>
        </Col>
        <Col className="p-4">
          <img
            src={require("../components/images/weather.jpeg")}
            style={{
                width: "400px",
                height: "600px",
              }}            />
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
