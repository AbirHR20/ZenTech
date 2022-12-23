$(document).ready(function () {
  //type js

  var typed = new Typed('.element', {
    strings: ["ZENTECH", "IT SOLUTION", "TECHNOLOGY"],
    typeSpeed: 500,
    loop: true,
  });

  //slick slider

  $('.services-slider').slick({
    slidesToShow: 4,
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>'
  });

  $('.project-slider').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10,
    speed: 5000,
  });

  $('.team-slider').slick({
    slidesToShow: 3,
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>'
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    asNavFor:'.assist-slider',
  });

  $('.assist-slider').slick({
    slidesToShow: 3,
    arrows : false,
    asNavFor:'.testimonial-slider',
  });

  //wow js

  new WOW().init();

  //venobox
  new VenoBox({
    selector: ".venobox"
  });

  //peralax js

  $('.jarallax').jarallax({


  });

  //counter up

  $('.counter').counterUp({
    delay: 10,
    time: 5000
  });

  //progress bar

  $('.jqueryscript').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#5F2DEE',
    backgroundColor: '#EEEEEE',
    borderRadius: '0px',
    height: '10px',
    width: '100%',
    ShowProgressCount: true,
    duration: 7000,
  });

  $('.jqueryscript2').rProgressbar({
    percentage: 95,
    fillBackgroundColor: '#5F2DEE',
    backgroundColor: '#EEEEEE',
    borderRadius: '0px',
    height: '10px',
    width: '100%',
    ShowProgressCount: true,
    duration: 7000,
  });

  $('.jqueryscript3').rProgressbar({
    percentage: 85,
    fillBackgroundColor: '#5F2DEE',
    backgroundColor: '#EEEEEE',
    borderRadius: '0px',
    height: '10px',
    width: '100%',
    ShowProgressCount: true,
    duration: 7000,
  });

});