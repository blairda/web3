$('[data-fancybox="gallery"]').fancybox({buttons:["slideShow","fullScreen","close"],loop:"true",transitionEffect:"zoom-in-out"}),$(document).ready((function(){console.log($(".slides").hasClass("my-slider")),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",items:1,slideBy:"page",autoplay:!1,loop:!0,gutter:10,edgePadding:40,navPosition:"bottom",controls:!1,mouseDrag:!0,arrowKeys:!0,speed:500,responsive:{768:{edgePadding:80,gutter:20},1025:{edgePadding:120,gutter:30},1440:{edgePadding:160,gutter:40}}})}));var burgerAnimationTimeline=gsap.timeline({paused:!0}),burgerAnimationSpeed=.33;function animateBurger(){!0===canYouSeeMenu?burgerAnimationTimeline.play():burgerAnimationTimeline.reverse()}gsap.set(".bars",{transformOrigin:"center"}),burgerAnimationTimeline.to("#top-bar",{duration:burgerAnimationSpeed,rotation:45},"burgerToX").to("#bottom-bar",{duration:burgerAnimationSpeed,rotation:-45},"burgerToX").to("#middle-bar",{duration:burgerAnimationSpeed,alpha:0},"burgerToX").to("#left-arrow",{duration:burgerAnimationSpeed,alpha:0,rotation:0},"burgerToX").to("#right-arrow",{duration:burgerAnimationSpeed,alpha:0,rotation:0},"burgerToX");var burgerToDownArrowTimeline=gsap.timeline({paused:!0}),backToXTimeline=gsap.timeline({paused:!0}),xToUpArrowTimeline=gsap.timeline({paused:!0}),burgerArrowSpeed=.33;burgerToDownArrowTimeline.to("#burger",{duration:burgerArrowSpeed,rotation:-90},"animateBurger").to("#bottom-bar",{duration:burgerArrowSpeed,y:-13},"animateBurger").to("#top-bar",{duration:burgerArrowSpeed,y:13},"animateBurger").to("#left-arrow",{duration:burgerArrowSpeed,rotation:55},"createArrow").to("#right-arrow",{duration:burgerArrowSpeed,rotation:-55,x:-5,y:2},"createArrow"),backToXTimeline.to("#top-bar",{duration:burgerAnimationSpeed,rotation:45,y:11},"backToX").to("#bottom-bar",{duration:burgerAnimationSpeed,rotation:-45,y:-15},"backToX"),xToUpArrowTimeline.to("#top-bar",{duration:burgerArrowSpeed,rotation:0},"xToArrow").to("#bottom-bar",{duration:burgerArrowSpeed,rotation:0},"xToArrow").to("#left-arrow",{duration:burgerArrowSpeed,rotation:145,alpha:1,x:40,y:5},"createArrow2").to("#right-arrow",{duration:burgerArrowSpeed,rotation:-145,alpha:1,x:37,y:4},"createArrow2"),$("#burger").on("mouseenter",(function(){console.log("mouse enter"),!1===canYouSeeMenu?burgerToDownArrowTimeline.play():xToUpArrowTimeline.play()})),$("#burger").on("mouseleave",(function(){console.log("mouse leave"),!1===canYouSeeMenu?burgerToDownArrowTimeline.reverse():xToUpArrowTimeline.reverse()}));var canYouSeeMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeMenu?(console.log("show menu"),canYouSeeMenu=!0,animateBurger(),mainNavTimeline.play()):(console.log("hide menu"),canYouSeeMenu=!1,animateBurger(),mainNavTimeline.reverse())}mainNavTimeline.to("#main-nav",{duration:.5,y:0});var menuBackground=document.querySelector("#main-nav");console.log("seen"),window.onClick=function(e){console.log("not seen1"),e.target==menuBackground&&(console.log("not seen2"),hideShowMainNav())},$("#burger").on("click",hideShowMainNav),gsap.registerPlugin(ScrollToPlugin);var scrollItems=["#index-card1","#index-card2","#index-card3"];function scrollIndex(){gsap.to(window,{duration:2,scrollTo:{y:scrollItems[$("#main-nav ul li button").index(this)],offsetY:100}})}$("#main-nav li button").on("click",hideShowMainNav),$("#main-nav li button").on("click",scrollIndex),$(document).ready((function(){console.log("ready")}));