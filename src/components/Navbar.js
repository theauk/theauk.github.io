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
                        className="nav-item"
                        alt="Menu"
                        onClick={this.scrollToTop}>Menu
            </p>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About Me
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact Me
              </Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/theauk" target="_blank">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/theakjeldsmark/" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}