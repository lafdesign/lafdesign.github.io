document.addEventListener('DOMContentLoaded', function () {

var widthWindow  = window.innerWidth ;   // Create global widow dimension variabel
var heightWindow = window.innerHeight; 

var rangeX  =   '100';                  // Base value of x and y coordinates 
var scopeX  =   widthWindow/rangeX;    //  Always is = 1

var rangeY  =   rangeX;     			// Fix Y to X at 1:1 
var scopeY  =   heightWindow/rangeY;   // Define page height in terms of rangeX (n)
   
var point   =   rangeX + " " + rangeY;                      // Create dynamic single point node (testing variable)  p=v (Euclidean vector)

var viewBox =   0 + " " + 0 + " " + rangeX + " " + rangeY; // Fill viewport base 100                       http://www.w3schools.com/js/js_operators.asp
														   // viewBox = <min-x> <min-y> <width> <height>   https://sarasoueidan.com/blog/svg-coordinate-systems/


direction = Math.atan2(offY,  offX) / Math.PI * 180;   // Define deg angle of p = (point) in x and y    //  http://stackoverflow.com/questions/3967238/javascript-formula-to-get-direction-from-x-y-coordinates

var offX = Math.cos(direction) ;     //  offX is position x
var offY = Math.sin(direction);		//  offY is position y

pi = Math.PI;
radians = Math.atan2(offY, offX);  //radians = degrees / 180 * pi  
degrees = radians / pi * 180;


// var a = 'a1, a2, a3';         //vector representaion
// var b = 'b1, b2, b3';

// var c = a - b               // c = 


PVector.prototype.mag = function() {                //https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/vector-magnitude-normalization
    return sqrt(this.x*this.x + this.y*this.y);
};


a . b = abs(a) abs(b) Math.cos(theta)              // theta is degree and is angle between A and B.  https://en.wikipedia.org/wiki/Dot_product#Geometric_interpretation















// !! Dot Product & Angle Between Vectors !!   https://youtu.be/p8BZTFNSKIw

q v = v q                  		//porperty 1
q (v + w ) = q v + v w            											 //porperty 2
o v = o                           											//porperty 3
v v = Math.sqrt(v) // = Math.pow(a, 2) + Math.pow(b, 2);    // a^2 + b^2   //porperty 4
(c q) v = c (q v) // = q (c v)											 //porperty 5

























//x = [(x1^(n+1) - x0^(n+1))*y + x0^(n+1)]^(1/(n+1))     // http://stackoverflow.com/questions/918736/random-number-generator-that-produces-a-power-law-distribution

var body = document.getElementsByTagName('body')[0];
body.style.margin  = "0"; 
body.style.padding = "0"; 

var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');    //Create svg element  http://www.w3schools.com/svg/svg_reference.asp
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


d3.select("body")          //TEST D3   https://www.dashingd3js.com/adding-an-svg-element
.append("svg")
.attr("width", 50)
.attr("height", 50)

.append("circle")
.attr("cx", 25)
.attr("cy", 25)
.attr("r", 25)
.style("fill", "purple");




var viewPortWindow = document.createElementNS( "http://www.w3.org/1999/xhtml",'p');    //Create svg element  http://www.w3schools.com/svg/svg_reference.asp
body.appendChild(viewPortWindow);  

var viewPortWindow = document.getElementsByTagName('p')[0];                          //Get svg element
svg.setAttribute("id",    "viewPortWindow" ); 

var w = window.innerWidth          //  print (example) viewport values      //http://www.w3schools.com/jsref/prop_win_innerheight.asp
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("viewPortWindow");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";

});  // End DOMContentLoaded !