JQuery(document).ready(function(){
  //$(document) instead?//

  
  var newWord = $(<p> "Selected" </p>);
                  
  $('.flexsides:first').append(newWord);
  
  $('.flexsides:first button').first().remove();
                  
  $('.tool:first');
  
  $('button').on('click', function () {
       // Get the vertical coordinate

    
  });
  
  $('.picture').on('click', function () {
       // Get the vertical coordinate
var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY; 
    var snowball = document.getElementById("snowballAppear");
    snowball.style.display = '';
    snowball.style.position = 'absolute';
    snowball.style.left = x + 'px';
    snowball.style.top = y + 'px';
    
  });
  
  
  
  $(".flexsides").last();
  
  $(".flexsides").first().children(".tool").next();


});
