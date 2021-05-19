import './app.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import ErrorPage from './components/error_page'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Skills from './components/skills'
import Experience from './components/experience'
import Projects from './components/projects'
function App() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/skills" component={Skills} />
                        <Route exact path="/experience" component={Experience} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="*" component={ErrorPage} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    );
}
export default App;
