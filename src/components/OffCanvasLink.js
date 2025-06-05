import React, { useState } from 'react';
import { Offcanvas, Card, Placeholder, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import comingSoonImage from '../images/ComingSoon.jpg';
import pomodoroTimerImage from '../images/PomodoroTimer.jpg';

const OffcanvasLink = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button
				onClick={handleShow}
				style={{
					textDecoration: 'none',
					background: 'none',
					border: 'none',
					padding: 0,
					cursor: 'pointer',
				}}
			>
				Open Projects
			</button>

			<Offcanvas show={show} onHide={handleClose} data-bs-theme='dark'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Projects:</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant='top' src={pomodoroTimerImage} />
						<Card.Body>
							<Placeholder as={Card.Title} animation='glow'>
								Pomodoro Timer
							</Placeholder>
							<Placeholder as={Card.Text} animation='glow'>
								Timer for studying or working, based on the Pomodoro Technique.
								<br />
								Using React, Typescript and TailwindCSS.
								<br />
								Assistance from bolt.new
							</Placeholder>
							<Button
								variant='primary'
								xs={6}
								href='https://frabjous-hummingbird-0ae044.netlify.app'
							>
								Live Demo
							</Button>
							<br />
							<br />
							<Button
								variant='primary'
								xs={6}
								href='https://frabjous-hummingbird-0ae044.netlify.app'
							>
								Github Repo
							</Button>
						</Card.Body>
					</Card>
					<br />
					<Card style={{ width: '18rem' }}>
						<Card.Img variant='top' src={comingSoonImage} />
						<Card.Body>
							<Placeholder as={Card.Title} animation='glow'>
								Coming Soon
							</Placeholder>
							<Placeholder as={Card.Text} animation='glow'>
								<Placeholder xs={7} /> <Placeholder xs={4} />{' '}
								<Placeholder xs={4} /> <Placeholder xs={6} />{' '}
								<Placeholder xs={8} />
							</Placeholder>
							<Placeholder.Button variant='primary' xs={6} />
						</Card.Body>
					</Card>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default OffcanvasLink;
