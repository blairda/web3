
var burgerToDownArrowTimeline = gsap.timeline({paused:true});
// var backToXTimeline = gsap.timeline({paused:true});
var xToUpArrowTimeline = gsap.timeline({paused:true});

var burgerArrowSpeed = 0.33;

burgerToDownArrowTimeline.to("#burger", {duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-bar", {duration:burgerArrowSpeed, y:-13}, "animateBurger")
                        .to("#top-bar", {duration:burgerArrowSpeed, y:13}, "animateBurger")
                        .to("#left-arrow", {duration:burgerArrowSpeed, rotation:55}, "createArrow")
                        .to("#right-arrow", {duration:burgerArrowSpeed, rotation:-55, x:-5, y:2}, "createArrow")


// backToXTimeline.to("#top-bar",{duration:burgerAnimationSpeed, rotation:45, y:11}, "backToX")
//                 .to("#bottom-bar",{duration:burgerAnimationSpeed, rotation:-45, y:-15}, "backToX")


xToUpArrowTimeline.to("#top-bar", {duration:burgerArrowSpeed, rotation:0}, "xToArrow")
                    .to("#bottom-bar", {duration:burgerArrowSpeed, rotation:0}, "xToArrow")
                    .to("#left-arrow", {duration:burgerArrowSpeed, rotation:135, alpha:1, x:40, y:5}, "xToArrow")
                    .to("#right-arrow", {duration:burgerArrowSpeed, rotation:-135, alpha:1, x:37, y:4}, "xToArrow")


$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    if(canYouSeeMenu === false){
        // change burger into down arrow
        burgerToDownArrowTimeline.play();
    }else{
        // change X into up arrow
        xToUpArrowTimeline.play();
    }
})


$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    if(canYouSeeMenu === false){
        // change down arrow back into burger
        burgerToDownArrowTimeline.reverse();
    }else{
        // change up arrow back into X
        xToUpArrowTimeline.reverse();
    }
}) 