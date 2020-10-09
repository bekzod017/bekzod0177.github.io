// var swiper = new Swiper('.swiper-container', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 20,
//       stretch: 0,
//       depth: 200,
//       modifier: 1,
//       slideShadows : true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     loop: true,
//     autoplay: {
//       delay: 800,
//       disableOnInteraction: false,
//     },
//   });



  //  SCROLL TOP=======================

$(document).ready(function () {
  $("#top").click(function () {
      $("html").animate({
          "scrollTop": 0
      }, 1000);
  });

  $(window).scroll(function () {
      if ($(window).scrollTop() > 500) {
          $("#top").fadeIn(200);
      } else {
          $("#top").fadeOut(800);
      }
  });
});


// $(document).ready(function () {
//   $("#top").click(function () {
//       $("html").animate({
//           "scrollTop": 0
//       }, 1000);
// })

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 200) {
//       $("#top").fadeIn(500);
//   } else {
//       $("#top").fadeOut(500);
//   }
// });
// });
