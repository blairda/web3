// @codekit-prepend "gsap-register.js";

// @codekit-prepend "fancyBox.js";
// @codekit-prepend "tinySlider.js";

// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "main-nav/nav-global.js";
// @codekit-prepend "main-nav/burger-click.js";
// @codekit-prepend "main-nav/nav-scroll.js";
// @codekit-prepend "main-nav/main-nav-click.js";
// @codekit-prepend "scrollTrigger.js";


gsap.from("section h1", {duration:1, alpha:0, yPercent: -50, stagger:.7});
gsap.from(".site-title", {duration:1, alpha:0, xPercent: -50});