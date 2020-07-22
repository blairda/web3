// defining a variable
var burgerAnimationTimeline = gsap.timeline();

// reset transformOrigin point for each bar
gsap.set("#bars",{transformOrigin:"center"});

// reference to timeline variable above, animated object, animate property/ies *only 1 objectid/class per action
// Ex: variablename.action("#objectid",{property,property}); optional add after },"timelinestampname")
burgerAnimationTimeline.to("#middle-bar",{duration:1,alpha:0},"burgerStart")
                        .to("#top-bar",{duration:1,rotation:45, y:9},"burgerStart")
                        .to("#bottom-bar",{duration:1,rotation:-45, y:11},"burgerStart");