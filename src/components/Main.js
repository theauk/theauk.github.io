import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                    </div>
                </div>
                <Footer />
            </HashRouter>
        );
    }
}

export default Main;