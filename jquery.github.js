JQuery(document).ready(function(){
  //$(document) instead?//

  var selected = '';
  
  var newWord = $(<p> "Selected" </p>);
                  
  $('.flexsides:first').append(newWord);
  
  $('.flexsides:first button').first().remove();
                  
  $('.tool:first');
  
  
  
  
  
  $(".flexsides").last();
  
  $(".flexsides").first().children(".tool").next();


  
 
  $('button').on('click', function () {
       // Get the vertical coordinate
    if (selected == selected){
      //nothing?
    }
    else{
      var pastIcon = document.getElementById(selected);
      if (pastIcon == ''){
         selected = this.id;
   alert(this.id);
        
      }
      else{
        pastIcon.style.display = "none";
        selected = this.id;
   alert(this.id);
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
});
