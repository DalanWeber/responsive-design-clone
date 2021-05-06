import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }
  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <nav className="header">
        <div>
          <strong>Start Bootstrap</strong>
        </div>
        <div>
          <ul className="nav-main">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <ul className={`nav-drop ${this.state.showMenu ? "show" : ""}`}>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <button className='menubutton' onClick={this.toggleMenu}>Menu</button>
        </div>
      </nav>
    );
  }
}

export default Header;
