import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div class="contact" id="contact_section">
      <Row>
        <h2 style={{ textAlign: "center" }}>Contact Me</h2>
      </Row>
      <Row className="mt-4 pt-2">
        <Col>
          <div>
            <h4 style={{ textAlign: "center" }}>
              {" "}
              <span>
                <FaEnvelope style={{ paddingRight: "8px" }} />
              </span>
              navneetbhatti13@gmail.com
            </h4>
          </div>
        </Col>
        <Col>
          <h4 style={{ textAlign: "center" }}>
            <span>
              <FaPhoneAlt style={{ paddingRight: "8px" }} />
            </span>{" "}
            +1(437)-970-9001
          </h4>
        </Col>
        <Col>
          <FaLinkedinIn
            bgColor="black"
            fgColor="white"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/navneetkaurbhatti/")
            }
            style={{ marginRight: "15px" }}
            size={30}
          />
          <FaGithub
            bgColor="black"
            fgColor="white"
            onClick={() => openInNewTab("https://github.com/NavneetBhatti")}
            size={30}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
