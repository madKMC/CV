import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../images/profile.jpg';

const ProfileCard = () => {
    return (
        <Card fluid>
            <Card.Img variant="top" src={profileImage} className="img-fluid" roundedCircle />
            <Card.Body>
              <Card.Title>Kaylen Cairns</Card.Title>
              <Card.Text>
                Aspiring Software Developer | BSc IT Student at NWU
              </Card.Text>
            </Card.Body>
          </Card>
    )
}

export default ProfileCard;