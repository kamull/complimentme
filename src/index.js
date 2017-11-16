const compBtn = document.querySelector('.compliment');

compBtn.onclick = function () 
{
     var theImages = [{
        src:"http://images.zwani.com/graphics/compliments/images/018.gif",
        width: "500",
        height: "343"
    }, {
        src: "http://images.zwani.com/graphics/compliments/images/1.gif",
        width: "500",
        height: "343"
    }, {
        src: "http://images.zwani.com/graphics/compliments/images/106.gif",
        width: "500",
        height: "343"
    }, {
        src: "http://images.zwani.com/graphics/compliments/images/2.gif",
        width: "500",
        height: "343"
        
    }, {
        src: "http://images.zwani.com/graphics/compliments/images/8.gif",
        width: "500",
        height: "343"
        
    }, {
        src: "http://images.zwani.com/graphics/compliments/images/9.gif",
        width: "500",
        height: "343"
    }, {
        src: "http://images.zwani.com/graphics/compliments/images/asuperstar.gif",
        width: "500",
        height: "343"
    }, {
        src: "http://images.zwani.com/graphics/compliments/images/bagchips.gif",
        width: "500",
        height: "343"
    }, {
        src: "http://images.zwani.com/graphics/compliments/images/bearycool.gif",
        width: "500",
        height: "343"
    }];
    
    var thePics = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        thePics[i] = new Image();
        thePics[i].src = theImages[i].src;
        thePics[i].width = theImages[i].width;
        thePics[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
var iMin = Math.floor(Math.random() * (max - min + 1)) + min;
    return thePics[iMin];
    }  

// 0 is first image,   thePics.length - 1) is  last image
  
var newImage = getRandomInt(0, thePics.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.querySelector('.image').prepend(newImage);
};