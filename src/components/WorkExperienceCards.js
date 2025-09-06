import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkExperienceCards = () => {
	const EstorilSkills = [
		'Interpersonal skills',
		'Conflict resolution',
		'Inventory control',
		'Merchandising',
		'Working under pressure (Peak times and holidays)',
		'Teamwork',
	];
	const FreeLanceSkills = [
		"Psychologist's Booking System - A booking system for a psychologist to manage appointments and allow for further reach in clients. Built with Vite, React, Javascript, Tailwindcss and using the Google Calendar API.",
	];

	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>Estoril Books Cresta</Card.Title>
					<Card.Text>
						Johannesburg - South Africa <br />
						Mar 2017 - Dec 2017 <br />
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
			<Card>
				<Card.Body>
					<Card.Title>Free Lancing</Card.Title>
					<Card.Text>
						Mar 2025 - Current <br /> <br />
						<h6>Projects worked on:</h6>
						<ListGroup variant='flush'>
							{FreeLanceSkills.map((FreeLanceSkills, index) => (
								<ListGroupItem key={index}>{FreeLanceSkills}</ListGroupItem>
							))}
						</ListGroup>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default WorkExperienceCards;
