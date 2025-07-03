(function () {
  ("use strict");


  // 07. Odometer CounterUp
  /////////////////////////////////////////

  Fancybox.bind("[data-fancybox]", {});

  // 07. Odometer CounterUp
  /////////////////////////////////////////

  $(document).ready(function () {
    $(".odometer-wrapper").appear(function () {
      let count = $(this).attr("data-count");
      let odometer = $(this).closest(".odometer-wrapper").find(".odometer");

      setTimeout(function () {
        odometer.html(count);
      }, 500);
    });
  });

  // 37. Work Process Slider
  ///////////////////////////////////////////////////////

  const workSlider = new Swiper(".work-process-slider", {
    // Optional parameters
    grabCursor: true,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 5000, // Autoplay delay in milliseconds
      disableOnInteraction: false,
    },
    spaceBetween: 28,
    slidesPerView: 1,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
      a11y: false,
    },
    // Navigation dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 53. Footer Copyright
  ////////////////////////////////////////////////

  $("#copyYear").text(new Date().getFullYear());
})(jQuery);
