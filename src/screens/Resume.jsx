import React from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import myphoto from "../jeet_image.jpg";
function Resume() {
  return (
    <>
      <Container fluid id="resume">
        <h1 className="text-center">Resume</h1>
        <Container>
          <Row>
            <Col xs={9}>
              <h3>Jitendra Narayan Nayak</h3>
              <h6>Bhadrak,Odisha.</h6>
              <h6>Ph :-7008834593</h6>
              <h6>Em:-jitendranayak182@gmail.com</h6>
            </Col>
            <Col xs={3}>
              <Image width={100} height={100} src={myphoto} thumbnail />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center border">CAREER OBJECTIVE</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Looking for a career as a Software Application Developer in an
                organization, which offers abundant opportunity to innovate,
                grow and develop.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center border">EDUCATIONAL QUALIFICATION</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Examination</th>
                    <th>Board / University</th>
                    <th>Year of Passing</th>
                    <th>Marks Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MCA</td>
                    <td>BPUT</td>
                    <td>2020</td>
                    <td>8.82 CGPA</td>
                  </tr>
                  <tr>
                    <td>BCA</td>
                    <td>UTKAL University, Odisha</td>
                    <td>2018</td>
                    <td>75.20%</td>
                  </tr>
                  <tr>
                    <td>12th/+2 SC.</td>
                    <td>CHSE, Odisha</td>
                    <td>2015</td>
                    <td>48.16%</td>
                  </tr>
                  <tr>
                    <td>10th</td>
                    <td>HSC, Odisha</td>
                    <td>2013</td>
                    <td>67.16%</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center border">TECHNICAL SKILLS</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span className="h5">Operating System : </span>Windows,Linux
              </p>
              <p>
                <span className="h5">Programming Language : </span>JAVA (Core
                and Advance), Python 3x, Node JS, Angular, React JS, C, C++.
              </p>
              <p>
                <span className="h5">Databases : </span> My SQL, Oracle 10g.
              </p>
              <p className="h5">Certification: </p>
              <ol>
                <li>
                  Programming in JAVA from NPTEL with 96% and got Elite gold
                  certificate
                </li>
                <li>Angular for beginers 2020 from Udemy</li>
              </ol>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center border">ACADEMIC PROJECTS</h3>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col>
                <h5>1.Contractor Database Management System (CDMS): </h5>
                <p>
                  This is a Web Application and it is developed in SERVLET and
                  JSP as backend. The database is MySQL
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>2.College Election System (CES): </h5>
                <p>
                  This Web application is developed in SERVLET and JSP as
                  backend and Database is Oracle 10g.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>3.Smart Transportation System(STS): </h5>
                <p>
                  This is a web based Application which is developed in Spring
                  Boot and JSP As the backend and MySQL as the Database.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>4.Password Management System(PMS): </h5>
                <p>
                  This is a web application developed in NodeJS/Express JS and
                  Mongo DB as the database and ejs as the template engine.
                </p>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col>
              <h3 className="text-center border">INTERNSHIPS ATTENDED</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                1.REST Web Services using Spring Boot and MySQL from The Sparks
                Foundation (TSF).
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center border">WORK EXPERIENCE:</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                1.Working as Associate Software Engineer in Cavisson System
                since 3rd February 2020 .The role is to develop REST Apis in
                Java.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center border">HOBBIES :</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                My hobbies are Riding Bikes, Listening music, Playing Video
                games, Watching technology related videos.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center border">PERSONAL INFORMATION :</h3>
            </Col>
          </Row>
          <Row>
            <Col className="ml-5">
              <p>Name</p>
              <p>S/O</p>
              <p>Date of Birth</p>
              <p>Gender</p>
              <p>Marital Status</p>
              <p>Languages known</p>
            </Col>
            <Col>
              <p>Jitendra Narayan Nayak</p>
              <p>Harinarayan Nayak</p>
              <p>06 / 01 / 1998</p>
              <p>Male</p>
              <p>Unmarried</p>
              <p>English, Hindi, Odia.</p>
              <p>
                At-Kotasira, PO/PS-Bhandaripokhari, Dist-Bhadrak, Pin-756120,
                State -Odisha, India.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center border">DECLARATION :</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                I do here by declare that all the statements made in this
                application are true, complete and correct to the best of my
                knowledge and belief.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Resume;
