gsap.registerPlugin(ScrollToPlugin);

// animating three buttons to scrollto respective index sections
var scrollItems =["#index-card1", "#index-card2", "#index-card3"];

function scrollIndex(){
    // gsap.to(window, {duration: 2, scrollTo:"#index-card1"});
    gsap.to(window, {duration: 2, scrollTo: {y: scrollItems[$('#main-nav ul li button').index(this)], offsetY: 100}});
}

// function scrollRhino(){
//     // gsap.to(window, {duration: 2, scrollTo:"#index-card1"});
//     gsap.to(window, {duration: 2, scrollTo:{y:"#index-card1", offsetY:100}});
// }

// function scrollLeopard(){
//     gsap.to(window, {duration: 2, scrollTo:"#index-card2"});
// }

// function scrollHippo(){
//     gsap.to(window, {duration: 2, scrollTo:"#index-card3"});
// } 