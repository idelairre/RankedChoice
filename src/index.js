import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import WOW from 'wowjs/dist/wow';
import App from './App';
import '../lib/jquery.nav';
import '../lib/jquery.sticky';

ReactDOM.render(<App />, document.getElementById('root'));

// everything below here is temporary until I can find a React based solution for them

const wow = new WOW({
    mobile: false
  }
)

wow.init();

$(window).scroll(() => {
	if ($(window).scrollTop() > 100) {
		$('.navbar-default').addClass('animated');
	} else {
		$('.navbar-default').removeClass('animated');
	}
});

$('section').not('#hero-area').each((i, item) => {
  if (i % 2 === 0) {
    $(item).css('background', '#f9f9f9');
  } else {
    $(item).css('background', '#ffffff');
  }
});

$('#top-nav').onePageNav({
   currentClass: 'current',
   changeHash: true,
   scrollSpeed: 1200
});
