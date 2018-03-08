$(document).ready(function(){
  //JQuery(document) instead?//

          var selected = '';        
 // $("button").remove();
 // $(".uploadbutton").remove();
  
  
  
  $("button").on("click", function () {
      
   alert(this.id);
    
 
    });

 
  
  $(".picture").on("click", function () {
       // Get the vertical coordinate
var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY; 
    var icon = document.getElementById(selected);
    icon.style.display = '';
    icon.style.position = 'absolute';
    icon.style.left = x + 'px';
    icon.style.top = y + 'px';
    
  });
});
