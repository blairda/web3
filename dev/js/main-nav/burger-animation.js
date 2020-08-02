// defining variables
var burgerAnimationTimeline = gsap.timeline({paused:true});
var upArrowToBurgerTimeline = gsap.timeline({paused:true});
var burgerAnimationSpeed = 0.33;


// reset transformOrigin point for each bar
gsap.set(".bars",{transformOrigin:"center"});

// reference to timeline variable above, animated object, animate property/ies *only 1 objectid/class per action, color is orange
// Ex: variablename.action("#objectid",{property,property}); optional add after },"timelinestampname")
// burgerAnimationTimeline.to("#middle-bar",{duration:burgerAnimationSpeed, alpha:0, fill: "#E18A37"}, "burgerStart")
//                         .to("#top-bar",{duration:burgerAnimationSpeed, rotation:45, y:11, fill: "#E18A37"}, "burgerStart")
//                         .to("#bottom-bar",{duration:burgerAnimationSpeed, rotation:-45, y:-15, fill: "#E18A37", onReverseComplete:resetBurgerBarsColor}, "burgerStart");

// burgerAnimationTimeline.to("#burger");

burgerAnimationTimeline.to("#top-bar", {duration:burgerAnimationSpeed, rotation:45}, "burgerToX")
                        .to("#bottom-bar", {duration:burgerAnimationSpeed, rotation:-45}, "burgerToX")
                        .to("#middle-bar", {duration:burgerAnimationSpeed, alpha:0}, "burgerToX")
                        .to("#left-arrow", {duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX")
                        .to("#right-arrow", {duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX")


upArrowToBurgerTimeline.to("#top-bar", {y:0}, "backToBurger")
                        .to("#bottom-bar", {y:0}, "backToBurger")
                        .to("#middle-bar", {y:0, alpha:1}, "backToBurger")
                        .to("#burger", {rotation:0}, "backToBurger")
                        .to("#left-arrow", {alpha:0}, "backToBurger")
                        .to("#right-arrow", {alpha:0}, "backToBurger");


function animateBurger(){
    // console.log("animate burger");

    // check the canYouSeeMenu variable value
    if(canYouSeeMenu === true){
        // change burger into X
        burgerAnimationTimeline.play();
    }else{
        // change X into burger
        upArrowToBurgerTimeline.play();
    }

}

// function to revert back to original yellow color when reversing from X to burger, color is yellow
// function resetBurgerBarsColor(){
//     gsap.to(".bars",{duration:burgerAnimationSpeed, fill: "#D2AF36"});
// }