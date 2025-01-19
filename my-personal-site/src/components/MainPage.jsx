import React from "react";
import { Parallax } from "react-parallax";
import "./MainPage.css";
import heroImage from "./mount.webp";

const MainPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Parallax
        bgImage={heroImage}
        bgImageAlt="Hero Background"
        strength={300}
      >
        <div className="hero-content">
          <h1 className="hero-text">Welcome to My Portfolio</h1>
        </div>
      </Parallax>

      {/* Content Sections */}
      <section id="about" className="content-section">
        <h2>About Me</h2>
        <p>I am a passionate developer with expertise in React, Python, and Django.</p>
      </section>

      <section id="projects" className="content-section">
        <h2>Projects</h2>
        <p>Check out my amazing projects, built with cutting-edge technology.</p>
      </section>

      <section id="resume" className="content-section">
        <h2>Resume</h2>
        <p>Download my resume to see my experience and skills.</p>
      </section>

      <section id="contact" className="content-section">
        <h2>Contact</h2>
        <p>Feel free to reach out to me for collaboration or opportunities!</p>
      </section>
    </div>
  );
};

export default MainPage;