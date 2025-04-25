import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Here you would typically make an API call to register the user
    console.log('Form submitted:', formData);
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // Implement Google login
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login
    console.log('Facebook login clicked');
  };

  const handleAppleLogin = () => {
    // Implement Apple login
    console.log('Apple login clicked');
  };

  return (
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="signup-card">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="text-center mb-4">Create Account</h2>
                  
                  <div className="social-login">
                    <Button
                      variant="outline-danger"
                      className="social-btn w-100"
                      onClick={handleGoogleLogin}
                    >
                      <i className="fab fa-google fa-lg"></i>
                      Continue with Google
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="social-btn w-100"
                      onClick={handleFacebookLogin}
                    >
                      <i className="fab fa-facebook fa-lg"></i>
                      Continue with Facebook
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="social-btn w-100"
                      onClick={handleAppleLogin}
                    >
                      <i className="fab fa-apple fa-lg"></i>
                      Continue with Apple
                    </Button>
                  </div>

                  <div className="text-center mb-4">
                    <span className="divider-text">or sign up with email</span>
                  </div>

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Create a password"
                        minLength={8}
                      />
                      <Form.Control.Feedback type="invalid">
                        Password must be at least 8 characters.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Confirm your password"
                      />
                      <Form.Control.Feedback type="invalid">
                        Passwords must match.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 py-3 mb-3"
                      >
                        Create Account
                      </Button>
                    </motion.div>

                    <div className="text-center">
                      <p className="mb-0">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary">Log in</Link>
                      </p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp; 