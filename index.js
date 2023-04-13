function fadeAnime() {
  /* < .bm */
  $(".bm").each(function () {
    var elemPos = $(this).offset().top - 30; //
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeIn");
    } else {
      $(this).removeClass("fadeIn");
    }
  });
  /* .bm > */

  /* < welcome .wc */
  $(".wc").each(function () {
    var elemPos = $(this).offset().top - 20;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });
  /* welcome .wc > */

  /* < .welcome .link */
  $(".link").each(function () {
    var elemPos = $(this).offset().top - 30;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });
  /* welcome.link > */
}

$(window).scroll(function () {
  fadeAnime();
});

$(window).on("load", function () {
  fadeAnime();
});
