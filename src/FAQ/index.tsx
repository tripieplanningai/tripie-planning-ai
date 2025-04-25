import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const FAQ: React.FC = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5" style={{ 
        background: "linear-gradient(45deg, #00ff9d, #00b8ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        Frequently Asked Questions
      </h1>
      
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is TripiePlanningAI?</Accordion.Header>
          <Accordion.Body>
            TripiePlanningAI is a cutting-edge travel planning platform that leverages advanced artificial intelligence to create personalized travel experiences. Our AI system understands your preferences, travel style, and requirements to generate comprehensive itineraries. We provide smart destination recommendations based on your interests, optimized daily schedules that maximize your time, and budget-conscious planning with cost estimates. Our platform also offers local insights, hidden gems, and weather-optimized activities to ensure you have the best possible travel experience.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How does TripiePlanningAI work?</Accordion.Header>
          <Accordion.Body>
            Our platform uses a sophisticated AI algorithm that considers multiple factors to create your perfect itinerary. We take into account your travel dates and duration, budget constraints and preferences, and your preferred travel style whether it's luxury, budget, or adventure. The system analyzes local weather conditions, seasonal events, popular attractions, and off-the-beaten-path locations. We also consider transportation options, timing, and provide restaurant recommendations based on your dining preferences. The AI then generates a detailed, day-by-day itinerary that balances your interests with practical considerations.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Is my travel data secure?</Accordion.Header>
          <Accordion.Body>
            Yes, we prioritize your data security and privacy. Our platform implements multiple layers of protection including end-to-end encryption for all personal information, secure cloud storage with regular backups, and strict access controls with authentication. We conduct regular security audits and updates, ensure GDPR and data protection compliance, and never share your personal data with third parties. You have complete control over your data and can delete your account at any time.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Can I modify the generated itineraries?</Accordion.Header>
          <Accordion.Body>
            Absolutely! We believe in giving you full control over your travel plans. You can add or remove activities and attractions, adjust timing and duration of activities, modify accommodation preferences, and change transportation options. Our platform allows you to add custom notes and reminders, and you can even share and collaborate with travel companions. Our AI will automatically adjust the rest of your itinerary to accommodate your changes while maintaining optimal timing and logistics.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>What types of trips can I plan?</Accordion.Header>
          <Accordion.Body>
            Our platform is versatile and can handle various types of travel. Whether you're planning a weekend getaway, a business trip with meeting scheduling, a family vacation with kid-friendly activities, or an adventure expedition, we've got you covered. We support cultural and historical tours, luxury travel experiences, budget-conscious backpacking trips, and group travel events. Whether you're planning a solo adventure or a family vacation, our AI adapts to your specific needs and preferences.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>How do I get started?</Accordion.Header>
          <Accordion.Body>
            Getting started with TripiePlanningAI is simple and quick. First, create your free account in less than 2 minutes. Then, tell us about your travel preferences and style, enter your destination and travel dates, and specify your budget and any special requirements. Our AI will generate your personalized itinerary, which you can review and customize as needed. Finally, you can download your itinerary or share it with travel companions. Our intuitive interface and AI assistance make travel planning effortless and enjoyable.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Can I book hotels through TripiePlanningAI?</Accordion.Header>
          <Accordion.Body>
            Yes, you can book hotels directly through our platform! We've partnered with major hotel chains and booking platforms to offer you the best rates and availability. Our AI recommends hotels based on your preferences, budget, and itinerary location. You can compare prices, read reviews, and book accommodations with just a few clicks. We also offer exclusive deals and discounts for our users, and our smart booking system ensures you get the best value for your money.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>How do I book flights with TripiePlanningAI?</Accordion.Header>
          <Accordion.Body>
            Our platform integrates with major airlines and travel agencies to provide you with comprehensive flight booking options. You can search for flights, compare prices across different airlines, and book directly through our system. Our AI helps you find the best flight times and routes that align with your itinerary, taking into account factors like layovers, travel time, and cost. We also provide real-time flight status updates and allow you to manage your bookings all in one place.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ; 