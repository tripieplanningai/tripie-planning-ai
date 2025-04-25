import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface Position {
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
}

const Apply: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const position = location.state?.position as Position;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    github: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { ...formData, position });
    // Redirect to thank you page or show success message
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  if (!position) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>No position selected</h2>
          <Button variant="primary" onClick={() => navigate('/join-team')}>
            Return to Positions
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h1 className="display-4 fw-bold mb-3" style={{ 
          background: "linear-gradient(45deg, #00ff9d, #00b8ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Apply for {position.title}
        </h1>
        <p className="lead text-muted">
          {position.department} • {position.location}
        </p>
      </motion.div>

      <Row className="justify-content-center mb-5">
        <Col lg={8}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h3 className="h5 mb-3">Position Details</h3>
              <p className="mb-3">{position.description}</p>
              <h4 className="h6 mb-2">Requirements:</h4>
              <ul className="list-unstyled mb-0">
                {position.requirements.map((req, i) => (
                  <li key={i} className="mb-2 d-flex align-items-start">
                    <i className="bi bi-dot text-primary me-2 mt-1"></i>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="h5 mb-4">Application Form</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Resume/CV</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                    />
                    <Form.Text className="text-muted">
                      Accepted formats: PDF, DOC, DOCX
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Cover Letter</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      required
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      placeholder="Tell us why you're interested in this position and how your experience aligns with our requirements."
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Portfolio URL</Form.Label>
                    <Form.Control
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://your-portfolio.com"
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>LinkedIn Profile</Form.Label>
                        <Form.Control
                          type="url"
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          placeholder="https://linkedin.com/in/your-profile"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>GitHub Profile</Form.Label>
                        <Form.Control
                          type="url"
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          placeholder="https://github.com/your-username"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                      Submit Application
                    </Button>
                    <Button variant="outline-secondary" onClick={() => navigate(-1)}>
                      Back to Positions
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Apply; 