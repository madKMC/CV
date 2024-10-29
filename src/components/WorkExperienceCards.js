import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkExperienceCards = () => {
	const EstorilSkills = [
		'Interpersonal skills.',
		'Conflict resolution.',
		'Inventory control.',
		'Merchandising.',
		'Working under pressure (Peak times and holidays).',
        'Teamwork'
	];

	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>Estoril Books Cresta</Card.Title>
					<Card.Text>
						Johannesburg - South Africa <br />
						2017-2017 <br />
						Worked as a sales assistant. <br /> <br />
						<h6>Skills acquired:</h6>
						<ListGroup variant='flush'>
							{EstorilSkills.map((EstorilSkills, index) => (
								<ListGroupItem key={index}>{EstorilSkills}</ListGroupItem>
							))}
						</ListGroup>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default WorkExperienceCards;
