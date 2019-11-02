import React, { Component } from 'react';

class Sidebar extends Component {

  render() {
    if (this.props.data) {
      var name = this.props.data.firstName;
      var profilePic = this.props.data.image;
      var occupation = this.props.data.occupation;
      var social = this.props.data.social.map(function (item) {
        return (
          <li key={item.name}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <i className={item.className}></i>
            </a>
          </li>
        )
      })
    }

    return (
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: `url(images/${profilePic})` }}>
          </div>
          <h1 id="colorlib-logo"><a href="index.html">Javier Rodriguez</a></h1>
          <span className="position">{occupation}</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active"><a href="#" data-nav-section="home">Home</a></li>
              <li><a href="#" data-nav-section="about">About</a></li>
              <li><a href="#" data-nav-section="skills">Skills</a></li>
              <li><a href="#" data-nav-section="education">Education</a></li>
              <li><a href="#" data-nav-section="experience">Experience</a></li>
              <li><a href="#" data-nav-section="work">Work</a></li>
            </ul>
          </div>
        </nav>

        <div className="colorlib-footer">
          <ul>
            {social}
          </ul>
        </div>

      </aside>
    );
  }
}

export default Sidebar;
