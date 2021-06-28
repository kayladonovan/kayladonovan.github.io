$(document).ready(function(){
  // Activate Carousel
  $("#carouselControls").carousel();
    
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#carouselControls").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#carouselControls").carousel("next");
  });  
});