var colors = ["blue", "green","yellow"];
var length = colors.length;
//document.write(length);
document.write("<h1>Original array</h1>");
document.write("<br>");
var i;
for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}
document.write("<br>");
var colorInsert = prompt(" Enter a color name in the end of array");
colors.push(colorInsert);
length = colors.length;
//var i;
document.write("<br>");
document.write("<h1>An element inserted at the end of Original array</h1>");
document.write("<br>");
for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}