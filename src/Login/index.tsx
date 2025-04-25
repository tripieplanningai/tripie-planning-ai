import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    // Here you would typically make an API call to authenticate the user
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
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="login-card">
                <Card.Body className="p-4 p-md-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mb-4"
                  >
                    <h2 className="login-heading">Welcome Back</h2>
                    <p className="text-muted">Sign in to continue planning your perfect trip</p>
                  </motion.div>

                  <div className="social-login mb-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="social-btn google-btn"
                      onClick={handleGoogleLogin}
                    >
                      <i className="fab fa-google fa-lg me-2"></i>
                      Login with Google
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="social-btn facebook-btn"
                      onClick={handleFacebookLogin}
                    >
                      <i className="fab fa-facebook fa-lg me-2"></i>
                      Login with Facebook
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="social-btn apple-btn"
                      onClick={handleAppleLogin}
                    >
                      <i className="fab fa-apple fa-lg me-2"></i>
                      Login with Apple
                    </motion.button>
                  </div>

                  <div className="divider mb-4">
                    <span>or</span>
                  </div>

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your password.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check
                        type="checkbox"
                        label="Remember me"
                        className="text-muted"
                      />
                      <Link to="/forgot-password" className="text-decoration-none">
                        Forgot Password?
                      </Link>
                    </div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary w-100 mb-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign In
                    </motion.button>

                    <div className="text-center">
                      <span className="text-muted">Don't have an account? </span>
                      <Link to="/signup" className="text-decoration-none">
                        Sign Up
                      </Link>
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

export default Login; 