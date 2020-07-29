
var burgerToArrowTimeline = gsap.timeline({paused:true});

var burgerArrowSpeed = 0.33;

burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-bar", {duration:burgerArrowSpeed, y:-13}, "animateBurger")
                        .to("#top-bar", {duration:burgerArrowSpeed, y:13}, "animateBurger")
                        .to("#left-arrow", {duration:burgerArrowSpeed, rotation:55}, "createArrow")
                        .to("#right-arrow", {duration:burgerArrowSpeed, rotation:-55, x:-5, y:2}, "createArrow")



$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    burgerToArrowTimeline.play();
})


$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    burgerToArrowTimeline.reverse();
})