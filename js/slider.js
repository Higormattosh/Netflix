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

<<<<<<< HEAD
Modernizr.on("webp", function (result) {
  if (result) {
    $(".img-webp").each(function () {
      this.src = $(this).data("webp");
    });
  } else {
    $(".img-webp").each(function () {
      this.src = $(this).data("original");
    });
  }
=======
Modernizr.on('webp', function (result) {
    if (result) {
        $('.img-webp').each(function () {
            this.src = $(this).data('webp');
        });
    } else {
        $('.img-webp').each(function () {
            this.src = $(this).data('original');
        });
    }
>>>>>>> 680176ff4c29858c89d74f585ff3629c0ee32bc8
});
