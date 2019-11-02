import React, { Component } from 'react'

class Introduction extends Component {

  render() {
    if (this.props.data) {
      var fullname = this.props.data.firstName;
    }

    return (
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Hi! <br />I'm {fullname}</h1>
                        <h2>another guy who realy enjoy his profession</h2>
                        <nav id="" role="navigation">
                          <div id="navbar">
                            <a href="#" data-nav-section="about" className="btn btn-primary btn-learn">
                              View more <i className="icon-arrow-down3"></i>
                            </a>
                          </div>
                        </nav>
                        {/* <a href="#" data-nav-section="about" className="btn btn-primary btn-learn">
                            View more <i className="icon-arrow-down3"></i>
                          </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
export default Introduction;