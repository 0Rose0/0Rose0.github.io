$(document).ready(function(){
  //JQuery(document) instead?//

             
 // $("button").remove();
 // $(".uploadbutton").remove();
  
  

 

 
  
  $(".picture").on("click", function () {
     // $("button").remove();
    //var x = event.clientX;     // Get the horizontal coordinate
//var y = event.clientY; 
     var x = screen.clientX;     // Get the horizontal coordinate
var y = screen.clientY;
    var icon = document.getElementById("heartAppear");
    icon.style.display = '';
    icon.style.position = 'absolute';
    icon.style.left = x + 'px';
    icon.style.top = y + 'px';
    
  
    
  });
});


 //$(".picture").on("click", function () {
     // $("button").remove();
   // var x = event.clientX;     // Get the horizontal coordinate
//var y = event.clientY; 
  //  var icon = document.getElementById("heartAppear");
    //icon.style.display = '';
   // icon.style.position = 'absolute';
    //icon.style.left = x + 'px';
    //icon.style.top = y + 'px';
    
  
    
//  });
