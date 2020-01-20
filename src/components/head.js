import React from 'react';

class Head extends React.Component {
    render() {
        return (<div className="header-background section">
        <div id="v-card-holder">
            <div className="container">
              <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div id="v-card" className="card">
                        <div id="profile" className="right">
                          <img alt="profile" className="img-responsive" src="/assets/images/profile.png" />
                          <div className="slant"></div>
                          <div className="btn-floating btn-large add-btn">
                              <i className="material-icons">add</i>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="info-headings">
                              <h4 className="text-uppercase left">Rajan Vasani</h4>
                              <h6 className="text-capitalize left">Web Developer</h6>
                          </div>
                          <div className="infos">
                              <ul className="profile-list">
                                <li className="clearfix">
                                    <span className="title"><i className="material-icons">email</i></span>
                                    <span className="content"><a href="mailto:rajanvasani9@gmail.com">rajanvasani9@gmail.com</a></span>
                                </li>
                                <li className="clearfix">
                                    <span className="title"><i className="material-icons">language</i></span>
                                    <span className="content"><a href="http://rajanvasani.cf">rajanvasani.cf</a></span>
                                </li>
                                <li className="clearfix">
                                    <span className="title"><i className="fa fa-skype" aria-hidden="true"></i></span>
                                    <span className="content">live:rajan.cybercom.c</span>
                                </li>
                                <li className="clearfix">
                                    <span className="title"><i className="material-icons">phone</i></span>
                                    <span className="content">+91 8780595907</span>
                                </li>
                                <li className="clearfix">
                                    <span className="title"><i className="material-icons">place</i></span>
                                    <span className="content">Naranpura, Ahmedabad - 380013</span>
                                </li>
                              </ul>
                          </div>
                          <div className="links">
                              <a href="/" id="first_one"
                                className="social btn-floating indigo"><i
                                className="fa fa-facebook"></i></a>
                              <a href="/" className="social  btn-floating blue"><i
                                className="fa fa-twitter"></i></a>
                              <a href="/" className="social  btn-floating red"><i
                                className="fa fa-google-plus"></i></a>
                              <a href="/" className="social  btn-floating blue darken-3"><i
                                className="fa fa-linkedin"></i></a>
                              <a href="/" className="social  btn-floating orange darken-3"><i
                                className="fa fa-rss"></i></a>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>);
    }
}
export default Head;