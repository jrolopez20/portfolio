import React, { Component } from 'react'
import './App.css';
import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import About from './components/About'
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Work from './components/Work';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData() {
    fetch("/resume.json")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({ resumeData: data });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
        }
      )
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div id="colorlib-page" >
        <div id="container-wrap">
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
          <Sidebar data={this.state.resumeData.main}></Sidebar>
          <div id="colorlib-main">
            <Introduction data={this.state.resumeData.main}></Introduction>
            <About data={this.state.resumeData.main}></About>
            <Skills data={this.state.resumeData.resume}></Skills>
            <Education data={this.state.resumeData.resume}></Education>
            <Experience data={this.state.resumeData.resume}></Experience>
            <Work data={this.state.resumeData.portfolio}></Work>
            <Footer data={this.state.resumeData.main}></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
