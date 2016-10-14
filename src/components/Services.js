import React, { Component } from 'react';
import Icon from './Icon';

export default function Services({ title, text, links }) {
  return (
    <section id="service" className="section">
        <div className="container">
            <div className="row">
                <div className="heading wow fadeInUp">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                { links.map(link => <Icon {...link} /> ) }
            </div>
        </div>
    </section>
  );
}
