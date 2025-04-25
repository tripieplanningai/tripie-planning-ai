import me from "../assets/me.png";
const AboutUs = () => (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center mb-4">
        <h1 className="display-4 mb-4">About Us</h1>
        <p className="lead text-muted">Meet the team behind TripiePlanningAI</p>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <img 
                className="rounded-circle mb-3" 
                src={me} 
                alt="Hanlin Chen" 
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h3 className="card-title mb-2">Hanlin Chen</h3>
              <h5 className="text-muted mb-4">Co-Founder</h5>
            </div>
            <div className="card-text">
              <p className="mb-4">
                Co-founder of TripiePlanningAI, Hanlin is a passionate
                entrepreneur and travel enthusiast. With a strong background in computer
                science and extensive experience in AI projects, he is dedicated to
                making travel planning easier and more accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
