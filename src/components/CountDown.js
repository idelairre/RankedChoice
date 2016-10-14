import React, { Component } from 'react';

export default function CountDown() {
  return (
    <div className="counter text-center">
        <ul id="countdown_dashboard">
            <li>
                <div className="dash days_dash">
                    <div className="digit">0</div>
                    <div className="digit">0</div>
                    <div className="digit">0</div>
                    <span className="dash_title">Days</span>
                </div>
            </li>
            <li>
                <div className="dash hours_dash">
                    <div className="digit">0</div>
                    <div className="digit">0</div>
                    <span className="dash_title">Hours</span>
                </div>
            </li>
            <li>
                <div className="dash minutes_dash">
                    <div className="digit">0</div>
                    <div className="digit">0</div>
                    <span className="dash_title">Minutes</span>
                </div>
            </li>
            <li>
                <div className="dash seconds_dash">
                    <div className="digit">0</div>
                    <div className="digit">0</div>
                    <span className="dash_title">Seconds</span>
                </div>
            </li>
        </ul>
    </div>
  );
}
