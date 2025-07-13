import React, { useState, useEffect } from "react";
import "./About.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
    heading: "NextGen Reality Estate",
    caption: "Empowering Land Investments with Trust & Transparency",
  },
  
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
    heading: "Build Your Dream",
    caption: "Residential, Commercial & Investment Opportunities",
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section">
      {/* Slideshow */}
      <div className="about-slideshow">
        <img
          src={slides[currentSlide].image}
          alt="About Slide"
          className="slide-img"
        />
        <div className="about-overlay">
          <h1>{slides[currentSlide].heading}</h1>
          <p>{slides[currentSlide].caption}</p>
        </div>
      </div>

      {/* Keep your existing content below */}
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          At <strong>NextGen Reality Estate</strong>, we believe land is more than just a space —
          it's your future...
        </p>

        <h2>Our Mission</h2>
        <p>We aim to redefine the real estate experience...</p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ 100% Verified Clear-Title Plots</li>
          <li>✅ Strategic Locations across Nagpur & Maharashtra</li>
          <li>✅ Transparent Process — No Hidden Charges</li>
          <li>✅ Trusted by 1000+ Happy Clients</li>
        </ul>

        <div className="about-gallery">
          <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" alt="Investment Land" />
          <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80" alt="Location View" />
          <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=80" alt="Flat Land" />
        </div>
      </div>
    </section>
  );
};

export default About;
