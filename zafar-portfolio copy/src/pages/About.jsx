import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext'; // optional for dark mode
import { FaDownload, FaArrowDown, FaCertificate } from 'react-icons/fa';

import '../css/About.css';

import fullstackdevelopment from '../images/full-stack-development.png';
import Artofgraphicdesigning from '../images/Art-of-graphic-designing.png';
import Avdeioedting from '../images/vdeioedting.jpg';
import zafarcv from '../resume/ZAFAR CV.pdf';

// Example certificate images
import cert1 from '../certificates/cert1.png';
import cert2 from '../certificates/cert2.png';
import cert3 from '../certificates/cert3.png';
import cert4 from '../certificates/cert4.png';
function About() {
  const { darkMode } = useContext(ThemeContext); // if using theme context
  const [showModal, setShowModal] = useState(false);

  const cardsData = [
    {
      title: 'Full Stack Development',
      text: 'Experienced in React, Node.js, Express, MongoDB, and more.',
      img: fullstackdevelopment,
    },
    {
      title: 'Graphic Design',
      text: 'Creative logos, banners, and branding assets using Adobe tools.',
      img: Artofgraphicdesigning,
    },
    {
      title: 'Video Editing',
      text: 'Video edits, reels, and motion graphics that tell stories.',
      img: Avdeioedting,
    },
  ];

  const certificates = [
    { name: 'MERN Stack Developer', img: cert1 },
    { name: 'Graphic Design Masterclass', img: cert2 },
    { name: 'Advanced Video Editing', img: cert3 },
    { name: 'python', img: cert4 },
  ];
  const resumeLink = zafarcv;
  // const certificatesLink = '/files/ZafarAhmad_Certificates.pdf';

 return (
  <Container className="my-5 pt-4">
    <Row className="mb-4">
      <Col md={12}>
        <h2>About Me</h2>
        <p> I am Zafar Ahmad, a passionate full-stack developer who crafts visually stunning and performance-driven websites, along with professional-grade graphic designs and video edits. I help individuals and businesses bring their ideas to life online.</p>
      </Col>
    </Row>

    <Row>
      {cardsData.map(({ title, text, img }, idx) => (
        <Col md={4} key={idx} className="mb-4">
          <Card className={`h-100 shadow-sm ${darkMode ? 'bg-dark text-light' : ''}`}>
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <Row className="mt-4 justify-content-center">
      <Col md={3} className="d-flex justify-content-center mb-2">
        <Button
          href={zafarcv}
          download
          variant="primary"
          className="d-flex align-items-center"
        >
          <FaDownload className="me-2" />
          Download Resume
        </Button>
      </Col>
      <Col md={3} className="d-flex justify-content-center mb-2">
        <Button
          variant="outline-primary"
          onClick={() => setShowModal(true)}
          className="d-flex align-items-center"
        >
          <FaCertificate className="me-2" />
          View Certificates
        </Button>
      </Col>
    </Row>

    <Row className="mt-3 justify-content-center">
      <Col md={12} className="text-center">
        <a href="#top" className="btn btn-link text-decoration-none">
          <FaArrowDown size={30} />
          <div>Back to Top</div>
        </a>
      </Col>
    </Row>

    {/* Certificate Modal */}
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="lg"
      centered
      className={darkMode ? 'dark-modal' : ''}
    >
      <Modal.Header closeButton>
        <Modal.Title>My Certificates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {certificates.map((cert, idx) => (
            <Col md={4} key={idx} className="mb-3">
              <Card className="h-100 shadow-sm certificate-card">
                <Card.Img variant="top" src={cert.img} alt={cert.name} />
                <Card.Body>
                  <Card.Title className="text-center">{cert.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  </Container>
);
}


export default About;
