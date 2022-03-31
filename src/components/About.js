import React, { Component } from 'react'

class About extends Component {

  render() {
    if (this.props.data) {
      var fullname = `${this.props.data.firstName} ${this.props.data.lastName}`;
      var description = this.props.data.description;
      var email = this.props.data.email;
      var phone = this.props.data.phone;
    }

    return (
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p><strong>Hi, my name's {fullname}</strong>. {description}.</p>

                    <br/>

                    <h3 className="">Languages</h3>
                    <ul>
                      <li>Spanish (Native)</li>
                      <li>English</li>
                      <li>French</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default About;
