import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mission from "../Mission";
import Home from "../Home";
import AboutUs from "../About";
import FAQ from "../FAQ";
import Features from "../Features";
import JoinTeam from "../JoinTeam";
import Apply from "../Apply";
import SignUp from "../SignUp";
import Login from "../Login";
import Header from "../Header";
import { Container } from "react-bootstrap";

const TripiePlanningAI: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 py-4">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/features" element={<Features />} />
              <Route path="/join-team" element={<JoinTeam />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-dark text-light py-5 mt-auto" style={{ background: "linear-gradient(to right, #1a1a1a, #2d2d2d)" }}>
          <Container>
            <div className="row g-4">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <h5 className="fw-bold mb-4" style={{ 
                  background: "linear-gradient(45deg, #00ff9d, #00b8ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>TripiePlanningAI</h5>
                <p className="text-light mb-4">
                  Making travel planning effortless with AI. We're revolutionizing how people plan their trips, making it smarter, faster, and more personalized.
                </p>
                <div className="d-flex gap-3">
                  <button className="text-light text-decoration-none hover-primary bg-transparent border-0">
                    <i className="bi bi-facebook fs-5"></i>
                  </button>
                  <button className="text-light text-decoration-none hover-primary bg-transparent border-0">
                    <i className="bi bi-linkedin fs-5"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="fw-bold mb-4 text-light">Quick Links</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/" className="text-light text-decoration-none hover-primary">Home</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/about" className="text-light text-decoration-none hover-primary">About Us</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/mission" className="text-light text-decoration-none hover-primary">Our Mission</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/features" className="text-light text-decoration-none hover-primary">Features</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="fw-bold mb-4 text-light">Support</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <button onClick={() => scrollToSection('help')} className="text-light text-decoration-none hover-primary bg-transparent border-0 p-0">Help Center</button>
                  </li>
                  <li className="mb-2">
                    <button onClick={() => scrollToSection('contact')} className="text-light text-decoration-none hover-primary bg-transparent border-0 p-0">Contact Us</button>
                  </li>
                  <li className="mb-2">
                    <Link to="/faq" className="text-light text-decoration-none hover-primary">FAQ</Link>
                  </li>
                  <li className="mb-2">
                    <button onClick={() => scrollToSection('privacy')} className="text-light text-decoration-none hover-primary bg-transparent border-0 p-0">Privacy Policy</button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h6 className="fw-bold mb-4 text-light">Newsletter</h6>
                <p className="text-light mb-4">
                  Subscribe to our newsletter for the latest updates and travel planning tips.
                </p>
                <div className="input-group mb-3">
                  <input 
                    type="email" 
                    className="form-control bg-dark text-light border-secondary" 
                    placeholder="Enter your email"
                    style={{ borderColor: '#404040' }}
                  />
                  <button 
                    className="btn btn-primary" 
                    type="button"
                    style={{
                      background: "linear-gradient(45deg, #00ff9d, #00b8ff)",
                      border: "none",
                      padding: "0.5rem 1.5rem"
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-5" style={{ borderColor: '#404040' }} />
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="text-light mb-0">
            &copy; 2025 TripiePlanningAI. All rights reserved.
          </p>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="d-flex justify-content-center justify-content-md-end gap-4">
                  <button onClick={() => scrollToSection('terms')} className="text-light text-decoration-none hover-primary bg-transparent border-0">Terms of Service</button>
                  <button onClick={() => scrollToSection('privacy')} className="text-light text-decoration-none hover-primary bg-transparent border-0">Privacy Policy</button>
                  <button onClick={() => scrollToSection('contact')} className="text-light text-decoration-none hover-primary bg-transparent border-0">Contact</button>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="terms-content text-light">
                  <h5 className="mb-3" id="terms">Terms of Service</h5>
                  <p className="mb-2">By using TripiePlanningAI, you agree to these terms:</p>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">• You are responsible for maintaining the security of your account</li>
                    <li className="mb-2">• We reserve the right to modify or terminate our services at any time</li>
                    <li className="mb-2">• Your use of our service is subject to our Privacy Policy</li>
                    <li className="mb-2">• We collect and process your travel data to provide personalized recommendations</li>
                    <li className="mb-2">• Your data is encrypted and securely stored</li>
                    <li className="mb-2">• We do not share your personal information with third parties without your consent</li>
                    <li className="mb-2">• You can request deletion of your account and associated data at any time</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="privacy-content text-light">
                  <h5 className="mb-3" id="privacy">Privacy Policy</h5>
                  <p className="mb-2">Your privacy is important to us. Here's how we handle your data:</p>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">• We collect information you provide, including travel preferences and itinerary details</li>
                    <li className="mb-2">• We use AI to analyze your preferences and provide personalized travel recommendations</li>
                    <li className="mb-2">• We implement industry-standard security measures to protect your data</li>
                    <li className="mb-2">• We use cookies and similar technologies to improve your experience</li>
                    <li className="mb-2">• You have the right to access, correct, or delete your personal information</li>
                    <li className="mb-2">• We may update this policy periodically to reflect changes in our practices</li>
                    <li className="mb-2">• We comply with international data protection regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </Router>
  );
};

export default TripiePlanningAI;
