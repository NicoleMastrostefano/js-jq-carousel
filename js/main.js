$(document).ready(
  function(){
  $(".prev").click(
    function(){
      prevImage();
      console.log("prevImage");
    }
  );

  $(".next").click(
    function() {
      nextImage();
      console.log("nextImage");
    }
  );

  $(document).keydown(
    function(){
      if(event.keyCode == 37){
        console.log("keycode 37")
        prevImage();
      } if (event.keyCode == 39) {
        console.log("keycode 39")
        nextImage();
      }
    }
  );

  $(".fa-circle").click(
    function() {
      faCircle();
      var dotIndex = $(this).index();
      var images = $(".images img");
      $(this).addClass("active");
      $(images[dotIndex]).addClass("active");
    }
  );
  }
);


  function nextImage(){
    var activeImage= $(".images img.active");
    var activeDot= $(".nav i.active");

    activeImage.removeClass("active");
    activeDot.removeClass("active");
    if (activeImage.hasClass("last") == true ){
      $(".images img.first").addClass("active");
      $(".nav i.first").addClass("active");

    } else{
      activeImage.next().addClass("active");
      activeDot.next().addClass("active");
    }
  }

  function prevImage(){
    var activeImage= $(".images img.active");
    var activeDot= $(".nav i.active")
    activeImage.removeClass("active");
    activeDot.removeClass("active");

    if (activeImage.hasClass("first") == true){
      $(".images img.last").addClass("active");
      $(".nav i.last").addClass("active");
    } else{
      activeImage.prev().addClass("active");
      activeDot.prev().addClass("active");
    }
  }

  function faCircle () {
    var activeImage = $(".images img.active");
    var activeDot = $(".nav i.active");
    activeImage.removeClass("active");
    activeDot.removeClass("active");
  }
