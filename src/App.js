import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Card, Accordion, Carousel} from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2} className="bg-primary text-white">
          <br />
          <Card fluid>
            <Card.Img variant="top" src="/KaylenImage.jpg" className="img-fluid" roundedCircle/>
            <Card.Body>
              <Card.Title>Kaylen Cairns</Card.Title>
              <Card.Text>
                Aspiring Software Developer | BSc IT Student at NWU
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
        <Col xs={12} md={10} className="bg-secondary text-white">
          <h1>About:</h1>
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Work Experience</Accordion.Header>
              <Accordion.Body>
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
              <Accordion.Header>Education</Accordion.Header>
              <Accordion.Body>
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
              <Accordion.Header>Skills</Accordion.Header>
              <Accordion.Body>
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
  );
}

export default App;
