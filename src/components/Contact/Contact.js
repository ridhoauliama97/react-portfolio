import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillGithub, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Get in <strong className="purple">Touch! </strong>
        </h1>
        <p style={{ color: "white" }}>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/ridhoauliama97"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://wa.me/62895327143852"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiOutlineWhatsApp />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/ridhoauliama97/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
        <Form style={{ paddingTop: 25 }}>
          <Form.Floating>
            <Form.Group controlId="fromGridName">
              <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3">
                <Form.Control type="text" placeholder="Ridho Aulia Mahqoma Angkat" required />
              </FloatingLabel>
            </Form.Group>
          </Form.Floating>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <InputGroup>
                <InputGroup.Text id="email">
                  <AiOutlineMail />
                </InputGroup.Text>
                <Form.Control placeholder="Your Email" aria-label="Email" aria-describedby="email" required />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <InputGroup>
                <InputGroup.Text id="whatsapp">
                  <AiOutlineWhatsApp />
                </InputGroup.Text>
                <Form.Control
                  placeholder="WhatsApp Number"
                  aria-label="WhatsApp"
                  aria-describedby="whatsapp"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <FloatingLabel controlId="messages" label="Your Messages" className="mb-3">
            <Form.Control as="textarea" placeholder="Your Messages" style={{ height: "100px" }} required />
          </FloatingLabel>

          <Button variant="primary" type="submit" style={{ marginTop: "1em" }}>
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default Contact;
