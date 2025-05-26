import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from '../components/SkillCard';

function Services() {
  const services = [
    { title: 'Full Stack Development', description: 'MERN stack, REST APIs, and scalable web apps.' },
    { title: 'Website Selling', description: 'Custom websites for personal, business, and ecommerce use.' },
    { title: 'Graphic Design', description: 'Logos, banners, posters, and more.' },
    { title: 'Video Editing', description: 'Professional reels, YouTube videos, and social content.' },
  ];

  return (
    <Container className="my-5 pt-4">
      <h2 className="mb-4">My Services</h2>
      <Row>
        {services.map((s, idx) => (
          <Col md={6} lg={4} key={idx}>
            <SkillCard title={s.title} description={s.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
