$(document).ready(function(){
  //JQuery(document) instead?//

          var selected = '';        
 // $("button").remove();
 // $(".uploadbutton").remove();
  
  
  
  $("button").on("click", function () {
       // Get the vertical coordinate
    if (this.id == selected){
      alert("Same");
    }
    else if (pastIcon == ''){
      selected = this.id;
      {
      else{
        var pastIcon = document.getElementById(selected);
        pastIcon.style.display = "none";
        selected = this.id;
  
      }
 
    });

 
  
  $(".picture").click(function () {
       // Get the vertical coordinate
    alert( "Handler for .click() called." );
var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY; 
    //var icon = document.getElementById(selected);
    var icon = document.getElementById("#heartAppear");
    icon.style.display = '';
    icon.style.position = 'absolute';
    icon.style.left = x + 'px';
    icon.style.top = y + 'px';
    
  });
});
