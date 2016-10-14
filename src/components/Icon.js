import React from 'react';

export default function Icon({ source, quote, link, icon = 'ion-link'}) {
  return (
    <div className="col-sm-6 col-md-3 wow fadeInLeft">
      <div className="service">
        <a href={link}>
          <div className="icon-box">
            <span className="icon">
                <i className={icon}></i>
              </span>
          </div>
          <div className="caption">
              <h3>{source}</h3>
              <p>{quote}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
