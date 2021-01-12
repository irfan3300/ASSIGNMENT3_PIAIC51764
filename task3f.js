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


document.write("<h1>Adding colors at specified location in the array</h1>");
document.write("<br>");
var indexArray;
indexArray = prompt(" Enter the position at which you want to insert a color. The size of array is " + length );
colorInsert = prompt(" Enter the color name ");
colors.splice(indexArray, 0 , colorInsert);
length = colors.length;

for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}

