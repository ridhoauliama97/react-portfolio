import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ridho Aulia Mahqoma Angkat </span>
            from <span className="purple"> Medan, Indonesia.</span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
            <br />
            Additionally, I am currently employed as a software developer at Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout, Basketball & Swiming
            </li>
            <li className="about-activity">
              <ImPointRight /> Journaling & Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Strive to build things that make a difference!" </p>
          <footer className="blockquote-footer">Ridho Aulia Mahqoma Angkat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;