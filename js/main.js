$(document).ready(function() {
 

  // owl carousel
  // ==================


  $("#landing-slider").owlCarousel({

      slideSpeed : 300,
      pagination : false,
      singleItem:true
 
  });

  // fit the sliding image on the div it contais
  // and make the height equal to full viewport
  var viewportHeight = $( window ).height();
  $("#landing-slider .owl-carousel-item img").css("height", viewportHeight);

  // if user scroll then
  // remove the transparen class of the navigation bar
  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();

    if(scrollTop>10){
      $("nav").removeClass("navbar-transparent").css("transition","1s");
    }
    else if(scrollTop <= 10){
      $("nav").addClass("navbar-transparent").css("transition","1s");
    }
  });


  // response of hover on project 
  // on the navbar
  //=================================
  $("#project-hover").hover(function(){

    $("#project-hover-content").removeClass("hide-nav-hover-content");
    $("#project-hover-content").addClass("show-nav-hover-content");

    

  },function(){

    //$("#project-hover-content").removeClass("show-nav-hover-content");
    //$("#project-hover-content").addClass("hide-nav-hover-content");
    

    setTimeout(function(){

      if(!$('#project-hover-content').is(':hover')){

        $("#project-hover-content").removeClass("show-nav-hover-content");
        $("#project-hover-content").addClass("hide-nav-hover-content");
      }

      
    },100);

    /*setTimeout(function(){
      $("#project-hover-content").addClass("hide-nav-hover-content");
    },1000);*/

    /*setTimeout(function() {
       $var3.removeClass("show-nav-hover-content");
       
   }, 100);*/
  });

  $("#project-hover-content").hover(function(){

    $("#project-hover-content").removeClass("hide-nav-hover-content");
    $("#project-hover-content").addClass("show-nav-hover-content");

  },function(){

    $("#project-hover-content").removeClass("show-nav-hover-content");
    $("#project-hover-content").addClass("hide-nav-hover-content");

  });
  

  // counter section
  //==========================

  $(".timer").countTo();


    
  //Portfolio - START CODE
  //==========================

  var $container = $('.masonry-items');
  $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });
  
  $('.portfolio-filter li a').click(function(){
     
      $('.portfolio-filter li .active').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
       });
       return false;
  }); 





  
 
});