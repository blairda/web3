var canYouSeeMenu = false;



// function to handle showing/hiding of main-nav
function hideShowMainNav(){
    // console.log("hide or show nav");
    // toggles css display property
    // $("main-nav").toggle();

    if(canYouSeeMenu === false){
        console.log("show menu");
        // reset back to true to hide menu
        canYouSeeMenu = true;

        // change burger into X
        animateBurger();


    }else{
        console.log("hide menu");
        // reset back to false to show menu again
        canYouSeeMenu = false

        // change X into burger
        animateBurger();
    }
}