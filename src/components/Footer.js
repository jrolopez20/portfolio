import React, { Component } from 'react'

class Footer extends Component {

  render() {
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
        <div className="colorlib-footer">
          <ul>
            {networks}
          </ul>
        </div>
        <p>Copyright ©2019 Javier Rodriguez</p>
      </footer >
    )
  }
}
export default Footer;