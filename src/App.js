import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Accordion } from 'react-bootstrap';
import Footer from './components/Footer.js';
import DownloadButton from './components/DownloadCVButton.js';
import ProfileCard from './components/ProfileCard.js';
import EducationCards from './components/EducationCards.js';
import WorkExperienceCards from './components/WorkExperienceCards.js';
import SkillCards from './components/SkillCards.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid>
        <Row>
          <Col xs={12} md={2} className="bg-primary text-white">
            <br />
            {/* Calling a script to show a profile image and description */}
              <ProfileCard />
            <br />
            {/* Calling a script of a button that would call a button to download a pdf of my cv */}
              <DownloadButton/>
            <br />
          </Col>
          <Col xs={12} md={10} className="bg-secondary text-white">
            <h1>About:</h1>
            <Accordion defaultActiveKey={['0','1']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header><strong>Work Experience</strong></Accordion.Header>
                <Accordion.Body className="bg-info">
                  {/* Calls a script to show cards containing information of work experience */}
                  <WorkExperienceCards/>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><strong>Education</strong></Accordion.Header>
                <Accordion.Body className="bg-info">
                  {/* Calls a script to show cards containing information of education */}
                  <EducationCards/>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><strong>Skills</strong></Accordion.Header>
                <Accordion.Body className="bg-info">
                  {/* Calls for cards that show the skills possessed */}
                  <SkillCards/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <br />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
