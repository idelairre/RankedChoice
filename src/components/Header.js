import React, { Component } from 'react';
import CountDown from './CountDown';
import TableOfContents from './TableOfContents';

export default function Header({ questions, links }) {
  questions = questions.map((question, i) => {
    question.key = i;
    return question;
  });
  return (
    <section id="hero-area">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="block">
                        <h1 className="wow fadeInDown">Ranked Choice</h1>
                        <p className="wow fadeInDown" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        <div className="wow fadeInDown" data-wow-delay="0.3s">
                          <a className="btn btn-default btn-home" href="#about" role="button">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 wow zoomIn">
                    <div className="block">
                      <TableOfContents questions={questions} links={links} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
