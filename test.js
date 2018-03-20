$(document).ready(function(){
  //JQuery(document) instead?//
var selected = '';
             
 // $("button").remove();
 // $(".uploadbutton").remove();
  
  $("button").on("click", function () {
    //var thisIcon = document.getElementById(this.id);
//var pastIcon = document.getElementById(selected);
    if (this.id == "heart"){
        selected = "heartAppear";
        }
     else if (this.id == "star"){
        selected = "starAppear";
        }
      else if (this.id == "flower"){
        selected = "flowerAppear";
        }
    else{
      alert("Not Icon");
    }
    
    
   
    });

// var iconObj = function(id, pic){
  // if (selected == "heartAppear"){
 //   id = "hearAppear";
   //  pic="https://user-images.githubusercontent.com/16003525/37293869-2a9ca6d0-25da-11e8-9c00-1ed78cae559a.png";
  // }
 //  else{
     
 //  }
   
   // return document.write(" <img class="icons" alt="id" id="id" style="display: none"  height="50" width="50" src="pic"/> ")
   
// }

 
  
  //$(".picture").on("click", function () {
     // $("button").remove();
    //var x = event.clientX;     // Get the horizontal coordinate
//var y = event.clientY; 
   //  var x = event.screenX;     // Get the horizontal coordinate
//var y = event.screenY;
  //  var NewIcon = document.getElementById(selected);
    
    
    //NewIcon.style.display = '';
   // NewIcon.style.position = 'absolute';
    //NewIcon.style.left = x + 'px';
    //NewIcon.style.top = y + 'px';
    
    
  
    
 // });
//});


 $(".picture").on("click", function () {
  var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY; 
   var icon = document.getElementById("selected");
   icon.style.display = '';
   icon.style.position = 'absolute';
    icon.style.left = x + 'px';
    icon.style.top = y + 'px';
    
  
    
 });
