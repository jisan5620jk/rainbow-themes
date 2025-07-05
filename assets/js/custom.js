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
        const panels = gsap.utils.toArray(".service-panel-pin");

        panels.forEach((panel, index) => {
          gsap.set(panel, { zIndex: 10 + index });

          gsap.set(panel, { top: index * 80 });

          ScrollTrigger.create({
            trigger: panel,
            start: "top 10%",
            endTrigger: ".service-pin-wrapper",
            end: "bottom 90%",
            pin: true,
            pinSpacing: false,
            scrub: 1,
            markers: false,
          });

          ScrollTrigger.create({
            trigger: panel,
            start: "top 10%",
            end: "bottom 100%",
            scrub: 1,
            markers: false,
            onUpdate: (self) => {
              if (index === panels.length - 1) {
                gsap.to(panel, {
                  scale: 1,
                  filter: "none",
                  overwrite: true,
                  duration: 0.3,
                  ease: "power2.out",
                });
                return;
              }

              const baseScaleAtProgress1 = 0.8;
              const scaleStep = 0.05;
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

  // 37. testi Process Slider
  ///////////////////////////////////////////////////////

  var swiper = new Swiper(".testi-thumb-slider", {
    spaceBetween: 18,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: true,
  });
  var swiper2 = new Swiper(".testi-slider-content", {
    navigation: {
      nextEl: ".swiper-next-arrow",
      prevEl: ".swiper-prev-arrow",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // 53. Footer Copyright
  ////////////////////////////////////////////////

  $(".copy-year").text(new Date().getFullYear());
})(jQuery);
