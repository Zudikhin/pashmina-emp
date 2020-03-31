$(document).ready(function() {
  "use strict";
  $(".header__desc-btn").click(function() {
    $(this).toggleClass("active");
    $(".header__dropdown").toggleClass("active");
  });

  $(".header__mobile__btn").click(function() {
    $(this).toggleClass("active");
    $(".header__mobile__nav").toggleClass("active");
  });

  $(".recommend__slider").slick({
    prevArrow: $(".recommend-prev"),
    nextArrow: $(".recommend-next"),
    responsive: [
      {
        breakpoint: 7200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".product__images .slider").slick({
    prevArrow: $(".product__prev"),
    nextArrow: $(".product__next"),
    responsive: [
      {
        breakpoint: 7200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".sertificate__slider").slick({
    prevArrow: $(".sertificate__prev"),
    nextArrow: $(".sertificate__next"),
    responsive: [
      {
        breakpoint: 7200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".reviews__slider").slick({
    prevArrow: $(".reviews__prev"),
    nextArrow: $(".reviews__next")
  });

  $(".main__item").each(function() {
    if ($(this).attr("data-bg")) {
      $(this).css({
        background: "url(" + $(this).data("bg") + ")",
        "background-position": "50% 0%",
        "background-repeat": "no-repeat",
        "background-size": "cover"
      });
    }
  });

  $(".main__slider").slick({
    infinite: true,
    speed: 350,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    customPaging: function(slider, i) {
      return '<a class="dot"></a>';
    }
  });

  function bar() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          $(".shop__bug").css({ width: width + "%" });
        }
      }
    }
  }
  bar();

  $(".shop__img").hover(function() {
    $(this)
      .children()
      .eq(1)
      .toggleClass("active");
  });

  $(".shop__btn-desc").click(function() {
    $(this).addClass("loading");
  });

  $(".shop__btn-mob").click(function() {
    $(this).addClass("loading");
  });

  $(".sertificate__item").hover(function() {
    $(this).toggleClass("active");
  });

  $(".product__description .drop .item h3").click(function() {
    $(this)
      .parent()
      .toggleClass("active");
  });
});
