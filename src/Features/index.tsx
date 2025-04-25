import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Features: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/signup');
  };
  
  const features = [
    {
      icon: "bi-robot",
      title: "AI-Powered Planning",
      description: "Our advanced AI algorithm creates personalized travel itineraries based on your preferences, budget, and travel style. Get smart recommendations that adapt to your needs.",
      gradient: "linear-gradient(45deg, #00ff9d, #00b8ff)",
      delay: 0.1
    },
    {
      icon: "bi-calendar-check",
      title: "Smart Scheduling",
      description: "Optimize your travel time with intelligent scheduling that considers weather, opening hours, and travel distances. Get the most out of every day of your trip.",
      gradient: "linear-gradient(45deg, #ff6b6b, #ff8e8e)",
      delay: 0.2
    },
    {
      icon: "bi-wallet2",
      title: "Budget Management",
      description: "Track and manage your travel budget with our smart cost estimation tools. Get real-time updates on expenses and find the best deals for your money.",
      gradient: "linear-gradient(45deg, #4facfe, #00f2fe)",
      delay: 0.3
    },
    {
      icon: "bi-geo-alt",
      title: "Local Insights",
      description: "Discover hidden gems and local favorites with our curated recommendations. Get insider tips on restaurants, attractions, and experiences.",
      gradient: "linear-gradient(45deg, #fa709a, #fee140)",
      delay: 0.4
    },
    {
      icon: "bi-airplane",
      title: "Flight Booking",
      description: "Search and compare flights from multiple airlines to find the best deals. Book your flights directly through our platform with real-time availability and competitive prices.",
      gradient: "linear-gradient(45deg, #43e97b, #38f9d7)",
      delay: 0.5
    },
    {
      icon: "bi-building",
      title: "Hotel Booking",
      description: "Find and book accommodations that match your preferences and budget. Access exclusive hotel deals and read verified reviews from real travelers.",
      gradient: "linear-gradient(45deg, #fa709a, #fee140)",
      delay: 0.6
    }
  ];

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
          Our Features
        </h1>
        <p className="lead text-muted">
          Discover how we make your travel planning experience seamless and enjoyable
        </p>
      </motion.div>

      <Row className="g-4">
        {features.map((feature, index) => (
          <Col md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <Card 
                className="h-100 border-0 shadow-sm hover-card"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
                }}
              >
                <Card.Body className="p-5">
                  <motion.div 
                    className="text-primary mb-4"
                    style={{
                      background: feature.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "3rem"
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className={`bi ${feature.icon}`}></i>
                  </motion.div>
                  <Card.Title className="h4 mb-3 fw-bold">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-center mt-5"
      >
        <h2 className="h3 fw-bold mb-4">Ready to Transform Your Travel Planning?</h2>
        <p className="lead text-muted mb-4">
          Experience the future of travel planning with our intelligent AI system
        </p>
        <motion.button
          className="btn btn-primary btn-lg px-4 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </Container>
  );
};

export default Features; 