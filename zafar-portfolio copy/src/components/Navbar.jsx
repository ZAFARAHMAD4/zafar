import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { MdOutlineDarkMode } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { FaServicestack, FaEnvelope, FaLaptopCode, FaPaintBrush, FaVideo } from "react-icons/fa";
import '../css/Navbar.css'; // Ensure you import the CSS

function CustomNavbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className={`custom-navbar ${darkMode ? 'dark' : 'light'}`} fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          Zafar Ahmad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/">
              <AiFillHome className="me-1" /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              <AiOutlineInfoCircle className="me-1" /> About
            </Nav.Link>

            <NavDropdown
              title={<><FaServicestack className="me-1" /> Services</>}
              id="services-dropdown"
              className="animated-dropdown"
              menuVariant={darkMode ? 'dark' : 'light'}
            >
              <NavDropdown.Item as={NavLink} to="/webdevelopment">
                <FaLaptopCode className="me-2" /> Web Development
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/design">
                <FaPaintBrush className="me-2" /> Graphic Design
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/video">
                <FaVideo className="me-2" /> Video Editing
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contact">
              <FaEnvelope className="me-1" /> Contact
            </Nav.Link>

            <Button
              variant={darkMode ? "light" : "dark"}
              size="sm"
              className="ms-3"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <CiBrightnessUp /> : <MdOutlineDarkMode />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
