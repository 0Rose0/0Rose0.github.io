JQuery(document).ready(function(){
  //$(document) instead?//
  
  var newWord = $(<p> "Selected" </p>);
                  
  
  $('.tool:first').append(newWord);
  
  $(".flexsides").last();
  
  $(".flexsides").first().children(".tool").next();


});
