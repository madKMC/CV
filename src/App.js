import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import DownloadButton from './components/DownloadCVButton';
import ProfileCard from './components/ProfileCard';
import EducationCards from './components/EducationCards';
import WorkExperienceCards from './components/WorkExperienceCards';
import Projects from './components/Projects';

function App() {
	const accordionRef = useRef(null);

	const scrollToAccordion = () => {
		if (accordionRef.current) {
			accordionRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<div className='d-flex flex-column min-vh-100'>
			<Header />
			<Container fluid>
				<Row>
					<Col
						xs={12}
						lg={3}
						className='bg-primary text-white order-2 order-lg-1'
					>
						<br />
						<ProfileCard />
						<br />
						<DownloadButton />
						<br />
					</Col>
					<Col
						xs={12}
						lg={9}
						className='bg-secondary text-white order-1 order-lg-2'
					>
						<h1>About:</h1>
						<div ref={accordionRef}>
							<Accordion
								defaultActiveKey={null}
								flush
								className='rounded border'
							>
								<Accordion.Item eventKey='0'>
									<Accordion.Header>
										<strong>Work Experience</strong>
									</Accordion.Header>
									<Accordion.Body
										className='bg-info'
										onEntered={scrollToAccordion}
									>
										<WorkExperienceCards />
									</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey='1'>
									<Accordion.Header>
										<strong>Education</strong>
									</Accordion.Header>
									<Accordion.Body
										className='bg-info'
										onEntered={scrollToAccordion}
									>
										<EducationCards />
									</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey='2'>
									<Accordion.Header>
										<strong>Projects</strong>
									</Accordion.Header>
									<Accordion.Body
										className='bg-info'
										onEntered={scrollToAccordion}
									>
										<Projects />
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<br />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
