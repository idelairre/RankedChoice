import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar-default navbar-fixed-top" id="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">
                    <h2 style={{color: '#FFFFFF'}}>Why Ranked Choice?</h2>
                  </a>
              </div>

              <nav className="collapse navbar-collapse" id="navbar">
                  <ul className="nav navbar-nav navbar-right" id="top-nav">
                      <li className="current"><a href="#body">Home</a></li>
                      <li><a href="#about">Questions</a></li>
                      <li><a href="#service">Links</a></li>
                  </ul>
              </nav>
          </div>
      </div>
    );
  }
}
