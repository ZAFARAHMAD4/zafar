import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/HeroSection.css';
import zafar from '../images/zafar.png'
function HeroSection() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`hero-section ${darkMode ? 'dark' : 'light'}`}>
      <Container >
        <Row className="justify-content-center mb-5">
          <Col md={8} data-aos="fade-down" className="text-center">
            <h1 className="display-4 fw-bold">Zafar Ahmad</h1>
            <p className="lead">
              Full Stack Developer | Website Seller | Graphic Designer | Video Editor
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} lg={4} data-aos="zoom-in">
            <Card className={`hero-card ${darkMode ? 'dark' : 'light'}`}>
              <Card.Img
                variant="top"
                src={zafar}
                alt="Zafar Ahmad"
                className="hero-image1"
              />
              <Card.Body>
                <Card.Title className="mb-3">👨‍💻 About Me</Card.Title>
                <Card.Text>
                  Passionate developer with experience in creating dynamic full-stack applications, unique branding graphics, and compelling video content. I help brands and businesses elevate their digital presence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
