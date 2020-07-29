
var burgerToDownArrowTimeline = gsap.timeline({paused:true});
var backToXTimeline = gsap.timeline({paused:true});
var xToUpArrowTimeline = gsap.timeline({paused:true});

var burgerArrowSpeed = 0.33;

burgerToDownArrowTimeline.to("#burger", {duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-bar", {duration:burgerArrowSpeed, y:-13}, "animateBurger")
                        .to("#top-bar", {duration:burgerArrowSpeed, y:13}, "animateBurger")
                        .to("#left-arrow", {duration:burgerArrowSpeed, rotation:55}, "createArrow")
                        .to("#right-arrow", {duration:burgerArrowSpeed, rotation:-55, x:-5, y:2}, "createArrow")


backToXTimeline.to("#top-bar",{duration:burgerAnimationSpeed, rotation:45, y:11}, "backToX")
                .to("#bottom-bar",{duration:burgerAnimationSpeed, rotation:-45, y:-15}, "backToX")


xToUpArrowTimeline.to("#top-bar", {duration:burgerArrowSpeed, rotation:0}, "xToArrow")
                    .to("#bottom-bar", {duration:burgerArrowSpeed, rotation:0}, "xToArrow")
                    .to("#left-arrow", {duration:burgerArrowSpeed, rotation:145, alpha:1, x:40, y:5}, "createArrow2")
                    .to("#right-arrow", {duration:burgerArrowSpeed, rotation:-145, alpha:1, x:37, y:4}, "createArrow2")


// $("#burger").on("mouseenter", function(){
//     console.log("mouse enter");
//     burgerToDownArrowTimeline.play();
//     // if(canYouSeeMenu === true){
//     //     // change burger into X
//     //     backToXTimeline.play();
//     // }else{
//     //     // change X into burger
//     //     backToXTimeline.reverse();
//     // }
// })


// $("#burger").on("mouseleave", function(){
//     console.log("mouse leave");
//     burgerToDownArrowTimeline.reverse();
//     // if(canYouSeeMenu === false){
//     //     // change burger into X
//     //     backToXTimeline.play();
//     // }else{
//     //     // change X into burger
//     //     backToXTimeline.reverse();
//     // }
// })

$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    if(canYouSeeMenu === false){
        // change burger into X
        burgerToDownArrowTimeline.play();
    }else{
        // change X into burger, play another timeline
        xToUpArrowTimeline.play();
    }
    // if(canYouSeeMenu === true){
    //     // change burger into X
    //     backToXTimeline.play();
    // }else{
    //     // change X into burger
    //     backToXTimeline.reverse();
    // }
})


$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    if(canYouSeeMenu === false){
        // change burger into X
        burgerToDownArrowTimeline.reverse();
    }else{
        // change X into burger, play another timeline
        xToUpArrowTimeline.reverse();
    }
    // if(canYouSeeMenu === false){
    //     // change burger into X
    //     backToXTimeline.play();
    // }else{
    //     // change X into burger
    //     backToXTimeline.reverse();
    // }
})

// function(){
//     // console.log("animate burger");

//     // check the canYouSeeMenu variable value
//     if(canYouSeeMenu === false){
//         // change burger into X
//         burgerToDownArrowTimeline.play();
//     }else{
//         // change X into burger, play another timeline
//         burgerToDownArrowTimeline.reverse();
//     }

// }



// $("#burger").on("click", function(){
//     console.log("mouse enter");
//     burgerAnimationTimeline.play();
// })


// $("#burger").on("mouseleave", function(){
//     console.log("mouse leave");
//     burgerAnimationTimeline.reverse();
// })


    // check the canYouSeeMenu variable value
    // if(canYouSeeMenu === true){
    //     // change burger into X
    //     backToXTimeline.play();
    // }else{
    //     // change X into burger
    //     backToXTimeline.reverse();
    // }