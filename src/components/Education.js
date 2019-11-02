import React, { Component } from 'react'

class Education extends Component {

  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (item) {
        return (
          <article key={item.degree} className="timeline-entry " data-animate-effect="fadeInLeft">
            <div className="timeline-entry-inner">
              <div className="timeline-icon color-4">
                <i className="icon-study"></i>
              </div>
              <div className="timeline-label">
                <h2><a href="#">{item.degree}</a> <span>{item.graduated}</span>
                  <div><i>{item.school}</i></div>
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
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                {education}
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
export default Education;