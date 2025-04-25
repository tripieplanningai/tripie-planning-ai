import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const JoinTeam: React.FC = () => {
  const navigate = useNavigate();
  const positions = [
    {
      title: "Founding AI/ML Engineer",
      department: "Engineering",
      location: "Remote",
      description: "Join our AI team to revolutionize travel planning. As a founding engineer, you'll have the opportunity to shape our AI architecture and make a lasting impact on how people plan their travels.",
      requirements: [
        "Strong background in machine learning and AI",
        "Strong background in Python",
        "Understanding of natural language processing",
        "Experience with recommendation systems",
        "Passion for travel and improving user experiences",
        "Thrive in a fast-paced startup environment",
        "Strong problem-solving skills and entrepreneurial mindset"
      ]
    },
    {
      title: "Founding Frontend Developer",
      department: "Engineering",
      location: "Remote",
      description: "Help us build beautiful and intuitive user interfaces that make travel planning effortless. As a founding frontend developer, you'll have the opportunity to create a seamless user experience from the ground up.",
      requirements: [
        "Proficiency in React and TypeScript",
        "Experience with modern CSS frameworks",
        "Understanding of responsive design",
        "Experience with state management",
        "Passion for creating exceptional user experiences",
        "Experience working in early-stage startups",
        "Strong attention to detail and user-centric mindset"
      ]
    },
    {
      title: "Founding Product Manager",
      department: "Product",
      location: "Remote",
      description: "Lead the development of our travel planning features and user experience. As a founding product manager, you'll help shape our product vision and strategy from day one.",
      requirements: [
        "Experience in product management",
        "Strong analytical and problem-solving skills",
        "Excellent communication abilities",
        "Experience with agile methodologies",
        "Passion for travel and user experience",
        "Experience in early-stage startups",
        "Ability to balance user needs with business goals"
      ]
    }
  ];

  const handleApply = (position: typeof positions[0]) => {
    navigate('/apply', { state: { position } });
  };

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
          Join Our Team
        </h1>
        <p className="lead text-muted">
          Be part of the future of travel planning
        </p>
      </motion.div>

      <Row className="g-4 mb-5">
        {positions.map((position, index) => (
          <Col md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4" style={{ height: 'auto' }}>
                  <div className="d-flex flex-column h-100">
                    <div>
                      <h3 className="h4 mb-2">{position.title}</h3>
                      <p className="text-muted mb-3">
                        {position.department} • {position.location}
                      </p>
                      <p>{position.description}</p>
                    </div>
                    <div className="mt-auto">
                      <h4 className="h6 mb-2">Requirements:</h4>
                      <ul className="list-unstyled mb-4">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start">
                            <i className="bi bi-dot text-primary me-2 mt-1"></i>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="primary" 
                        className="w-100"
                        onClick={() => handleApply(position)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-light p-5 rounded-3"
      >
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 className="h3 fw-bold mb-3">Don't See Your Role?</h2>
            <p className="text-muted mb-0">
              We're always looking for talented individuals to join our team. 
              Send us your resume and tell us how you can contribute to our mission.
            </p>
          </Col>
          <Col lg={6}>
            <Form className="mt-4 mt-lg-0">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Position of Interest" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Tell us about yourself" />
              </Form.Group>
              <Button variant="primary" className="w-100">
                Submit Application
              </Button>
            </Form>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default JoinTeam; 