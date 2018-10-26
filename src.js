var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.wrap',
  offset: 300,
//  duration: 400
})
.setPin('.section1')
.addIndicators({name: "1 (duration 300)"})
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.section2',
  offset: 270,
})
.setPin('.section2')
.addIndicators({name: "2 (duration 300)"})
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.section3',
  offset: 240,
})
.setPin('.section3')
.addIndicators({name: "3 (duration 300)"})
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
  triggerElement: '.section4',
  offset: 210,
})
.setPin('.section4')
.addIndicators({name: "4 (duration 300)"})
.addTo(controller);
