import React, { Component } from 'react'

class Experience extends Component {

  render() {
    if (this.props.data) {
      var experience = this.props.data.experience.map(function (item) {
        return (
          <article key={item.id} className="timeline-entry " data-animate-effect="fadeInLeft">
            <div className="timeline-entry-inner">
              <div className="timeline-icon color-1">
                <i className="icon-ribbon2"></i>
              </div>
              <div className="timeline-label">
                <h2>{item.title} <span>{item.years}</span>
                  <div><i>{item.company}</i></div>
                </h2>
                <span></span>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        )
      }).reverse()
    }

    return (
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                {experience}
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Experience;