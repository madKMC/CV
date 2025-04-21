import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EducationCards = () => {
	const SkillsNWU = [
		'Structured Programming',
		'Systems Analysis and Design',
		'Advanced Databases',
		'Apps and Advanced User Interface Programming',
		'IT Developments',
		'Operating Systems',
		'Computer Networks',
		'Object Orientated Programming',
	];

	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>North-West University</Card.Title>
					<Card.Text>
						Bachelor of Science in Information Technology <br />
						2021-2024 <br /> <br />
						<h6>Skills acquired:</h6>
						<ListGroup variant='flush'>
							{SkillsNWU.map((SkillsNWU, index) => (
								<ListGroupItem key={index}>{SkillsNWU}</ListGroupItem>
							))}
						</ListGroup>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default EducationCards;

