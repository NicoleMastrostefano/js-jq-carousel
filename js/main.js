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
})
//   $(".fa-circle").click(
//     function() {
//       $(this).addClass("active");
//       if (true) {
//       prevImage();
//     }
//   });
//
//   $(".fa-circle").click(
//     function() {
//       var circleClicked = $(".fa-circle.active");
//       if (circleClicked == true) {
//         nextImage()
//       }
//       console.log(event);
//     }
//   );
// });

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
