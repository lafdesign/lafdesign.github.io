

var reset = document.getElementsByTagName('body')[0];


reset.style.margin = "0"; 
reset.style.padding = "0"; 



var svg = document.getElementsByTagName('svg')[0]; //Get svg element

var square = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
square.setAttribute("width","100"); 
square.setAttribute("height","100");
square.setAttribute("stroke", "#000"); //Set stroke colour
square.setAttribute("strokeWidth", "3");


var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
circle.setAttribute("cx","50"); 
circle.setAttribute("cy","50");
circle.setAttribute("r","50");
circle.style.stroke = "#000"; //Set stroke colour
circle.style.strokeWidth = "3"; //Set stroke width
circle.style.fill = "#565656"; //Set fill
circle.style.position = "absolute"; 


svg.appendChild(square);
svg.appendChild(circle);


