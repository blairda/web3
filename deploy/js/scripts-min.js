$('[data-fancybox="gallery"]').fancybox({buttons:["slideShow","fullScreen","close"],loop:"true",transitionEffect:"zoom-in-out"}),$(document).ready((function(){console.log($(".slides").hasClass("my-slider")),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",items:1,slideBy:"page",autoplay:!1,loop:!0,gutter:10,edgePadding:40,navPosition:"bottom",controls:!1,mouseDrag:!0,arrowKeys:!0,speed:500,responsive:{768:{edgePadding:80,gutter:20},1025:{edgePadding:120,gutter:30},1440:{edgePadding:160,gutter:40}}})}));var burgerAnimationTimeline=gsap.timeline({paused:!0}),burgerAnimationSpeed=.33;function animateBurger(){!0===canYouSeeMenu?burgerAnimationTimeline.play():burgerAnimationTimeline.reverse()}function resetBurgerBarsColor(){gsap.to(".bars",{duration:.33,fill:"#D2AF36"})}gsap.set(".bars",{transformOrigin:"center"}),burgerAnimationTimeline.to("#middle-bar",{duration:burgerAnimationSpeed,alpha:0,fill:"#150700"},"burgerStart").to("#top-bar",{duration:burgerAnimationSpeed,rotation:45,y:11,fill:"#150700"},"burgerStart").to("#bottom-bar",{duration:burgerAnimationSpeed,rotation:-45,y:-15,fill:"#150700",onReverseComplete:resetBurgerBarsColor},"burgerStart");var canYouSeeMenu=!1;function hideShowMainNav(){!1===canYouSeeMenu?(console.log("show menu"),canYouSeeMenu=!0,animateBurger()):(console.log("hide menu"),canYouSeeMenu=!1,animateBurger())}$("#burger").on("click",hideShowMainNav),$("#main-nav li button").on("click",hideShowMainNav),$(document).ready((function(){console.log("ready!")}));