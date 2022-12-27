import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Sommlike from "../../Assets/Projects/Sommlike.png";
import Buklup from "../../Assets/Projects/Buklup.png";
import IJwork from "../../Assets/Projects/IJwork.png";

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
              imgPath={Buklup}
              isBlog={false}
              title="Buklup.io  "
              description={`Buklup is a kind of taxi app. Where users can create a ride. Similar to any other type of taxi app. After the ride created by the rider from the website. It will be shown to the driver app where he can accept that ride and pick the rider from the specific location. Or else we have an admin panel where admin has the authority to assign a ride to the driver from the admin dashboard panel.
              `}
              demoLink="https://buklup.sworkstaxi.site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IJwork}
              isBlog={false}
              title="IJ-Work"
              description={`IJWork is concept where all the smaller application like cloud, chat, todo and calendar into one application. Support dark mode and arbaic mode as per the client requirment.
              Tech which are used: ReactJS, Typescript, Redux, Html, CSS, Javascripts 
              `}
              demoLink="https://ijwork.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sommlike}
              isBlog={false}
              title="Sommlike"
              description="Sommlike is the wine collection ECommerce website. It’s a site where all the wine collections are available for the users. Where the users can buy those wines after adding to the add to card. Similar to any ecommerce site. We have also added the sommeliers(sellers) where they can provide their collection of wines to the different customers/users. The online transaction we are using a square."
              demoLink="https://sommlike.sworks.website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://user-images.githubusercontent.com/63305945/102266269-371b7280-3f3e-11eb-98bf-414b5748c4d7.png"
              }
              isBlog={false}
              title="Web Dev Pool"
              description="WebDevPool It's a website only for Tech persons(developers community). This web application will be a platform for developers where different developer share their information like education, skills and many more. The application is little similar to LinkedIn but Webdevpool is only related for developer's community.The application was created for recrutiments purpose. So recruiters can visit our application and can visit as many profiles and can select the employee for their company"
              ghLink="https://github.com/aman431/webdevpool"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://raw.githubusercontent.com/aman431/portfillo/master/Images/Java.png"
              }
              isBlog={false}
              title="Hotel Management System"
              description="Hotel Management is one type of application where Hotel worker can done a billing system of costumer not only billing system but it can also see which rooms are available in hotel through this Desktop Application. I have used a Core Java Language to created this.I have tried to provide different functionality like JDBC connectivity to Database which is start to store a data of different user into local database and many more please look a code for more details."
              ghLink="https://github.com/aman431/Hotel-Management-Java"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://raw.githubusercontent.com/aman431/portfillo/master/Images/Python.png"
              }
              isBlog={false}
              title="Ai Jarvis"
              description="jarvis is one type of AI Application where user can interact to the pc through their voice.. So u just passed a command through your voice and our computer execute that command according to keyword it found."
              ghLink="https://github.com/aman431/Python-Jarvis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
