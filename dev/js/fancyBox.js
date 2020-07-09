// console.log("fancyBox here");

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "fullScreen",
        "close"
      ],
    loop:"true",
    transitionEffect: "zoom-in-out"
});