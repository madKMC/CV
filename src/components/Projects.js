import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const SkillCards = () => {
	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>Project Portfolio</Card.Title>
					<Card.Text>
						Project portfolio website built with React and Tailwind CSS to
						showcase my projects and skills.
					</Card.Text>
					<Button
						as='a'
						href='https://cairnsforge.co.za'
						target='_blank'
						rel='noopener noreferrer'
						variant='primary'
					>
						<FaExternalLinkAlt className='me-2' />
						Website
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SkillCards;
