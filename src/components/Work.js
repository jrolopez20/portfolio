import React, { Component } from 'react'

class Work extends Component {

  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (item) {
        return (
          <div key={item.title} className="col-md-6 " data-animate-effect="fadeInLeft">
            <div className="project" style={{ backgroundImage: `url(images/portfolio/${item.image})` }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="work.html">{item.title}</a></h3>
                  <span><i>{item.category}</i></span>
                  <span>{item.description}</span>
                  <p className="icon">
                    <span><a href={item.url} target="_blank" rel="noopener noreferrer"><i className="icon-eye"></i> Open</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div >
        )
      })
    }

    return (
      <section className="colorlib-work" data-section="work" >
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Recent Work</h2>
            </div>
          </div>
          {/* <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="col-md-12">
              <p className="work-menu">
                <span><a href="#" className="active">Graphic Design</a></span>
                <span><a href="#">Web Design</a></span>
                <span><a href="#">Software</a></span>
                <span><a href="#">Apps</a></span></p>
            </div>
          </div> */}
          <div className="row">
            {projects}
          </div>
        </div>
      </section >
    )
  }
}
export default Work;