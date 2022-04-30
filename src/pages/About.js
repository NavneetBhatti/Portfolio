import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

const About = () => {
  return (
    <div>
        <Row className='row2 mt-5'>
            <h1 style={{textAlign:"center"}}>About Me</h1>
        </Row>   
        <Row className='row3 p-5'>
            <Col className='col3 p-4'>
                <h2>Get to know me!</h2><br/>
                <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
                <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p> 
                <button type="button" class="btn btn-success">Contact</button>

            </Col>
            <Col className='col4 p-4 ms-5'>
                <h2>My Skills</h2><br/>
               
                <div class="misc-skills">
                    <span class="skill-tag">HTML</span> <span class="skill-tag">CSS</span> <span class="skill-tag">Javascript</span> <span class="skill-tag">React</span> <br />
                    <span class="skill-tag">Node.js</span> <span class="skill-tag">Python</span> <span class="skill-tag">GraphQl</span> <span class="skill-tag">PHP</span> <br />
                    <span class="skill-tag">C++</span> <span class="skill-tag">Fast API</span> <span class="skill-tag">JSON</span> <span class="skill-tag">Java</span> <br />
                    <span class="skill-tag">Microsoft Azure</span> <span class="skill-tag">Java</span> <span class="skill-tag">Bootstrap</span><span class="skill-tag">Git</span><br />
                </div>
                </Col>
        </Row>


       
    </div>
  )
}

export default About;
