import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Ridho Aulia Mahqoma Angkat </span>
            <br /> I'm started programming on web development since <span className="purple">2018</span>
            <br /> Fully-committed to designing and developing system that will be used in mobile or web application.
            Always want to learn new things and be able to work in a team.{" "}
            <span className="purple">Currently I'm self-employed and open for cool opportunities.</span>
            <br />
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout & Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Journaling & Reading Books
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>"Nikmati Hidup, Hambar Tambah Garam!" </p>
          <footer className="blockquote-footer">Ridho Aulia Mahqoma Angkat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
