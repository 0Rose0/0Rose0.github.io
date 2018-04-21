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
          //var base_image = new Image();
 // base_image.src = reader.result;
//  base_image.onload = function(){
    //context.drawImage(base_image, 0, 0);
       
 //}
       }
       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
       
       
       
      
 
 
 
       
       
    make_base();
   //makeGrey();
  }
  previewFile();  //calls the function named previewFile()
   
   var canvas = document.getElementById('viewPort'),
 var context = canvas.getContext('2d');

function make_base()
{
 var preview = document.getElementById('pic');
 
 
  var base_image = new Image();
  base_image.src = preview.src;
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0);
  }
}

function makeGrey(){
var c=document.getElementById("viewPort");
var ctx=c.getContext("2d");
var img=document.getElementById("pic");
ctx.drawImage(img,0,0);

var imgData=ctx.getImageData(0,0,c.width,c.height);
// invert colors
for (var i=0;i<imgData.data.length;i+=4)
  {
  imgData.data[i]=255-imgData.data[i];
  imgData.data[i+1]=255-imgData.data[i+1];
  imgData.data[i+2]=255-imgData.data[i+2];
  imgData.data[i+3]=255;
  }
ctx.putImageData(imgData,0,0);
 
    }

// functions









