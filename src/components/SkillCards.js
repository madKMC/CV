import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillCards = () => {
	const SkillsLanguages = [
		'React',
		'HTML, CSS, JavaScript',
		'Python',
		'C#',
		'Java',
	];
	const SkillsBackend = [
		'NodeJS with ExpressJS',
		'SQL (Oracle)',
		'NoSQL (MongoDB)',
		'API testing (Postman)',
	];
	const Skills = ['Agile', 'Git', 'Git Merge Conflict Resolution'];

	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>Programming Languages</Card.Title>
					<Card.Text>
						<ListGroup variant='flush'>
							{SkillsLanguages.map((SkillsLanguages, index) => (
								<ListGroupItem key={index}>{SkillsLanguages}</ListGroupItem>
							))}
						</ListGroup>
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Backend and Database</Card.Title>
					<Card.Text>
						<ListGroup variant='flush'>
							{SkillsBackend.map((SkillsBackend, index) => (
								<ListGroupItem key={index}>{SkillsBackend}</ListGroupItem>
							))}
						</ListGroup>
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Other</Card.Title>
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
