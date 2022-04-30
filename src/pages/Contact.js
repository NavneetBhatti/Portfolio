import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';




const Contact = () => {
  return (
    <div class="contact">
        <Row>
            <h2 style={{textAlign:"center"}}>Contact Me</h2>
        </Row>
        <Row className="mt-4">
            <Col>
                 <h4 style={{textAlign:"center"}} className='pt-2' >navneetbhatti13@gmail.com</h4>
            </Col>
            <Col >
               <h4 style={{textAlign:"center"}} className='pt-2'> +1(437)-970-9001</h4>
            </Col>
            <Col>
                <SocialIcon url="https://www.linkedin.com/in/navneetkaurbhatti/" bgColor='black' fgColor='white'  />
                <SocialIcon url="https://github.com/NavneetBhatti" bgColor='black' fgColor='white'  />

            </Col>
        </Row>
    </div>
  )
}

export default Contact;
