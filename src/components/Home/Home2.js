import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Little <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br /> I am fluent in basic
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS <span style={{ color: "#fff", fontWeight: "normal" }}>and</span> Javascript
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building and developing&nbsp;
              <i>
                <b className="purple">
                  Websites <span style={{ color: "#fff", fontStyle: "normal", fontWeight: "normal" }}>or</span> Web
                  Applications{" "}
                </b>
                {/* and also in areas related to{""} */}
                {/* <b className="purple">Blockchain.</b> */}
              </i>
              <br />
              <br />I like new things and share positive things, be it technology or something else
              <br />
              Whenever possible, I also apply my passion in Javascript to learn{" "}
              <i>
                <b className="purple"> Modern Javascript Library</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <h5>
              Feel free to <span className="purple">connect </span>with me
            </h5>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ridhoauliama97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/62895327143852"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ridhoauliama97/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ridhoauliama"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
