var start = "i'm starting";

function myfirst(){
console.log("Sup World");
}

(function(){
  var app = angular.module('RealTest', []);
  app.controller('TestController', function(){
    this.details = vdetails;
    this.picture = pic;
  });
  var vdetails = [
    
    {
    name:"Testing 123",
    testNum:1,
    succeed: true,
    price: '$3'
    },
    
   {
    name:"Testing 124",
    testNum:2,
    succeed: false,
    price: '$5'
    }
  ];
  var pic = "https://user-images.githubusercontent.com/16003525/33234973-ad15f752-d1ec-11e7-9224-7046c95b540a.png";
  
  function tool (inUse, design, x, y) {
    this.activated = inUse;
    this.sticker = design;
    this.xloc = x;
    this.yloc =y;
   // Names need paraethesis or not?//
  }
  
  var Heart = new tool(false, "heart", 0, 0);
  
})();


my first();
