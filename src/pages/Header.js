import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "../App.css";


const Header = () => {
  return (
    <Container >
    <Row  className='mt-3  p-5 row'>
      <Col  className=' pt-5 col1'>
                <h1 style={{  fontWeight: "900"}} >Hi!<br/>
                    I'm Navneet<br/>
                    Front-End Web Developer<br/>
                </h1>
      </Col>
      <Col className="col2 " >
          <img src={require("../components/images/me6.png")} style={{width:"400px", height:"400px"}}  />
      </Col>
    </Row>
  </Container>
  );
};

export default Header;
