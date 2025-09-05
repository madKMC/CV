import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
	return (
		<header className='bg-primary text-white py-4 d-block d-lg-none'>
			<Container>
				<Row className='align-items-center'>
					<Col xs={12} className='text-center text-lg-start'>
						<h1 className='mb-1'>Kaylen Cairns</h1>
						<h5 className='mb-0 text-light'>Software Engineer</h5>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
