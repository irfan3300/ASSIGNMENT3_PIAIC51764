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