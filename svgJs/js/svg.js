document.addEventListener('DOMContentLoaded', function () {

var widthWindow  = window.innerWidth ;   // Create global widow dimension variabel
var heightWindow = window.innerHeight; 

var rangeX  =   '100';                  // Base value of x and y coordinates 
var scopeX  =   widthWindow/rangeX;    //  Always is = 1

var rangeY  =   rangeX;     			// Fix Y to X at 1:1 
var scopeY  =   heightWindow/rangeY;   // Gives page height in terms of rangeX (n)
   
var point   =   rangeX + " " + rangeY;                      // Create dynamic single point node (testing variable)

var viewBox =   0 + " " + 0 + " " + rangeX + " " + rangeY; // Fill viewport 



var body = document.getElementsByTagName('body')[0];
body.style.margin  = "0"; 
body.style.padding = "0"; 

var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');    //Create svg element
body.appendChild(svg);  

var svg = document.getElementsByTagName('svg')[0];                          //Get svg element
svg.setAttribute("id",    "container" ); 
svg.setAttribute("class", "container" ); 
svg.setAttribute("viewBox",  viewBox  ); 

var square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');  //Create a rect in SVG's namespace
square.setAttribute("id"     , "square" );  
square.setAttribute("class"  , "square" ); 
square.setAttribute("width"  , rangeX   ); 
square.setAttribute("height" , rangeY   );
square.setAttribute("stroke" , "#000"   );  
square.setAttribute("strokeWidth" , "3" );


var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a circle in SVG's namespace
circle.setAttribute("id"   ,"circle" );  
circle.setAttribute("class","circle" ); 
circle.setAttribute("cx"   ,rangeX/2 ); 
circle.setAttribute("cy"   ,rangeY/2 );
circle.setAttribute("r"    ,rangeY/2 );
circle.style.stroke = "#000"; 
circle.style.strokeWidth = "3"; 
circle.style.fill = "#565656"; 
circle.style.position = "absolute"; 


svg.appendChild(square);
svg.appendChild(circle);


d3.select("body")     //TEST D3
.append("svg")
.attr("width", 50)
.attr("height", 50)

.append("circle")
.attr("cx", 25)
.attr("cy", 25)
.attr("r", 25)
.style("fill", "purple");


});