import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillCards = () => {
	return (
		<div className='text-center'>
			<Card>
				<Card.Body>
					<Card.Title>Database Design</Card.Title>
					<Card.Text>I can create well-structured database schemas.</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>C#</Card.Title>
					<Card.Text>
						I can make use of C# to create basic applications.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Python</Card.Title>
					<Card.Text>
						I have a basic understanding of python as a programming language.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>React</Card.Title>
					<Card.Text>
						I use React to create user interfaces with a focus on a seamless
						user experiences.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>HTML, CSS and JavaScript</Card.Title>
					<Card.Text>
						I create responsive web applications using HTML, CSS, and
						JavaScript.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Agile</Card.Title>
					<Card.Text>
						I have a basic understanding of Agile methodologies.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Git</Card.Title>
					<Card.Text>
						I can make use of Git for version control and collaboration.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SkillCards;
