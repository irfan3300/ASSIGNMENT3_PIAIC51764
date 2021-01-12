var colors = ["blue", "green","yellow"];
var length = colors.length;
//document.write(length);
document.write("<h1>Original array</h1>");
document.write("<br>");
for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}
document.write("<br>");
colorInsert = prompt(" Enter a color name in the start of array");
var colorInsert2 = prompt(" Enter second color name in the start of array");
colors.unshift(colorInsert);
colors.unshift(colorInsert2);

length = colors.length;

document.write("<h1>Two colors inserted at the start of Original array</h1>");
document.write("<br>");
for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}