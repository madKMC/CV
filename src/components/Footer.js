import React from 'react';
import { Container, Row, Col, ListGroup, Nav, Button } from 'react-bootstrap';
import OffCanvasLink from './OffCanvasLink';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-3">
      <Container>
        <Row>
        <Col xs={12} md={4} className="text-white">
          <br/>
          <ListGroup data-bs-theme="dark">
            <ListGroup.Item>
              <strong>Name:</strong><br/>
              Kaylen Morgan Cairns
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <strong>Contact Information:</strong><br/>
              Email: kaylencairns@gmail.com<br/>
              Phone: +27 84 323 7032
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Location:</strong><br/>
              South Africa<br/>
              Gauteng<br/>
              Johannesburg<br/>
            </ListGroup.Item>
          </ListGroup>
          <br/>
        </Col>
        <Col xs={12} md={4} className="text-white">
        <br/>
          <ListGroup data-bs-theme="dark">
            <ListGroup.Item>
              <h1>Links:</h1>
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <strong>GitHub:</strong><br/>
              <Nav>
                <Nav.Link href="https://github.com/madKMC" target="_blank">
                  GitHub Profile
                </Nav.Link>
              </Nav>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>LinkedIn</strong><br/>
              <Nav>
                <Nav.Link href="www.linkedin.com/in/kaylen-cairns-411b8b307" target="_blank">
                  LinkedIn Profile
                </Nav.Link>
              </Nav>
            </ListGroup.Item>
          </ListGroup>
          <br/>
        </Col>
        <Col xs={12} md={4} className="text-white">
          <br/>
          <ListGroup data-bs-theme="dark">
            <ListGroup.Item>
              <h1>Projects:</h1>
              <OffCanvasLink/>
            </ListGroup.Item>
          </ListGroup>
          <br/>
        </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;