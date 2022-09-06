import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/newNLP.png";
import ProjectTechstack from "./ProjectTechstack";
import FE from "../../Assets/Projects/FE.jpeg"
import mario from "../../Assets/Projects/mario.png"
import brain from "../../Assets/Projects/brain.png"
import reactIcon from "../../Assets/Projects/react.png"
import QandA from "../../Assets/Projects/Q&A.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Automated News Crawler with Sentiment Analysis"
              description="Created an Automated news crawler to find, summerize, and understand sentiment arround relevent news to influence investment decision. 
              Leverged Python and NLP"
              ghLink="https://github.com/Rishik-J/Python-ML-Projects/blob/main/AutomatedStockNewsSentimentAnalysis.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FE}
              isBlog={false}
              title="Financial Engineering"
              description="Using staistics to develop algorithms to model financal data. Created a 
              Binomial assest pricing model for European Options and Implimented the Black-Sholes model in python. Continuing to work and improve my financial engineering skils through projects like these ."
              ghLink="https://github.com/Rishik-J/Python-ML-Projects/tree/main/Quant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mario}
              isBlog={false}
              title="Mario RLE"
              description="Used the OpenAI Gym and a reinforcement learning model to train the Mario 'character' to complete an obsticle course game. Leveraged Python, PyTourch, and OpenAI"
              ghLink="https://github.com/Rishik-J/Python-ML-Projects/blob/main/MarioRLE.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QandA}
              isBlog={false}
              title="Q&A App with Anvil"
              description="Built a WebApp where the model reads a user's inputted text and uses ML to answer questions about the content of the text. Leveraged Python and Anvil"
              ghLink="https://github.com/Rishik-J/Python-ML-Projects/blob/main/Q%26A%20app%20with%20Anvil.ipynb"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactIcon}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Developed this website to share my interests, projects, and connect with a large audience. Leveraged ReactJs, JavaScript, CSS, HTML"
              ghLink="https://github.com/Rishik-J/Web-Dev-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain}
              isBlog={false}
              title="Sentiment Analysis using Deep Learning"
              description="Trained a range of NLP models leveraging neural networks to detect sentiment arround news and tweets. Leveraged Python and TensorFlow"
              ghLink="https://github.com/Rishik-J/Python-ML-Projects/tree/main/Sentiment%20Analysis"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <ProjectTechstack />
      </Container>
    </Container>
  );
}


export default Projects;
