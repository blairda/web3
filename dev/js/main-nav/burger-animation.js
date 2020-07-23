// defining variables
var burgerAnimationTimeline = gsap.timeline({paused:true});
var burgerAnimationSpeed = 0.33;

// reset transformOrigin point for each bar
gsap.set(".bars",{transformOrigin:"center"});

// reference to timeline variable above, animated object, animate property/ies *only 1 objectid/class per action, color is orange
// Ex: variablename.action("#objectid",{property,property}); optional add after },"timelinestampname")
burgerAnimationTimeline.to("#middle-bar",{duration:burgerAnimationSpeed, alpha:0, fill: "#E18A37"}, "burgerStart")
                        .to("#top-bar",{duration:burgerAnimationSpeed, rotation:45, y:11, fill: "#E18A37"}, "burgerStart")
                        .to("#bottom-bar",{duration:burgerAnimationSpeed, rotation:-45, y:-15, fill: "#E18A37", onReverseComplete:resetBurgerBarsColor}, "burgerStart");


function animateBurger(){
    // console.log("animate burger");

    // check the canYouSeeMenu variable value
    if(canYouSeeMenu === true){
        // change burger into X
        burgerAnimationTimeline.play();
    }else{
        // change X into burger
        burgerAnimationTimeline.reverse();
    }

}

// function to revert back to original yellow color when reversing from X to burger, color is yellow
function resetBurgerBarsColor(){
    gsap.to(".bars",{duration:burgerAnimationSpeed, fill: "#D2AF36"});
}