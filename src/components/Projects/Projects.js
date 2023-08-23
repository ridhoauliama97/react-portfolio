import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../assets/Projects/calculator-app.png";
import portfolio from "../../assets/Projects/portfolio.png";
import formLogin from "../../assets/Projects/login-form.png";
import parallax from "../../assets/Projects/parallax.png";
import tictactoe from "../../assets/Projects/TicTacToe.png";
import todo from "../../assets/Projects/todo-app.png";
import alarmClock from "../../assets/Projects/alarm-clock-app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallax}
              isBlog={false}
              title="Parallax"
              // description=""
              ghLink="https://github.com/ridhoauliama97/parallax-portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Website Portfolio"
              ghLink="https://github.com/ridhoauliama97/react-portfolio"
              demoLink="https://ridhoauliama97-portfolio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formLogin}
              isBlog={false}
              title="Form Login"
              // description=""
              ghLink="https://github.com/ridhoauliama97/login-form"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator App"
              // description=""
              ghLink="https://github.com/ridhoauliama97/calculator-app"
              demoLink="https://portfolio-ridho-reactjs-calculator-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe Game"
              // description=""
              ghLink="https://github.com/ridhoauliama97/tictactoe-reactJS"
              demoLink="https://portfolio-ridho-reactjs-tictactoe-game.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do App"
              // description=""
              ghLink="https://github.com/ridhoauliama97/todo-app"
              demoLink="https://portfolio-ridho-reactjs-todo-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alarmClock}
              isBlog={false}
              title="Alarm Clock App"
              // description=""
              ghLink="https://github.com/ridhoauliama97/alarm-clock-app-reactjs"
              demoLink="https://portfolio-ridho-reactjs-alarm-clock-app.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
