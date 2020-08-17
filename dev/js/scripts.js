// @codekit-prepend "fancyBox.js";
// @codekit-prepend "tinySlider.js";

// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/mobile-burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "main-nav/nav-global.js";
// @codekit-prepend "main-nav/burger-click.js";
// @codekit-prepend "main-nav/nav-scroll.js";
// @codekit-prepend "main-nav/main-nav-click.js";

// $( document ).ready(function() {
//     console.log( "ready" );
// });

gsap.from(".title", {duration:1, alpha:0, yPercent: -50}, "title")
gsap.from(".site-title", {duration:1, alpha:0, xPercent: -50}, "title");