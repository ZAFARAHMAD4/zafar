import React, { useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/WebDevelopment.css';
import { ThemeContext } from '../context/ThemeContext';

// Import images
import logo2 from '../images/weblogo2.png';
import logo1 from '../images/weblogo.png';
import logo3 from '../images/spotify.png';
import logo4 from '../images/chatwithfrend.png';
import logo5 from '../images/epassbook.png';
import logo6 from '../images/claver.png';
import logo8 from '../images/RSKD.png';

function WebDevelopment() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const galleryImages = [
  {
    category: 'Online Examination System Using Blockchain and IPFS ',
    img: logo1,
    description: 'A online examination system most conducting exam online secure and safe Application with Database management.',
    link: 'https://onine-exam.vercel.app/',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Blockchain','IPFS','BOOTSRAP5']
  },
  {
    category: 'eCommerce Websites',
    img: logo2,
    description: 'Create a unique brand product and sale online with responsive websites with most optimization and Free delivery and increase more bussiness products etc.',
    link: 'https://medicalstore-eta.vercel.app/',
    tech: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    category: 'Chat with Friend',
    img: logo4,
    description: 'A real-time chat application using MERN stack with Firebase authentication and Socket.IO for messaging..',
    link: 'https://chatwithfriend.onrender.com/',
    tech: ['MERN Stack', 'Firebass', 'Socket.io', 'DaisyUI','BOOTSRAP5']
  },
  {
    category: 'Spotify Clone',
    img: logo3,
    description: 'A sleek clone of Spotify built using ReactJS with Tailwind CSS. Includes dynamic playlists, audio playback, and responsive design..',
    link: 'https://clonespotify-navy.vercel.app/',
    tech: ['TailWind CSS','React Router','Audio PLayer', 'React']
  },
  {
    category: 'E-Passbook',
    img: logo5,
    description: 'A Laravel-based financial management system that tracks loan spending and lending amounts with secure transaction history.',
    link: 'https://epassbook.vercel.app/',
    tech: ['Laravel','MySql','Bootstrap5','Firebass Authentication' ,'React']
  },
  {
    category: 'Clevar E-Commerce',
    img: logo6,
    description: 'A feature-rich e-commerce platform with product management, order tracking, and secure payment integration.',
    link: 'https://clevar.rf.gd/',
    tech: ['Laravel','MySql','Bootstrap5','Firebass Authentication' ,]
  },
  {
    category: 'RSKD School Website',
    img: logo8,
    description: 'A responsive school website built using Laravel, featuring student management, event updates, and an interactive gallery.',
    link: 'https://rskdbelaparjaunpur.com/?i=1',
    tech: ['Laravel','MySql','PHP','MySql','CSS',]
  },
];

  return (
    <div className={`services-page ${darkMode ? 'dark' : 'light'}`}>
      <Container className="my-5 pt-4">
        <h2 className="text-center mb-4" data-aos="fade-down">Web Development Projects</h2>
        <Row>
          {galleryImages.map((project, idx) => (
            <Col md={4} key={idx} className="mb-4" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <Card className="h-100 service-card">
                <Card.Img variant="top" src={project.img} alt={project.title} className="card-image" />
                <Card.Body>
                  <Card.Title>{project.category}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  
                  <Button
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    Visit Site
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default WebDevelopment;
