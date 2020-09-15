import React, { Component } from "react";
//import {
//Route,
//NavLink,
//  HashRouter
//} from "react-router-dom";
//import Home from "./Home";
//import About from "./About";
//import Projects from "./Projects";
import Footer from "./Footer";
import Section from "./Section";
import Navbar from "./Navbar";

class Main extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Section
                    title="Thea"

                    dark={true}
                    id="section1"
                />
                <Section
                    title="About Me"

                    dark={false}
                    id="section2"
                />
                <Section
                    title="Projects"

                    dark={true}
                    id="section3"
                />
                <Section
                    title="Contact Me"

                    dark={false}
                    id="section4"
                />
                <Footer />
            </div>
        );
    }
}

export default Main;