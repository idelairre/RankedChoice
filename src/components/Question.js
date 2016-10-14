import React from 'react';
import ReactMarkdown from 'react-markdown';
import OwlCarousel from 'react-owl-carousel';

export default function Question({id, question, answer, images}) {
  return (
    <section id={id} className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-12 wow fadeInLeft">
                  <div className="sub-heading">
                    <h3>{question}</h3>
                  </div>
                    <div className="block">
                      <ReactMarkdown source={answer} />
                    </div>
                </div>
                { images ?
                <div className="col-md-5 col-sm-12 wow fadeInLeft" data-wow-delay="0.3s">
                    <div className="about-slider">
                    <OwlCarousel slideSpeed={300} singleItem autoPlay>
                      {images.map(image => {
                        return (
                          <div className="about-item">
                            <img src={`file!../../images/about/${image}`} alt="" className="img-responsive" />
                          </div>
                        );
                      })}
                      </OwlCarousel>
                    </div>
                </div> : null }
            </div>
        </div>
    </section>
  );
}
