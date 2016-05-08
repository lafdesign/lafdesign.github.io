document.addEventListener('DOMContentLoaded', function () {



var rangeX  = '100';
var viewBox = 0 + " " + 0 + " " + rangeX + " " + rangeX;



var body = document.getElementsByTagName('body')[0];
body.style.margin  = "0"; 
body.style.padding = "0"; 

var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg'); 
body.appendChild(svg);

var svg = document.getElementsByTagName('svg')[0]; //Get svg element
svg.setAttribute("viewBox"  ,  viewBox  ); 

var square = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
square.setAttribute("width"  , rangeX   ); 
square.setAttribute("height" , rangeX   );
square.setAttribute("stroke" , "#000"   );  
square.setAttribute("strokeWidth" , "3" );


var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
circle.setAttribute("cx" , rangeX/2 ); 
circle.setAttribute("cy" , rangeX/2 );
circle.setAttribute("r"  , rangeX/2 );
circle.style.stroke = "#000"; 
circle.style.strokeWidth = "3"; 
circle.style.fill = "#565656"; 
circle.style.position = "absolute"; 


svg.appendChild(square);
svg.appendChild(circle);


});