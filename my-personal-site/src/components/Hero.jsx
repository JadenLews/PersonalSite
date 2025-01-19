import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <img
          className="hero-image"
          src="your-image.jpg"
          alt="Your Portrait"
        />
        <h1 className="hero-text">Jaden Lewis</h1>
      </section>
      <section className="content-section">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with expertise in React, Python, and
          Django. I love building intuitive and visually appealing applications.
        </p>
      </section>
    </div>
  );
};

export default Hero;