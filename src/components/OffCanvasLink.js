import React, { useState } from 'react';
import { Offcanvas, Card, Placeholder} from 'react-bootstrap';

const OffcanvasLink = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="#" onClick={handleShow}>Open Offcanvas</a>

      <Offcanvas show={show} onHide={handleClose} data-bs-theme="dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Projects:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasLink;
