import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkExperienceCards = () => {
	return (
		<div className='text-center'>
			<Card>
				<Card.Body>
					<Card.Title>Estoril Books Cresta</Card.Title>
					<Card.Text>
						Johannesburg - South Africa <br />
						2017-2017 <br />
						Worked as a sales assistant.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default WorkExperienceCards;
