import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Link } from "react-router-dom";


const Projects = () => {
      const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
  return (
    <div id="projects_section">
        <Row className='row2'>
            <h1 style={{textAlign:"center"}}>Projects</h1>
        </Row>   
        <Row className='row3 p-5'>
            <Col className='col3 p-4'>
                <img src={require("../components/images/car.png")} style={{width:"500px", height:"300px", border:"1px solid black"}}  />
            </Col>
            <Col className='col4 p-4 mt-4'>
                <h3>Car Rental Service</h3>
                 <p>This is my personal blog, I've used React for component-based structure, Strapi as a headless CMS to serve content, 
                 PostgreSQL to store article and category information, and Cloudinary for hosting images.</p>
                 <h5>Technologies included: </h5>
                 React, Bootstrap<br/>
                 {/* <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">google.com</a> */}

                 <button type="button" class="btn btn-success" onClick={() => openInNewTab('https://carrentalclientmatrix.herokuapp.com/')}> Website</button>
                <button type="button" class="btn btn-success m-3" onClick={() => openInNewTab('https://github.com/NavneetBhatti/car_rental_service')}>Source Code</button>
            </Col>
        </Row>


        <Row className='row3 p-5'>
        <Col className='col4 p-4 mt-4'>
                <h3>Car Rental Service</h3>
                 <p>This is my personal blog, I've used React for component-based structure, Strapi as a headless CMS to serve content, 
                 PostgreSQL to store article and category information, and Cloudinary for hosting images.</p>
                 <h5>Technologies included: </h5>
                 React, Bootstrap<br/>
                 <button type="button" class="btn btn-success" onClick={() => openInNewTab('https://google.com')}>Website</button>
                <button type="button" class="btn btn-success m-3" onClick={() => openInNewTab('https://google.com')}>Source Code</button>
            </Col>
            <Col className='col3 p-4'>
                <img src={require("../components/images/car.png")} style={{width:"500px", height:"300px", border:"1px solid black"}}  />
            </Col>
            
        </Row>


        <Row className='row3 p-5'>
            <Col className='col3 p-4'>
                <img src={require("../components/images/car.png")} style={{width:"500px", height:"300px", border:"1px solid black"}}  />
            </Col>
            <Col className='col4 p-4 mt-4'>
                <h3>Car Rental Service</h3>
                 <p>This is my personal blog, I've used React for component-based structure, Strapi as a headless CMS to serve content, 
                 PostgreSQL to store article and category information, and Cloudinary for hosting images.</p>
                 <h5>Technologies included: </h5>
                 React, Bootstrap<br/>
                 <button type="button" class="btn btn-success" onClick={() => openInNewTab('https://google.com')}>Website</button>
                <button type="button" class="btn btn-success m-3" onClick={() => openInNewTab('https://google.com')}>Source Code</button>
            </Col>
        </Row>


        <Row className='row3 p-5'>
        <Col className='col4 p-4 mt-4'>
                <h3>Car Rental Service</h3>
                 <p>This is my personal blog, I've used React for component-based structure, Strapi as a headless CMS to serve content, 
                 PostgreSQL to store article and category information, and Cloudinary for hosting images.</p>
                 <h5>Technologies included: </h5>
                 React, Bootstrap<br/>
                 <button type="button" class="btn btn-success" onClick={() => openInNewTab('https://google.com')}>Website</button>
                <button type="button" class="btn btn-success m-3" onClick={() => openInNewTab('https://google.com')}>Source Code</button>
            </Col>
            <Col className='col3 p-4'>
                <img src={require("../components/images/car.png")} style={{width:"500px", height:"300px", border:"1px solid black"}}  />
            </Col>
            
        </Row>
    </div>
  )
}

export default Projects;
