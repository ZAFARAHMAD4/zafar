import React, { useEffect, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Home.css';
import { ThemeContext } from '../context/ThemeContext';
// import { gd } from "../images/graphicdesigner.jpg";
import gd from '../images/grapgicdesihner.jpg'
import ve from '../images/videoediting.jpeg'
import wd from '../images/webdevelopment.jpg'
function Home() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const portfolioItems = [
    {
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable web applications using React, Node.js, and modern stacks.',
      image: wd,
      delay: 0,
    },
    {
      title: 'Graphic Design',
      description: 'Creating unique logos, banners, and social media designs to visually represent your brand.',
      image: gd,
      delay: 150,
    },
    {
      title: 'Video Editing',
      description: 'Crafting engaging videos, edits, and reels that connect and communicate effectively with your audience.',
      image: ve,
      delay: 300,
    },
  ];

  return (
    <>
      <HeroSection />

      <Container className={`mt-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <Row>
          <Col md={12}>
            <h2 className="text-center section-title" data-aos="fade-up">Welcome to My Portfolio</h2>
            <p className="text-center section-subtitle" data-aos="fade-up">Explore my skills in development, design, and editing.</p>
          </Col>
        </Row>

        <Row className="mt-4">
          {portfolioItems.map((item, index) => (
            <Col md={4} key={index} data-aos="fade-up" data-aos-delay={item.delay}>
              <Card className={`portfolio-card ${darkMode ? 'dark' : 'light'}`}>
                <Card.Img variant="top" src={item.image} className="portfolio-image" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export default Home;
