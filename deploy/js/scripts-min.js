$('[data-fancybox="gallery"]').fancybox({buttons:["slideShow","fullScreen","close"],loop:"true",transitionEffect:"zoom-in-out"}),$(document).ready((function(){console.log($(".slides").hasClass("my-slider")),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",items:1,slideBy:"page",autoplay:!1,loop:!0,gutter:10,edgePadding:40,navPosition:"bottom",controls:!1,mouseDrag:!0,arrowKeys:!0,speed:500,responsive:{768:{edgePadding:80,gutter:20},1025:{edgePadding:120,gutter:30},1440:{edgePadding:160,gutter:40}}})}));var burgerAnimationTimeline=gsap.timeline();function hideShowMainNav(){console.log("hide or show nav"),$("#main-nav").toggle()}gsap.set("#bars",{transformOrigin:"center"}),burgerAnimationTimeline.to("#middle-bar",{duration:1,alpha:0},"burgerStart").to("#top-bar",{duration:1,rotation:45,y:9},"burgerStart").to("#bottom-bar",{duration:1,rotation:-45,y:11},"burgerStart"),$("#burger").on("click",hideShowMainNav),$("#main-nav li button").on("click",hideShowMainNav),$(document).ready((function(){console.log("ready!")}));