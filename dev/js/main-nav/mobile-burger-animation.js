var mobileBurgerAnimationTimeline = gsap.timeline({paused:true});


mobileBurgerAnimationTimeline.to("#middle-bar",{duration:0.25, alpha:0}, "iOSburgerAnimation")
                        .to("#top-bar",{duration:0.25, rotation:45, y:11}, "iOSburgerAnimation")
                        .to("#bottom-bar",{duration:0.25, rotation:-45, y:-15}, "iOSburgerAnimation")
                        .to("left-arrow",{duration:0.01, alpha:0}, "iOSburgerAnimation")
                        .to("right-arrow",{duration:0.01, alpha:0}, "iOSburgerAnimation");



function mobileBurgerAnimation(){
    // console.log("animate burger");

    // check the canYouSeeMenu variable value
    if(canYouSeeMenu === true){
        // change burger into X
        mobileBurgerAnimationTimeline.play();
    }else{
        // change X into burger
        upArrowToBurgerTimeline.play();
    }

}