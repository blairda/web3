$('[data-fancybox="gallery"]').fancybox({buttons:["slideShow","fullScreen","close"],loop:"true",transitionEffect:"zoom-in-out"}),$(document).ready((function(){console.log($(".slides").hasClass("my-slider")),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",items:1,slideBy:"page",autoplay:!1,loop:!0,gutter:10,edgePadding:40,navPosition:"bottom",controls:!1,mouseDrag:!0,arrowKeys:!0,speed:500,responsive:{768:{edgePadding:80,gutter:20},1025:{edgePadding:120,gutter:30},1440:{edgePadding:160,gutter:40}}})}));var burgerAnimationTimeline=gsap.timeline({paused:!0}),burgerAnimationSpeed=.33;function animateBurger(){!0===canYouSeeMenu?burgerAnimationTimeline.play():burgerAnimationTimeline.reverse()}function resetBurgerBarsColor(){gsap.to(".bars",{duration:burgerAnimationSpeed,fill:"#D2AF36"})}gsap.set(".bars",{transformOrigin:"center"}),burgerAnimationTimeline.to("#middle-bar",{duration:burgerAnimationSpeed,alpha:0,fill:"#E18A37"},"burgerStart").to("#top-bar",{duration:burgerAnimationSpeed,rotation:45,y:11,fill:"#E18A37"},"burgerStart").to("#bottom-bar",{duration:burgerAnimationSpeed,rotation:-45,y:-15,fill:"#E18A37",onReverseComplete:resetBurgerBarsColor},"burgerStart");var canYouSeeMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeMenu?(console.log("show menu"),canYouSeeMenu=!0,animateBurger(),mainNavTimeline.play()):(console.log("hide menu"),canYouSeeMenu=!1,animateBurger(),mainNavTimeline.reverse())}mainNavTimeline.to("#main-nav",{duration:.5,y:0});var menuBackground=document.querySelector("#main-nav");console.log("seen"),window.onClick=function(e){console.log("not seen1"),e.target==menuBackground&&(console.log("not seen2"),hideShowMainNav())},$("#burger").on("click",hideShowMainNav),gsap.registerPlugin(ScrollToPlugin);var scrollItems=["#index-card1","#index-card2","#index-card3"];function scrollIndex(){gsap.to(window,{duration:2,scrollTo:{y:scrollItems[$("#main-nav ul li button").index(this)],offsetY:100}})}$("#main-nav li button").on("click",hideShowMainNav),$("#main-nav li button").on("click",scrollIndex),$(document).ready((function(){console.log("ready")}));