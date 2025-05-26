import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import '../css/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram ,FaFacebook} from 'react-icons/fa';
function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation once on component mount
    setAnimate(true);
  }, []);

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ZAFARAHMAD4', icon: <FaGithub /> },
  // { name: 'LinkedIn', url: 'https://linkedin.com/in/zafar-ahmad', icon: <FaLinkedin /> },
  // { name: 'Twitter', url: 'https://twitter.com/zafar_ahmad', icon: <FaTwitter /> },
  { name: 'Instagram', url: 'https://www.instagram.com/jaunpurgraphics', icon: <FaInstagram /> },
  { name: 'Facebook', url: 'https://www.instagram.com/jaunpurgraphics', icon: <FaFacebook /> },
];
  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'} ${animate ? 'animate' : ''}`}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About</h5>
            <p>
              I am Zafar Ahmad, a passionate Full Stack Developer, Graphic Designer, and Video Editor
              dedicated to building modern and creative digital experiences.
            </p>
          </Col>

          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: zafarahmad8595@gmail.com</p>
            <p>Phone: +91 786 024 8387</p>
            <p>Location: India </p>
            
          </Col>

          <Col md={4}>
            <h5>Follow Me</h5>
            <div className="social-links">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}  {/* ✅ render the React icon element directly */}
                </a>

              ))}
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Zafar Ahmad. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
