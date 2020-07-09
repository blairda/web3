// console.log("tinySlider here");

tns(
    {
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    gutter: 5,
    edgePadding: 20,
    navPosition: "bottom",
    controls: false,
    responsive: {
        768: {
            edgePadding: 100,
            gutter: 10
        },
        1025: {
            edgePadding: 100,
            gutter: 20
        },
        1440: {
            edgePadding: 100,
            gutter: 30
        }
    }
});

// tns({
//     container: '.my-slider',
//     items: 1,
//     responsive: {
//       768: {
//         edgePadding: 20,
//         gutter: 20,
//         items: 2
//       },
//       1025: {
//         gutter: 30
//       },
//       1440: {
//         items: 3
//       }
//     }
//   });