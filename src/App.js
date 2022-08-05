import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar';
import Interest from './components/interest';
import Internships from './components/internships';
import Footer from './components/footer';
import Projects from './components/projects';
import Skills from './components/skills';
import Introduction from './components/introduction';
import Education from './components/education';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
      <NavBar />
      <main>
      <Introduction />
      <Education />
      <Internships />
      <Projects />
      <Skills />
      <Interest />
      </main>
      <Footer />
      </React.Fragment>
    );
  }
}
 
export default App;

