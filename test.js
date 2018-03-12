$(document).ready(function(){
  //JQuery(document) instead?//
var selected = '';
             
 // $("button").remove();
 // $(".uploadbutton").remove();
  
  $("button").on("click", function () {
    //var thisIcon = document.getElementById(this.id);
var pastIcon = document.getElementById(selected);
    if (this.id == selected){
      alert("Same");
    }
    else if (pastIcon == ''){
      selected = this.id;
      {
      else{
        
        pastIcon.style.display = "none";
        selected = this.id;
  
      }
 
    });

 

 
  
  $(".picture").on("click", function () {
     // $("button").remove();
    //var x = event.clientX;     // Get the horizontal coordinate
//var y = event.clientY; 
     var x = event.screenX;     // Get the horizontal coordinate
var y = event.screenY;
    var icon = document.getElementById("selected");
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
