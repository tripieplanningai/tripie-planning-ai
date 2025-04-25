import "./home.css";
import homeImage from "../assets/homebackground.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import VideoModal from "./demoVideoModel";

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <motion.div
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90vh",
            width: "100vw",
            position: "relative",
          }}
        >
          <div
            className="container h-100 d-flex align-items-center"
            style={{ paddingLeft: "10%", paddingRight: "10%", width: "100%" }}
          >
            <div className="row">
              <div className="col-lg-8 col-sm-4 text-white">
                <motion.h1
                  className="display-4 fw-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Plan Your Perfect Trip with AI
                </motion.h1>
                <motion.p
                  className="lead mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Experience the future of travel planning with our intelligent
                  AI system
                </motion.p>
                <motion.div
                  className="d-flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.button
                    className={`btn btn-primary ${
                      isMobile ? "px-2 py-1" : "px-4 py-2"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </motion.button>

                  <motion.button
                    className={`btn btn-outline-light ${
                      isMobile ? "px-2 py-1" : "px-4 py-2"
                    }`}
                    style={{"zIndex":"2"}}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setModalOpen(true)}
                  >
                    Watch Demo
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <VideoModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      {/* Features Section */}
      <div className="features-section py-5">
        <div className="container">
          <motion.div
            className="row text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-4">
                Why Choose TripiePlanningAI?
              </h2>
              <p className="lead text-muted">
                Our advanced AI system revolutionizes travel planning with
                intelligent features that make your journey planning effortless
                and enjoyable.
              </p>
            </div>
          </motion.div>
          <div className="row g-4">
            {[
              {
                icon: "bi-geo-alt-fill",
                title: "Smart Location Planning",
                description:
                  "Intelligent route optimization and location suggestions based on your preferences",
              },
              {
                icon: "bi-calendar-check",
                title: "Personalized Itineraries",
                description:
                  "Custom travel plans tailored to your interests and travel style",
              },
              {
                icon: "bi-lightning-charge-fill",
                title: "Instant Recommendations",
                description:
                  "Get real-time suggestions for activities, restaurants, and attractions",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="feature-card p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="feature-icon mb-4">
                    <i
                      className={`bi ${feature.icon} display-4 text-primary`}
                    ></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section py-5 bg-light rounded-3">
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3">
                Ready to Transform Your Travel Planning?
              </h2>
              <p className="lead text-muted mb-0">
                Join thousands of travelers who are already experiencing the
                future of trip planning
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <motion.button
                className="btn btn-primary px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
