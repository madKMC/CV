import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../images/profile.jpg';
import profileImageMobile from '../images/mobileProfile.jpg';

const ProfileCard = () => {
	return (
		<Card fluid>
			<picture>
				<source media='(max-width: 767px)' srcSet={profileImageMobile} />
				<source media='(min-width: 768px)' srcSet={profileImage} />
				<Card.Img variant='top' className='img-fluid' roundedCircle />
			</picture>
			<Card.Body>
				<Card.Title>Kaylen Cairns</Card.Title>
				<Card.Text>
					Aspiring Software Developer | BSc IT Student at NWU
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProfileCard;
