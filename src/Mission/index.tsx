import "./index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Mission = () => (
  <div className="mission-container py-5">
    <div className="container">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="display-4 fw-bold mb-4">Our Mission</h1>
      </motion.div>

      {/* Main Mission Statement */}
      <div className="row align-items-stretch mb-5">
        <motion.div 
          className="col-lg-6 mb-4 mb-lg-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mission-content p-4 h-100">
            <h2 className="h3 fw-bold mb-4">Transforming Travel Planning</h2>
            <p className="lead">
              At TripiePlanningAI, we're not just revolutionizing the travel industry – we're building the future of effortless, personalized travel planning.
            </p>
            <p className="text-muted">
              Our team is dedicated to transforming the way people experience travel by leveraging cutting-edge AI technology. We aim to make travel planning intuitive, accessible, and uniquely tailored to every individual's needs.
            </p>
          </div>
        </motion.div>
        <motion.div 
          className="col-lg-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mission-image p-4 h-100">
            <div className="feature-icon-large">
              <i className="bi bi-compass-fill display-1 text-primary"></i>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mission Highlights */}
      <div className="row g-4 mb-5">
        <motion.div 
          className="col-md-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="mission-highlight p-4 text-center">
            <div className="highlight-icon mb-3">
              <i className="bi bi-lightning-charge-fill display-4 text-primary"></i>
            </div>
            <h3 className="h5 fw-bold mb-3">Innovation First</h3>
            <p className="text-muted mb-0">
              Leveraging cutting-edge AI technology to revolutionize travel planning
            </p>
          </div>
        </motion.div>
        <motion.div 
          className="col-md-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="mission-highlight p-4 text-center">
            <div className="highlight-icon mb-3">
              <i className="bi bi-people-fill display-4 text-primary"></i>
            </div>
            <h3 className="h5 fw-bold mb-3">User-Centric</h3>
            <p className="text-muted mb-0">
              Creating personalized experiences tailored to individual needs
            </p>
          </div>
        </motion.div>
        <motion.div 
          className="col-md-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="mission-highlight p-4 text-center">
            <div className="highlight-icon mb-3">
              <i className="bi bi-globe display-4 text-primary"></i>
            </div>
            <h3 className="h5 fw-bold mb-3">Global Impact</h3>
            <p className="text-muted mb-0">
              Redefining how the world explores and experiences travel
            </p>
          </div>
        </motion.div>
      </div>

      {/* Join Us Section */}
      <motion.div 
        className="join-us-section text-center rounded-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4">Join Our Mission</h2>
          <p className="lead">
            If you're passionate about innovation and eager to be part of a mission that's changing how millions of people plan their journeys, we want you on our team.
          </p>
          <div className="btn-container">
            <Link to="/join-team" className="btn btn-primary">
              Join Our Team
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Mission;


  