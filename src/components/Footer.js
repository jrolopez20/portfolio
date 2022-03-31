import React, { Component } from 'react'

class Footer extends Component {

  render() {
    const currentYear = (new Date()).getFullYear();

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        )
      })
    }

    return (
      <footer>
        {/*<div className="contact-info text-center">*/}
        {/*  <span><i className="icon-mail5"></i> {email}</span>&nbsp;&nbsp;&nbsp;*/}
        {/*  <span><i className="icon-phone-outline"></i> {phone}</span>*/}
        {/*</div>*/}
        <div className="colorlib-footer">
          <ul>
            {networks}
          </ul>
        </div>
        <p>Copyright ©{currentYear} Javier Rodriguez Lopez</p>
      </footer >
    )
  }
}
export default Footer;
