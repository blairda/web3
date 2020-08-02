var canYouSeeMenu = false;

// gsap.set("#main-nav",{y:-300});

var navHeight = $("#main-nav").outerHeight();
// move main-nav off-screen, moving main-nav along y-axis
gsap.set("#main-nav", {y: -navHeight})

// how tall main-nav is from browser, use outerHeight to include any padding/margin
// console.log($("#main-nav").outerHeight() + " = total height of main-nav");
// console.log($("#main-nav").height() + " = height of main-nav");

var mainNavTimeline = gsap.timeline({paused:true})
mainNavTimeline.to("#main-nav", {duration:0.5, y:0})

// function to handle showing/hiding of main-nav
function hideShowMainNav(){
    // console.log("hide or show nav");
    // toggles css display property
    // $("main-nav").toggle();

    if(canYouSeeMenu === false){
        console.log("show menu");
        // reset back to true to hide menu
        canYouSeeMenu = true;
            // console.log(burgerToDownArrowTimeline.progress() + " is the progress for the gsap timeline, anything greater than 0 means it has played");
            if(burgerToDownArrowTimeline.progress() > 0){
                // change burger into X
                animateBurger();
            }else{
                mobileBurgerAnimation();
            }

            // slide down main-nav into view
            mainNavTimeline.play();


    }else{
        console.log("hide menu");
        // reset back to false to show menu again
        canYouSeeMenu = false

        // change X into burger
        animateBurger();

        // slide up main-nav out of view
        mainNavTimeline.reverse() 
    }
}


// enable menu to close when clicking ahywhere in menu area
var menuBackground = document.querySelector("#main-nav");

window.onclick = function(event){
    
    if(event.target == menuBackground){
        hideShowMainNav();
    }
}