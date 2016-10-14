import React, { Component } from 'react';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Preloader from './components/Preloader';
import Question from './components/Question';
import Services from './components/Services';
import { parseQuestions, parseLinks } from './utils/processYAML';
import siteYaml from './data/faq.yaml';
import linksYaml from './data/links.yaml';

const questions = parseQuestions(siteYaml);
const links = parseLinks(linksYaml);

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header questions={questions} links={links} />
        <section id="about">
          { questions.map(question => <Question {...question} />) }
        </section>
        <Services title={'Links'} text={'More info about ranked choice voting'} links={links} />
        <Footer />
      </div>
    );
  }
}
