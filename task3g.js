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

document.write("<h1>Deleting colors from specified location in the array</h1>");
document.write("<br>");
var indexArray;
indexArray = prompt(" Enter the position from which you want to delete the colors. The size of array is " + length );
colorInsert = prompt(" Enter the number of colors to delete ");
colorInsert = Number(colorInsert);
colors.splice(indexArray, colorInsert);
length = colors.length;

for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}



