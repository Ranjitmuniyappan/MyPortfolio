import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ranjith </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            I am a Frontend Developer with 2.6 years of experience at Nextbrain Technologies private Limited, I am dedicated to creating seamless and visually appealing user interfaces. Proficient in Web Development, I specialize in leveraging cutting-edge technologies such as HTML, CSS, JavaScript, React.js, and Material UI to deliver engaging and responsive frontend solutions.
            {/* <br />
            I have completed Integrated BBA at Thiruvalluvar University. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ranjith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
