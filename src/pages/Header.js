import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div id="header_section">
      <Container>
        <Row className="mt-3  p-5 row">
          <Col className=" pt-5 col1" sm={7}>
            <h1 style={{ fontWeight: "900", marginTop: "30px" }}>
              Hi!
              <br />
              I'm Navneet
              <br />
              Software Developer
              <br />
            </h1>

            <br />
            <Link to="#projects_section">
              <button type="button" class="btn btn-success btn-lg btnHeader">
                Projects
              </button>
            </Link>
          </Col>
          <Col sm={5}>
            <img src={require("../components/images/m113w.png")} style={{width:"400px",height:"450px"}}/>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
