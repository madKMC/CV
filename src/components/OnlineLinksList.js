import React from 'react';
import { ListGroup, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OnlineLinksList = () => {
    return (
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
                <Nav.Link href="https://www.linkedin.com/in/kaylen-cairns-411b8b307" target="_blank">
                  LinkedIn Profile
                </Nav.Link>
              </Nav>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default OnlineLinksList;