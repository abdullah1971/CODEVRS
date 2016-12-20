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




    
  //Portfolio - START CODE
  //==========================
/*
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


*/


/*==============================================================*/
//Portfolio - START CODE
/*==============================================================*/
if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".porfilio-item").click(function (e) {
        if (!$(this).hasClass("hover")) {
            $(this).addClass("hover");
        }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(this).closest(".porfilio-item").hasClass("hover")) {
            $(this).closest(".porfilio-item").removeClass("hover");
        }
    });
} else {
    // handle the mouseenter functionality
    $(".porfilio-item").mouseenter(function () {
        $(this).addClass("hover");
    })
            // handle the mouseleave functionality
            .mouseleave(function () {
                $(this).removeClass("hover");
            });
}

// use for portfolio sotring with masonry

$portfolio = $('.masonry-items');
$portfolio_selectors = $('.portfolio-filter > li > a');
$portfolio_selectors_li = $('.portfolio-filter li');

hashfilter = "*";
if(location.hash!=""){
    var temphashfilter = "." + location.hash.substr(1);
    if (temphashfilter==".*")
    {
        temphashfilter="*";
    }

    $portfolio_selectors.each(function(){
             if ($(this).attr("data-filter") == temphashfilter) {
                $portfolio_selectors_li.removeClass('active');
                $portfolio_selectors_li.find('a[data-filter="'+temphashfilter+'"]').parent('li').addClass("active");

                var autoscrolltoelement = function(){
                    $("html, body").animate({
                     scrollTop: $('.portfolio-filter').parents('section').offset().top-60
                    });
                };
                setTimeout(autoscrolltoelement, 500);
                hashfilter=temphashfilter;
             }
         });        
}



$portfolio.imagesLoaded(function () {
    $portfolio.isotope({
        filter: hashfilter,
        itemSelector: 'li',
        layoutMode: 'masonry'
    });
});

// use for simple masonry ( for example home-photography.html page )

$masonry_block = $('.masonry-block-items');
$masonry_block.imagesLoaded(function () {
    $masonry_block.isotope({
        itemSelector: 'li',
        layoutMode: 'masonry'
    });
});


$portfolio_selectors.on('click', function () {
    $portfolio_selectors.parent().removeClass('active');
    $(this).parent().addClass('active');
    var selector = $(this).attr('data-filter');
    $portfolio.isotope({filter: selector});
   
    if (selector.substr(1)!="" && selector.substr(1)!="#")
    {
         location.hash = selector.substr(1);     
    }
    else
    {
        location.hash ="*";
    }
    return false;
});

$blog = $('.blog-masonry');
$blog.imagesLoaded(function () {

    //ISOTOPE FUNCTION - FILTER PORTFOLIO FUNCTION
    $blog.isotope({
        itemSelector: '.blog-listing',
        layoutMode: 'masonry'
    });
});

$(window).resize(function () {
    setTimeout(function () {
        $portfolio.isotope('layout');
        $blog.isotope('layout');
        $masonry_block.isotope('layout');
    }, 500);
});
/*==============================================================*/
//Portfolio - END CODE
/*==============================================================*/

/* for  appear.js work
=========================*/
    
    // feature
    $("#features").appear();
    $('#features').on('appear',function() {
        //alert("abcd");
        $("#feature-section-01").addClass("animated bounceInLeft");
        $("#feature-section-02").addClass("animated bounceInLeft");
        $("#feature-section-03").addClass("animated bounceInLeft");
    });
    
    // counter
    $("#counter").appear();
    $("#counter").on('appear',function(){

        $(".timer").countTo(); // here is a bug , number fructuates while scrolling

        $("#counter-01").addClass("animated bounceInUp  counter-animation-delay");
        $("#counter-02").addClass("animated bounceInUp  counter-animation-delay");
        $("#counter-03").addClass("animated bounceInUp  counter-animation-delay");
        $("#counter-04").addClass("animated bounceInUp  counter-animation-delay");

    });


    // key person
    $("#key-person").appear();
    $("#key-person").on("appear",function(){

        $("#key-person-01").addClass("animated bounceInUp");
        $("#key-person-02").addClass("animated bounceInUp");
        $("#key-person-03").addClass("animated bounceInUp");

    });


    // testimonial
    $("#testimonial").appear();
    $("#testimonial").on("appear",function(){

        $("#testimonial-01").addClass("animated zoomInUp");
        $("#testimonial-02").addClass("animated zoomInUp");
        $("#testimonial-03").addClass("animated zoomInUp");

    });
  


 
});





/*fund us in google map*/

 
      function initMap() {
        var uluru = {lat: 22.815970, lng: 89.553930};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
     
    /*End find us*/