
gsap.set("#up-left-arrow",{transformOrigin:"right center", alpha:0});
gsap.set("#up-right-arrow",{transformOrigin:"right center", alpha:0});

$("#burger").on("mouseenter", function(){

    if(canYouSeeTheMenu === false){
        burgerAnimationTimeLine.play("burgerToDownArrow");
    }else{
        burgerAnimationTimeLine.play("xToUpArrow");
    }
})


$("#burger").on("mouseleave", function(){
    if(canYouSeeTheMenu === false){
        burgerAnimationTimeLine.reverse("burgerToDownArrowReverse");
        
    }else{
        burgerAnimationTimeLine.reverse("xToUpArrowReverse");
    }
})