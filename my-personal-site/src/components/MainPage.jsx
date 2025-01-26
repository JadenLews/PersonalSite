import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import "./MainPage.css";
import heroImage from "./mount.jpg";

const MainPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".content-section"); // Select sections

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Fading in: ${entry.target.id}`); // Debugging
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Trigger animation only once
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sections.forEach((section) => observer.observe(section)); // Observe each section
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <Parallax
        className="parallax-wrapper"
        bgImage={heroImage}
        bgImageAlt="Hero Background"
        strength={300}
      >
        <div className="hero-content nametitle">
          <h1 className="hero-text">Hey, I'm Jaden!</h1>
        </div>
        <div className="hero-content abouttitle">
          <p className="hero-paragraph">This is quick info about me</p>
        </div>
      </Parallax>

      {/* About Section */}
      <section id="about" className="content-section fade">
        <div className="about-container">
          <div className="about-left">
            <ul className="info-list">
              <li>
                <span className="info-title">NAME:</span> Jaden Lewis
              </li>
              <li>
                <span className="info-title">PRONOUNS:</span> He/Him
              </li>
              <li>
                <span className="info-title">SCHOOL:</span> Clark University
              </li>
              <li>
                <span className="info-title">AGE:</span> 20 Years
              </li>
              <li>
                <span className="info-title">HOMETOWN:</span> Deer Isle, Maine
              </li>
            </ul>
          </div>
          <div className="about-right">
            <p>
              I am a passionate developer with expertise in React, Python, and Django.
              I love creating intuitive and visually appealing applications. At Clark University,
              I’ve been deeply involved in computer science, including being a Peer Learning Assistant
              and working on numerous projects.
            </p>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="projects" className="content-section fade">
        <h2>Projects</h2>
        <p>Check out my amazing projects, built with cutting-edge technology.</p>
      </section>

      <section id="resume" className="content-section fade">
        <h2>Resume</h2>
        <p>Download my resume to see my experience and skills.</p>
      </section>

      <section id="contact" className="content-section fade">
        <h2>Contact</h2>
        <p>Feel free to reach out to me for collaboration or opportunities!</p>
      </section>
    </div>
  );
};

export default MainPage;