import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EducationCards = () => {
    return (
        <div className="text-center">
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
        </div>
    )
}

export default EducationCards;