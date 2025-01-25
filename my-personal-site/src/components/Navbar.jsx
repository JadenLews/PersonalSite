import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight); // Toggle scrolled state
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
// Fix dropdown for mobile
  return (
    <nav
      className={`navigation container-sm" ${
        scrolled ? "navigation-scrolled" : "navigation-transparent"
      }`}
    >
      <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
  <div class="container">
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel">Aperture</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav flex-grow-1 justify-content-between">
        <li class="nav-item dropdown">
          {/* About Section */}
          <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="about"
                    smooth={true}
                    duration={500}
                    role="button"
                    aria-expanded="false"
                  >
                    About
                  </Link>
                </li>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
        <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="projects"
                    smooth={true}
                    duration={500}
                    role="button"
                    aria-expanded="false"
                  >
                    Projects
                  </Link>
                </li>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
        <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="resume"
                    smooth={true}
                    duration={500}
                    role="button"
                    aria-expanded="false"
                  >
                    Experience
                  </Link>
                </li>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="contact"
                    smooth={true}
                    duration={500}
                    role="button"
                    aria-expanded="false"
                  >
                    Contact
                  </Link>
                </li>
        </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </nav>
  );
};

export default Navbar;