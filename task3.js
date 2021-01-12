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
var colorInsert = prompt(" Enter a color name in the start of array");
colors.unshift(colorInsert);
length = colors.length;
var i;
document.write("<h1>An element inserted at the first position of Original array</h1>");
document.write("<br>");
for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}
colorInsert = prompt(" Enter a color name in the end of array");
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

document.write("<h1>One color deleted from the start of  array</h1>");
document.write("<br>");
colors.shift();
length = colors.length;
for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}

document.write("<h1>One color deleted from the end of  array</h1>");
document.write("<br>");
colors.pop();
length = colors.length;
for(i = 0; i < length; i++ )
{
    document.write(colors[i]);
    document.write("<br>");
}


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



