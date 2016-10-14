import React, { Component } from 'react';

export default class Preloader extends Component {
  render() {
    return (
      <div id="preloader">
        <div className="book">
          <div className="book__page"></div>
          <div className="book__page"></div>
          <div className="book__page"></div>
        </div>
      </div>
    );
  }
}
