$(document).ready(function () {
  "use strict";
  $(".header__desc-btn").click(function () {
    $(this).toggleClass("active");
    $(".header__dropdown").toggleClass("active");
    if ($(".header__dropdown").hasClass("active")) {
      $(".header__modal").css("display", "block");
      $("body").css("overflow", "hidden");
    } else {
      $(".header__modal").css("display", "none");
      $("body").css("overflow", "auto");
    }
  });

  $(".header__modal").click(function () {
    $(this).css("display", "none");
    $(".header__dropdown").removeClass("active");
    $(".header__desc-btn").removeClass("active");
    $("body").css("overflow", "auto");
  });

  $(".header__mobile__btn").click(function () {
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product__images .slider").slick({
    prevArrow: $(".product__prev"),
    nextArrow: $(".product__next"),
    responsive: [
      {
        breakpoint: 7200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          customPaging: function (slider, i) {
            return '<a class="dot"></a>';
          },
        },
      },
    ],
  });

  $(".sertificate__slider").slick({
    prevArrow: $(".sertificate__prev"),
    nextArrow: $(".sertificate__next"),
    responsive: [
      {
        breakpoint: 7200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".reviews__slider").slick({
    prevArrow: $(".reviews__prev"),
    nextArrow: $(".reviews__next"),
  });

  $(".main__item").each(function () {
    if (window.matchMedia("(min-width: 576px)").matches) {
      if ($(this).attr("data-bg")) {
        $(this).css({
          background: "url(" + $(this).data("bg") + ")",
          "background-position": "50% 0%",
          "background-repeat": "no-repeat",
          "background-size": "cover",
        });
      }
    } else {
      if ($(this).attr("data-bg")) {
        $(this).css({
          background: "url(" + $(this).data("bg") + ")",
          "background-position": "90% 0%",
          "background-repeat": "no-repeat",
          "background-size": "cover",
        });
      }
    }
  });

  $(".main__slider").slick({
    infinite: true,
    speed: 350,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    customPaging: function (slider, i) {
      return '<a class="dot"></a>';
    },
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

  $(".shop__img").hover(function () {
    $(this).children().eq(1).toggleClass("active");
  });

  $(".sertificate__item").hover(function () {
    $(this).toggleClass("active");
  });

  $(".product__description .drop .item h3").click(function () {
    $(this).parent().toggleClass("active");
  });

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });
  $("#order").click(function (event) {
    event.preventDefault();
    $(".account__content .order").addClass("active");
    $(".account__content .personal").addClass("active");
    $(".account__content .address").removeClass("active");
    $(".account__content .discounts").removeClass("active");
  });

  $("#lk").click(function (event) {
    event.preventDefault();
    $(".account__content .order").removeClass("active");
    $(".account__content .personal").removeClass("active");
    $(".account__content .address").removeClass("active");
    $(".account__content .discounts").removeClass("active");
  });
  $("#discounts").click(function (event) {
    event.preventDefault();
    $(".account__content .discounts").addClass("active");
    $(".account__content .personal").addClass("active");
    $(".account__content .order").removeClass("active");
    $(".account__content .address").removeClass("active");
  });
  $("#addres").click(function (event) {
    event.preventDefault();
    $(".account__content .address").addClass("active");
    $(".account__content .order").removeClass("active");
    $(".account__content .personal").addClass("active");
    $(".account__content .discounts").removeClass("active");
  });

  $(".account__content .address .table .radio input").each(function (
    index,
    value
  ) {
    $(this).click(function () {
      $(".account__content .address .table .radio input").prop(
        "checked",
        false
      );
      $(this).prop("checked", true);
    });
  });

  $(".footer__up").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      2000
    );
  });

  $("#btnMobFilter").click(function () {
    $("#mobFilter").css("display", "block");
  });

  $("#closeMobFilter").click(function () {
    $("#mobFilter").css("display", "none");
  });

  $("#baseFilter").niceSelect();
});
