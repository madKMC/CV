import React from 'react';
import { ListGroup, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const OnlineLinksList = () => {
	return (
		<ListGroup>
			<ListGroup.Item className='bg-listgroup-odd text-white'>
				<h1>Links:</h1>
			</ListGroup.Item>
			<ListGroup.Item className='bg-listgroup-even text-white'>
				<strong>GitHub:</strong>
				<br />
				<Nav>
					<Nav.Link href='https://github.com/madKMC' target='_blank'>
						GitHub Profile
					</Nav.Link>
				</Nav>
			</ListGroup.Item>
			<ListGroup.Item className='bg-listgroup-odd text-white'>
				<strong>LinkedIn</strong>
				<br />
				<Nav>
					<Nav.Link
						href='www.linkedin.com/in/kaylen-cairns-411b8b307'
						target='_blank'
					>
						LinkedIn Profile
					</Nav.Link>
				</Nav>
			</ListGroup.Item>
		</ListGroup>
	);
};

export default OnlineLinksList;
