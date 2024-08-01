import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillCards = () => {
    return (
        <div className="text-center">
            <Card>
                <Card.Body>
                <Card.Title>Database Design</Card.Title>
                <Card.Text>
                    I can create well-structured, efficient database schemas.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>C#</Card.Title>
                <Card.Text>
                    My expertise in C# allows me to develop robust and high-performance applications.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Python</Card.Title>
                <Card.Text>
                    I make use of Python for data science and machine learning.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                    I use React to create user interfaces with a focus on a seamless user experiences.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Java</Card.Title>
                <Card.Text>
                    Using Java, I can develop reliable servers.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>HTML, CSS and JavaScript</Card.Title>
                <Card.Text>
                    I create visually appealing and responsive web applications using HTML, CSS, and JavaScript.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Agile</Card.Title>
                <Card.Text>
                    My experience with Agile methodologies ensures that I can effectively collaborate to deliver high-quality software.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SkillCards;