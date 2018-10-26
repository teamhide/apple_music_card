var controller = new ScrollMagic.Controller();

// SCENE 1
var scene1 = new ScrollMagic.Scene({
  triggerElement: '.wrap',
  offset: 300,
})
.setPin('.section1')
.addIndicators({name: "1 (duration 300)"})
.addTo(controller);

var scene1_2 = new ScrollMagic.Scene({
  triggerElement: '.wrap',
  offset: 770,
  duration: 250
})
.addIndicators({name: "1-2 (duration 570)"})
.setTween('.section1', {width: 550, opacity: 0.6})
.addTo(controller);

// SCENE 2
var scene2 = new ScrollMagic.Scene({
  triggerElement: '.section2',
  offset: 270,
})
.setPin('.section2')
.addIndicators({name: "2 (duration 300)"})
.addTo(controller);

var scene2_2 = new ScrollMagic.Scene({
  triggerElement: '.wrap',
  offset: 1520,
  duration: 250
})
.addIndicators({name: "2-2 (duration 570)"})
.setTween('.section2', {width: 550, opacity: 0.6})
.addTo(controller);
// SCENE 3
var scene3 = new ScrollMagic.Scene({
  triggerElement: '.section3',
  offset: 240,
})
.setPin('.section3')
.addIndicators({name: "3 (duration 300)"})
.addTo(controller);

var scene3_2 = new ScrollMagic.Scene({
  triggerElement: '.wrap',
  offset: 1990,
  duration: 250
})
.addIndicators({name: "3-2 (duration 570)"})
.setTween('.section3', {width: 550, opacity: 0.6})
.addTo(controller);
// SCENE 4
var scene4 = new ScrollMagic.Scene({
  triggerElement: '.section4',
  offset: 210,
})
.setPin('.section4')
.addIndicators({name: "4 (duration 300)"})
.addTo(controller);

var scene4_2 = new ScrollMagic.Scene({
  triggerElement: '.wrap',
  offset: 2460,
  duration: 250
})
.addIndicators({name: "1-2 (duration 570)"})
.setTween('.section4', {width: 550, opacity: 0.6})
.addTo(controller);