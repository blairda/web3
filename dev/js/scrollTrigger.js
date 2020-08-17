/* =============
    Index
============= */
const questionTimeline = gsap.timeline();

questionTimeline.from("#question-mark", {duration:0.75, alpha:0, xPercent: 100, scale:.5});

ScrollTrigger.create({
     animation: questionTimeline,
     toggleActions: "restart none reverse none",
     trigger: "#intro-text",
     start: "top 70%",
     end: "bottom 70%",
    // markers: true,
    id: "question-mark"
});


const rhinoNameTimeline = gsap.timeline();

rhinoNameTimeline.from("#rhino-name", {duration:1.5, alpha:0, scale:.5, xPercent: -100});

ScrollTrigger.create({
     animation: rhinoNameTimeline,
     toggleActions: "play none none none",
     trigger: "#index-fact1",
     start: "top 70%",
     end: "bottom 70%",
    // markers: true,
    id: "rhino-name"
});


const exclamation1Timeline = gsap.timeline();

exclamation1Timeline.from("#exclamation-mark1", {duration:0.75, alpha:0, xPercent: -100, scale:.5});

ScrollTrigger.create({
     animation: exclamation1Timeline,
     toggleActions: "restart none reverse none",
     trigger: "#index-fact1",
     start: "top 70%",
     end: "bottom 70%",
    // markers: true,
    id: "exclamation-mark1"
});


const leopardNameTimeline = gsap.timeline();

leopardNameTimeline.from("#leopard-name", {duration:1.5, alpha:0, scale:.75, xPercent: -100});

ScrollTrigger.create({
     animation: leopardNameTimeline,
     toggleActions: "play none none none",
     trigger: "#index-fact2",
     start: "top 70%",
     end: "bottom 70%",
    // markers: true,
    id: "leopard-name"
});


const exclamation2Timeline = gsap.timeline();

exclamation2Timeline.from("#exclamation-mark2", {duration:0.5, alpha:0, xPercent: 100, scale:.75});

ScrollTrigger.create({
     animation: exclamation2Timeline,
     toggleActions: "restart none reverse none",
     trigger: "#index-fact2",
     start: "top 70%",
     end: "bottom 70%",
    // markers: true,
    id: "exclamation-mark2"
});


const hippoNameTimeline = gsap.timeline();

hippoNameTimeline.from("#hippo-name", {duration:1.5, alpha:0, scale:.75, xPercent: -100});

ScrollTrigger.create({
     animation: hippoNameTimeline,
     toggleActions: "play none none none",
     trigger: "#index-fact3",
     start: "top 70%",
     end: "bottom 70%",
    // markers: true,
    id: "hippo-name"
});


const exclamation3Timeline = gsap.timeline();

exclamation3Timeline.from("#exclamation-mark3", {duration:0.5, alpha:0, xPercent: -100, scale:.75});

ScrollTrigger.create({
     animation: exclamation3Timeline,
     toggleActions: "restart none reverse none",
     trigger: "#index-fact3",
     start: "top 70%",
     end: "bottom 70%",
    // markers: true,
    id: "exclamation-mark3"
});

/* =============
    Case-Study
============= */
const elephantNameTimeline = gsap.timeline();

elephantNameTimeline.from("#elephant-name h3", {duration:1.5, alpha:0, xPercent: 100, scale:.75});

ScrollTrigger.create({
     animation: elephantNameTimeline,
     toggleActions: "restart none reverse none",
     trigger: "#case-study-body-text",
     start: "top 70%",
     end: "bottom 70%",
    // markers: true,
    id: "elephant-name"
});