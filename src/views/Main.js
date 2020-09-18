import React, { Component } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

class Main extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Home />
                <About/>
                <Projects/>
                <Experience/>
                <Footer />
            </div>
        );
    }
}

export default Main;