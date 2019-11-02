import React, { Component } from 'react'

class Skills extends Component {

  render() {
    if (this.props.data) {
      var skillMessage = this.props.data.skillmessage
      var skills = this.props.data.skills.map(function (skill) {
        return (
          <div key={skill.name} className="col-md-6" data-animate-effect="fadeInLeft">
            <div className="progress-wrap">
              <h3>{skill.name}</h3>
              <div className="progress">
                <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100" style={{ width: `${skill.level}%` }}>
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          </div >
        )
      })
    }

    return (
      <section className="colorlib-skills" data-section="skills" >
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Specialty</span>
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <p>{skillMessage}.</p>
            </div>
            {skills}
          </div>
        </div>
      </section >
    )
  }
}
export default Skills;