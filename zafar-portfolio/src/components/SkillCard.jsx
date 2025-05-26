import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/SkillCard.css';

function SkillCard({ title, description, image }) {
  return (
    <Card className="skill-card text-center shadow-sm">
      {image && <Card.Img variant="top" src={image} className="card-image" />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
