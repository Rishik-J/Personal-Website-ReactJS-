import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hope you are doing well! My name is
             <span className="purple"> Rishik Janaswamy </span> 
             and I am from
             <span className="purple"> Dubai. </span>
             I am currently a rising sophomore studing 
             <span className="purple"> Computer science, Statistics & Data science </span>
             at the 
             <span className="purple"> University of Massachuessts Amherst. </span>
             I have a huge passion for programming, especially <span className="purple">
              Machine Learning, Quantatative finace, Financal enginerring, and Software enginerring.
             </span>
            <br />
            <br />
            This summer I am a <span className="purple">software engineering intern</span> at 
            <span className="purple"> Putnam Investments</span> where 
            I am leveraging <span className="purple">agile methodologies</span> along with <span className="purple">Java, JavaScript, ExtJs, and 
            XML</span> to develop new products for equity analysts while simultaneously pursuing 
            the <span className="purple">AWS cloud practioner certification.</span> 
            <br />
            <br />
            Also, this summer my venture was selected for the <span className="purple">collegiate summer venture program</span>.
            As a part of the program we spent time conducting <span className="purple">customer interviews</span>,
            networking with <span className="purple">venture capital</span> firms, developing the MVP, and 
            participating in a range of <span className="purple">pitch competitions</span>. Our start-up was selected as the top for the incubator and we <span className="purple">won</span> a total of 
            <span className="purple"> $1300 equity free funding</span> 

            <br />
            <br />
            Some other activities I love include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to the Weeknd on repeat
            </li>
            <li className="about-activity">
              <ImPointRight /> cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Entrepreneurship
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "They gon' remember my legacy"{" "}
          </p>
          <footer className="blockquote-footer">Abel Tesfaye</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
