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
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    responsive: [{

      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true
      }

    }, {

      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });

  $('.project-slider').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10,
    speed: 5000,
    responsive: [{

      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true
      }

    }, {

      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });

  $('.team-slider').slick({
    slidesToShow: 3,
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    responsive: [{

      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true
      }

    }, {

      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        autoplay:true,
        arrows:false,
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    asNavFor:'.assist-slider',
    responsive: [{

      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true,
        autoplay:true,
        arrows: false,
      }

    }, {

      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        autoplay:true,
        arrows:false,
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });

  $('.assist-slider').slick({
    slidesToShow: 3,
    arrows : false,
    asNavFor:'.testimonial-slider',
    responsive: [{

      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }

    }, {

      breakpoint: 575,
      settings: "unslick" // destroys slick

    }]
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