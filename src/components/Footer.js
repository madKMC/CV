import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfoList from './ContactInfoList.js';
import OnlineLinksList from './OnlineLinksList.js';
import '../App.css';

const Footer = () => {
	return (
		<footer className='bg-footer text-white mt-auto py-3'>
			<Container>
				<Row className='justify-content-center'>
					<Col xs={12} md={4} className='text-white'>
						<br />
						<ContactInfoList />
						<br />
					</Col>
					<Col xs={12} md={4} className='text-white'>
						<br />
						<OnlineLinksList />
						<br />
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
