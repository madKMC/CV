import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Card, Accordion, Carousel, ListGroup, Nav, Button} from 'react-bootstrap';
import profileImage from './images/profile.jpg';
import Footer from './components/Footer.js';
import DownloadButton from './components/DownloadCVButton.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <Container fluid>
      <Row>
        <Col xs={12} md={2} className="bg-primary text-white">
          <br />
          <Card fluid>
            <Card.Img variant="top" src={profileImage} className="img-fluid" roundedCircle />
            <Card.Body>
              <Card.Title>Kaylen Cairns</Card.Title>
              <Card.Text>
                Aspiring Software Developer | BSc IT Student at NWU
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
            <DownloadButton/>
          <br />
        </Col>
        <Col xs={12} md={10} className="bg-secondary text-white">
          <h1>About:</h1>
          <Accordion defaultActiveKey={['0','1']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header><strong>Work Experience</strong></Accordion.Header>
              <Accordion.Body className="bg-info">
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
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>Education</strong></Accordion.Header>
              <Accordion.Body className="bg-info">
                <Card>
                  <Card.Body>
                    <Card.Title>North-West University</Card.Title>
                    <Card.Text>
                      Bachelor of Science in Information Technology <br />
                      2021-2024 <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Udemy</Card.Title>
                    <Card.Text>
                      100 Days of Code - The Complete Python Pro Bootcamp <br />
                      Dr. Angela Yu <br />
                      2024
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Udemy</Card.Title>
                    <Card.Text>
                      Modern React with Redux <br />
                      Stephen Grider <br />
                      2024
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><strong>Skills</strong></Accordion.Header>
              <Accordion.Body className="bg-info">
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      className="img-fluid"
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                      alt="Image One"
                    />
                    <Carousel.Caption>
                      <h3>Database Design:</h3>
                      <p>Can design a database using primary and freign keys.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img-fluid"
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                      alt="Image Two"
                    />
                    <Carousel.Caption>
                      <h3>Programming Language:</h3>
                      <p>Profficient in using C#.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img-fluid"
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                      alt="Image Three"
                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
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