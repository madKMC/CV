import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../images/profile.jpg';

const ProfileCard = () => {
	return (
		<Card fluid>
			<Card.Img variant='top' src={profileImage} />
			<Card.Body>
				<Card.Title>Kaylen Cairns</Card.Title>
				<Card.Text>
					Aspiring software engineer. I hope to expand my experience in the IT
					industry.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProfileCard;
