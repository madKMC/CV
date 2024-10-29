import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillCards = () => {
	const Skills = [
		'Database design',
		'C#',
		'Python',
		'React',
		'Java',
		'HTML, CSS, JavaScript',
		'Agile',
		'Git',
		'Git Merge Conflict Resolution',
		'API testing (Postman)',
		'MongoDB',
		'SQL',
	];

	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Text>
						<ListGroup variant='flush'>
							{Skills.map((Skills, index) => (
								<ListGroupItem key={index}>{Skills}</ListGroupItem>
							))}
						</ListGroup>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SkillCards;
