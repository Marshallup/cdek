"use strict";

var html = document.documentElement,
    body = document.body,
    hdBurger = document.querySelector(".header-burger"),
    hdMenu = document.querySelector(".header-menu-wrap"),
    bgShadow = document.querySelector(".bg-shadow");

hdBurger.onclick = function () {
  hdMenu.classList.add("header-menu-wrap--active");
  bgShadow.classList.add("bg-shadow--active");
  body.classList.add("lock");
  html.classList.add("lock");
};

hdMenu.onclick = function () {
  hdMenu.classList.remove("header-menu-wrap--active");
  bgShadow.classList.remove("bg-shadow--active");
  body.classList.remove("lock");
  html.classList.remove("lock");
}; // Якорные ссылки


$('a[href^="#"]').click(function (e) {
  e.preventDefault();
  var anchor = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(anchor).offset().top
  }, 1000);
}); // Анимация при скролле

var animItems = $("._anim-items");

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    animItems.each(function () {
      var animItem = $(this),
          animItemHeight = animItem.height(),
          animItemOffset = animItem.offset().top,
          animStart = 1;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.addClass("_active");
      } // else {
      //   if (!animItem.hasClass("_anim-no-hide")) {
      //     animItem.removeClass("_active");
      //   }
      // }

    });
  };

  $(window).on("scroll", animOnScroll);
  animOnScroll();
}