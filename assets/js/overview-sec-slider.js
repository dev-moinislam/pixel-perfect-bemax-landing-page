

$(document).ready(function(){
      $('.latest-blog-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev blog-prev">&#8592;</button>',
        nextArrow: '<button type="button" class="slick-next blog-next ">&#8594;</button>'
      });
  
      $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev  testimonial-prev">&#8592;</button>',
        nextArrow: '<button type="button" class="slick-next  testimonial-next">&#8594;</button>'
      });
    });
 