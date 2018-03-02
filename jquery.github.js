JQuery(document).ready(function(){
  //$(document) instead?//

  var selected = '';
  
  var newWord = $(<p> "Selected" </p>);
                  
  $('.flexsides:first').append(newWord);
  
  $('.flexsides:first button').first().remove();
                  
  $('.tool:first');
  
  $('button').on('click', function () {
       // Get the vertical coordinate
switch (selectedDesign){
      case "Heart" 
        selected = 'heartAppear';
    break;
      
      case "Square" 
        ///draw spuare;
      break;
      
  }
    
  });
  
  $('.picture').on('click', function () {
       // Get the vertical coordinate
var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY; 
    var icon = document.getElementById(selected);
    icon.style.display = '';
    icon.style.position = 'absolute';
    icon.style.left = x + 'px';
    icon.style.top = y + 'px';
    
  });
  
  
  
  $(".flexsides").last();
  
  $(".flexsides").first().children(".tool").next();


});
