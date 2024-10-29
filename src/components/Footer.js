import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffCanvasLink from './OffCanvasLink.js';
import ContactInfoList from './ContactInfoList.js';
import OnlineLinksList from './OnlineLinksList.js';

const Footer = () => {
	return (
		<footer className='bg-dark text-white mt-auto py-3'>
			<Container>
				<Row>
					<Col
						xs={12}
						md={4}
						className='text-white'
					>
						<br />
						<ContactInfoList />
						<br />
					</Col>
					<Col
						xs={12}
						md={4}
						className='text-white'
					>
						<br />
						<OnlineLinksList />
						<br />
					</Col>
					<Col
						xs={12}
						md={4}
						className='text-white'
					>
						<br />
						{/* Creates a link to the OffCanvasLink component, to show projects */}
						<ListGroup data-bs-theme='dark'>
							<ListGroup.Item>
								<h1>Projects:</h1>
								<OffCanvasLink />
							</ListGroup.Item>
						</ListGroup>
						<br />
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;

//Creates a footer for the website that contains three columns.

