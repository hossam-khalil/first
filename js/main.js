$(function (){
  'use strict';
 var winh = $(window).height(),
     navh = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winh - navh);
});

// fullPage.Js 
new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ['section1', 'section2', 'section3'],
  navigationTooltips: ['Home', 'Help', 'contact'],
  showActiveTooltips: true,
  scrollingSpeed: 1000
});

