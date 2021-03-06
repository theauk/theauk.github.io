import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <p
                        className="nav-home"
                        alt="Menu"
                        onClick={this.scrollToTop}>Home
            </p>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                About
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                Projects
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="Experience"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                Experience
              </Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/theauk" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/theakjeldsmark/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}