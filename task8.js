var i;

document.write("Counting<br>");
for (i = 1; i<=15; i ++){

    document.write(i + ",");
}

document.write("<br> Reverse Counting<br>");
for (i = 10; i>=1; i-- ){

    document.write(i + ",");
}
document.write("<br> Even Numbers<br>");
for (i = 0 ; i<=20;  ){

    document.write(i + ",");
    i = i + 2;
}
document.write("<br> Odd Numbers<br>");
for (i = 1 ; i<=20;  ){

    document.write(i + ",");
    i = i + 2;
}
document.write("<br> Series<br>");
for (i = 2 ; i<=20;  ){

    document.write(i + "K, ");
    i = i + 2;
}