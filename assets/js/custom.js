(function () {
  ("use strict");

  let device_width = window.innerWidth;

  // 07. Odometer CounterUp
  /////////////////////////////////////////

  window.addEventListener("DOMContentLoaded", () => {
    const width = window.innerWidth;

    if (width >= 1200) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray(".project-panel-pin");

        panels.forEach((panel, index) => {
          gsap.set(panel, { zIndex: 10 + index });

          gsap.set(panel, { top: index * 100 });

          ScrollTrigger.create({
            trigger: panel,
            start: "top 10%",
            end:
              width >= 1600
                ? "bottom 90%"
                : width >= 1400
                ? "bottom 145%"
                : "bottom 150%",
            endTrigger: ".project-pin-wrapper",
            pin: true,
            pinSpacing: false, // false থেকে true করুন অথবা বাদ দিন এটা
            scrub: 1,
            markers: false,
          });

          ScrollTrigger.create({
            trigger: panel,
            start: "top 10%",
            end:
              width >= 1600
                ? "bottom 90%"
                : width >= 1400
                ? "bottom 145%"
                : "bottom 150%",
            scrub: 1,
            markers: false,
            onUpdate: (self) => {
              const baseScaleAtProgress1 = 0.8;
              const scaleStep = 0.1;

              const minScale = baseScaleAtProgress1 + index * scaleStep;
              const scale = 1 - self.progress * (1 - minScale);

              const maxBlur = 5;
              const blur = gsap.utils.mapRange(1, minScale, 0, maxBlur, scale);

              gsap.to(panel, {
                scale,
                filter: `blur(${blur}px)`,
                overwrite: true,
                duration: 0.3,
                ease: "power2.out",
              });
            },
          });
        });
      });

      return () => ctx.revert();
    }
  });

  // 23. Fade Scroll Animations
  ////////////////////////////////////////////////////

  if ($(".fade-left").length > 0) {
    if (device_width > 576) {
      $(".fade-left").each(function () {
        let element = this;

        gsap.set(element, {
          opacity: 0,
          x: -70,
          scale: 0.9,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          onEnter: function () {
            gsap.to(element, {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              stagger: 0.05,
            });
          },
          once: true,
        });
      });
    }
  }

  if ($(".fade-right").length > 0) {
    if (device_width > 576) {
      $(".fade-right").each(function () {
        let element = this;

        gsap.set(element, {
          opacity: 0,
          x: 70,
          scale: 0.9,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          onEnter: function () {
            gsap.to(element, {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              stagger: 0.05,
            });
          },
          once: true,
        });
      });
    }
  }

  if ($(".fade-wrapper").length > 0) {
    if (device_width > 576) {
      $(".fade-wrapper").each(function () {
        let section = $(this);
        let fadeItems = section.find(".fade-top");

        fadeItems.each(function (index, element) {
          let delay = index * 0;

          gsap.set(element, {
            opacity: 0,
            y: 100,
            scale: 0.8,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            onEnter: function () {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });
      });
    }
  }

  if ($(".fade-wrapper").length > 0) {
    if (device_width > 576) {
      $(".fade-wrapper").each(function () {
        let section = $(this);
        let fadeItems = section.find(".fade-down");

        fadeItems.each(function (index, element) {
          let delay = index * 0;

          gsap.set(element, {
            opacity: 0,
            y: -100,
            scale: 0.8,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            onEnter: function () {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });
      });
    }
  }

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
