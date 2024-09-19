import React from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactInfoList = () => {
	return (
		<ListGroup data-bs-theme='dark'>
			<ListGroup.Item>
				<strong>Name:</strong>
				<br />
				Kaylen Morgan Cairns
			</ListGroup.Item>
			<ListGroup.Item variant='dark'>
				<strong>Contact Information:</strong>
				<br />
				Email: kaylencairns@gmail.com
				<br />
				Phone: +27 84 323 7032
			</ListGroup.Item>
			<ListGroup.Item>
				<strong>Location:</strong>
				<br />
				South Africa
				<br />
				Gauteng
				<br />
				Johannesburg
				<br />
			</ListGroup.Item>
		</ListGroup>
	);
};

export default ContactInfoList;
