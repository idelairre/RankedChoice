import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section">
          <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="block">
                          <div className="heading wow fadeInUp">
                              <h2>Get In Touch</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 wow fadeInUp">
                    <div className="block text-left">
                      <div className="sub-heading">
                        <h4>Contact Address</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quos maxime voluptate doloribus, voluptatum nemo vel ipsa in eligendi, ullam. Ducimus consequuntur labore error hic.</p>
                      </div>
                      <address className="address">
                        <hr />
                        <p>Dhanmondi 32,<br /> Dhaka,<br /> Bangladesh</p>
                        <hr />
                        <p><strong>E:</strong>&nbsp;hello@foundry.net<br />
                        <strong>P:</strong>&nbsp;+614 3948 2726</p>
                      </address>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="form-group">
                        <form action="#" method="post" id="contact-form">
                            <div className="input-field">
                                <input type="text" className="form-control" placeholder="Your Name" name="name" />
                            </div>
                            <div className="input-field">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="input-field">
                                <textarea className="form-control" placeholder="Your Message" rows="3" name="message"></textarea>
                            </div>
                            <button className="btn btn-send" type="submit">Send me</button>
                        </form>

                        <div id="success">
                            <p>Your Message was sent successfully</p>
                        </div>
                        <div id="error">
                            <p>Your Message was not sent successfully</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
