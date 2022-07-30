import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/5eKX.gif"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               ALLOW ME TO<span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Rishik Janaswamy
              <br />
              <br />I love programming, sports (especially cricket!), and music
              <br />
              <br />
              <i>
                My favorite lanagues Include
                <b className="purple"> Python & Java </b>
              </i>
              <br />
              <br />
              My fields of Interest's include&nbsp;
              <i>
                <b className="purple">Quantatative Finance and Machine Learning </b> 
                  in areas related to{" "}
                <b className="purple">
                  Deep Learning, Natural Launguage Processing, and Renforcement Learning.
                </b>
              </i>
              <br />
              <br />
              I also love to create a whole range of SWE applications using
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, and Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js, React.js, and Three.js</b>
              </i>
              <br />
              <br />
              <b>
                  {" "}
                  Feel free to Navigate to the <strong> about </strong> page to learn more about my Professional experience, acadmics, and me
                </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1> Feel free to <span className="purple">connect </span>with me</h1>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rishik-janaswamy-99687a1b3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Rishik-J"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rishik.a.janaswamy@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
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
