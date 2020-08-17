
$(document).ready(function () {

    // console.log($(".slides").hasClass("my-slider"));
    if ($(".slides").hasClass("my-slider")) {
        tns({
            container: '.my-slider',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            loop: true,
            gutter: 10,
            edgePadding: 40,
            navPosition: "bottom",
            controls: false,
            mouseDrag: true,
            arrowKeys: true,
            speed: 500,
            responsive: {
                768: {
                    edgePadding: 80,
                    gutter: 20
                },
                1025: {
                    edgePadding: 120,
                    gutter: 30
                },
                1440: {
                    edgePadding: 160,
                    gutter: 40
                }
            }
        });
    }
});