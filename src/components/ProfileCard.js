import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import profileImage from '../images/profile.jpg';

const ProfileCard = () => {
	return (
		<Card className='profile-card'>
			<Card.Img variant='top' src={profileImage} />
			<Card.Body>
				<Card.Title>Kaylen Cairns</Card.Title>
				<Card.Text>
					Software Engineer. Aspiring Full-Stack Developer. Passionate about creating efficient and scalable web applications.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProfileCard;
