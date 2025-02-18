import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import "./MainPage.css";
import heroImage from "./mount.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MainPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".content-section, .timeline-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Unobserve once it fades in
          }
        });
      },
      { threshold: 0.2 } // Adjust this if needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
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
                <span className="info-title">AGE:</span> 21 Years
              </li>
              <li>
                <span className="info-title">HOMETOWN:</span> Deer Isle, Maine
              </li>
            </ul>

            {/* Social Links (Outside of the UL) sjfksfks jfk sdkfjskdjfksd
  skfskfjsdkfjskfjksdjfksdjfksdfksdjkfsdjkfjsdkfjsdkf
  sfksdjfksdjfkdsjfkjsdkfjsdkfjdsf*/}
            <div className="social-links">
              <a
                href="https://github.com/JadenLews"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("lewisjaden19@gmail.com");
                  alert("Email copied to clipboard: lewisjaden19@gmail.com");
                }}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="about-right">
            <p>
              I’m a student at Clark University, working toward a B.S. in
              Computer Science and Data Science, with a track in Mathematics.
              I’ve always enjoyed learning and building things, whether it’s
              developing something completely new for a class or working on
              personal projects to further improve my skills. Through that, I’ve
              done a lot with full-stack development and used a wide range of
              tools and frameworks. I’ve worked with cloud platforms, version
              control systems like Git, and Docker for compatibility across
              environments, and other technologies you’ll find on my resume. I
              also work as a Peer Learning Assistant, helping students with
              their code and better understand programming concepts, which has
              made me more comfortable explaining complex ideas and working with
              others. Recently, I’ve gotten more interested in AI and
              data-driven applications, and I’m planning to continue my
              education with a Master’s in Applied Artificial Intelligence at
              Clark. I’m always looking to pick up new technologies and push
              myself with challenging projects, especially ones that get me
              working with something new. There’s always more to learn, which
              keeps me excited about this field.
            </p>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="projects" className="content-section fade">
        <h2 className="section-title">Projects</h2>
        <div className="timeline projects-timeline">
          <div className="timeline-line"></div>

          <div className="timeline-item fade">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Stock Portfolio App</h3>
              <p>
                A web-based stock tracking app using Django, React, and
                financial APIs.
              </p>
              <div className="skills-list">
                <span className="skill">Django</span>
                <span className="skill">React</span>
                <span className="skill">Financial APIs</span>
                <span className="skill">Bootstrap</span>
              </div>
              <span className="date">2024</span>
            </div>
          </div>

          <div className="timeline-item fade">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>P2P Payment System</h3>
              <p>
                Developed an offline peer-to-peer digital payment system using
                cryptography.
              </p>
              <div className="skills-list">
                <span className="skill">Python</span>
                <span className="skill">Cryptography</span>
                <span className="skill">Networking</span>
              </div>
              <span className="date">2023</span>
            </div>
          </div>

          <div className="timeline-item fade">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2D Pool Simulator</h3>
              <p>
                A physics-based 2D pool game built in Processing for realistic
                ball collisions.
              </p>
              <div className="skills-list">
                <span className="skill">Java</span>
                <span className="skill">Processing</span>
                <span className="skill">Physics Simulation</span>
              </div>
              <span className="date">2022</span>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="content-section fade">
        <h2 className="section-title">Resume</h2>
        <div className="timeline resume-timeline">
          <div className="timeline-line"></div>

          {/* Experience 1 */}
          <div className="timeline-item fade">
            <div className="timeline-content">
              <h3>Clark University</h3>
              <p>B.S. in Computer Science, Data Science, and Mathematics</p>
              <div className="skills-list">
                <span className="skill">Software Engineering</span>
                <span className="skill">Data Science</span>
                <span className="skill">Mathematics</span>
              </div>
              <span className="date">2022 - Present</span>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* Experience 2 */}
          <div className="timeline-item fade">
            <div className="timeline-content">
              <h3>Peer Learning Assistant</h3>
              <p>Assisted students in Accelerated Introduction to Computing</p>
              <div className="skills-list">
                <span className="skill">Teaching</span>
                <span className="skill">Python</span>
                <span className="skill">Debugging</span>
              </div>
              <span className="date">2023 - Present</span>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* Experience 3 */}
          <div className="timeline-item fade">
            <div className="timeline-content">
              <h3>Cyber Underwriting Intern</h3>
              <p>
                Internship at Hanover Insurance Group, focused on cyber risk.
              </p>
              <div className="skills-list">
                <span className="skill">Cybersecurity</span>
                <span className="skill">Data Analysis</span>
              </div>
              <span className="date">Summer 2025</span>
            </div>
            <div className="timeline-dot"></div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="contact" className="content-section fade contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          Feel free to reach out for collaboration, opportunities, or just to
          say hi!
        </p>

        <div className="contact-container">
          {/* Contact Card */}
          <div className="contact-card">
            <h3>Let's Connect</h3>
            <p>
              Email:{" "}
              <a href="mailto:lewisjaden19@gmail.com">lewisjaden19@gmail.com</a>
            </p>
            <p>Location: Worcester, MA</p>

            <div className="social-links2">
              <a
                href="https://github.com/JadenLews"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("lewisjaden19@gmail.com");
                  alert("Email copied to clipboard: lewisjaden19@gmail.com");
                }}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.target);

                try {
                  const response = await fetch(
                    "https://formspree.io/f/xzzdkkgo",
                    {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    }
                  );

                  if (response.ok) {
                    alert("Message sent successfully!");
                    e.target.reset();
                  } else {
                    alert("Oops! Something went wrong. Please try again.");
                  }
                } catch (error) {
                  alert("Failed to send. Check your connection and try again.");
                }
              }}
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
