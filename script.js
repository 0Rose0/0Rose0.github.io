var start = "i'm starting";



//(function(){
  var app = angular.module('RealTest', []);
  app.controller('TestController', function($scope){
    $scope.details = vdetails;
    $scope.picture = pic;
    
     //this.details = vdetails;
    //this.picture = pic;
  });
  var vdetails = [
    
    {
    name:"Testing 123",
    testNum:1,
    succeed: true,
    price: '3'
    },
    
   {
    name:"Testing 124",
    testNum:2,
    succeed: false,
    price: '5'
    }
  ];
  var pic = "https://user-images.githubusercontent.com/16003525/33234973-ad15f752-d1ec-11e7-9224-7046c95b540a.png";
  
     function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();
       reader.onloadend = function () {
           preview.src = reader.result;
       }
       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
    make_base();
  }
  previewFile();  //calls the function named previewFile()
   
   var canvas = document.getElementById('viewPort'),
context = canvas.getContext('2d');
make_base();
function make_base()
{
 var preview = document.getElementById('pic');
 
 
  base_image = new Image();
  base_image.src = preview.src;
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0);
  }
}

// functions









