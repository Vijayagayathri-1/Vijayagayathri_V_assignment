import './heroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Your Event, Perfected.</h1>
        <p className="hero-subtitle">Discover the best DJs, caterers, and decorators for your special day.</p>
        <a href="#services-grid" className="hero-btn">Explore Services</a>
      </div>
    </div>
  );
};

export default HeroSection;