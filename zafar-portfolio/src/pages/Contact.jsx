import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://zafar-2.onrender.com/api/contact', form);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setSuccess(false);
    }
  };

  return (
    <Container className="my-5 pt-4">
      <Row>
        <Col md={8} className="mx-auto">
          <h2>Contact Me</h2>
          {success === true && <Alert variant="success">Message sent successfully!</Alert>}
          {success === false && <Alert variant="danger">Failed to send message.</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} value={form.message} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
