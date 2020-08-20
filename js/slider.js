$(window).on("load", function () {
  // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(350).css({ overflow: "visible" });
});
$(document).ready(function () {
  $("#series").lightSlider({
    item: 4,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 24,
    enableDrag: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 50,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 100,
        },
      },
    ],
  });
  $("#movies").lightSlider({
    item: 4,
    autoWidth: false,

    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 24,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 50,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 50,
        },
      },
    ],
  });
});
