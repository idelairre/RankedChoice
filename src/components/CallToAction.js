import React, { Component } from 'react';

export default class CallToAction extends Component {
  render() {
    return (
      <section id="call-to-action" className="section">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 wow text-center">
                      <div className="block">
                          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                          <div className="form-group">
                              <input type="text" className="form-control" placeholder="Enter Your Email Address" />
                              <button className="btn btn-default btn-submit" type="submit">Get Notified</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
