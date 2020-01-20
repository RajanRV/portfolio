import React from 'react';

class NavBar extends React.Component {
    render() {
        return (<nav id="theMenu" className="menu">
        <div id="menu-options" className="menu-wrap">
            <div className="logo-flat">
              <img alt="personal-logo" className="img-responsive" src="/assets/images/john.png" />
            </div>
            <br />
            <a href="#home"><i className="title-icon fa fa-user"></i>Home</a>
            <a href="#about"><i className="title-icon fa fa-dashboard"></i>About</a>
            <a href="#education"><i className="title-icon fa fa-graduation-cap"></i>Education</a>
            <a href="#skills"><i className="title-icon fa fa-sliders"></i>Skills</a>
            <a href="#experience"><i className="title-icon fa fa-suitcase"></i>Experience</a>
            <a href="#portfolios"><i className="title-icon fa fa-archive"></i>Portfolios</a>
            <a href="#interest"><i className="title-icon fa fa-heart"></i>Interest</a>
            <a href="#testimonials"><i className="title-icon fa fa-users"></i>Testimonials</a>
            <a href="#pricing-table"><i className="title-icon fa fa-money"></i>Pricing</a>
            <a href="#blog"><i className="title-icon fa fa-pencil-square"></i>Blog</a>
            <a href="#contact"><i className="title-icon fa fa-envelope"></i>Contact</a>
        </div>
        <div id="menuToggle">
            <div className="toggle-normal">
              <i className="material-icons top-bar">remove</i>
              <i className="material-icons middle-bar">remove</i>
              <i className="material-icons bottom-bar">remove</i>
            </div>
        </div>
      </nav>);
    }
}

export default NavBar;