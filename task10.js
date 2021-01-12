var A = [20,53,78,4,91,12];
var array1 = A.toString();
document.write("<h1> UNSORTED Array </h1><br>");
document.write(array1);
A.sort(function (a , b){return a - b} );
var unique = A.toString();
console.log(unique);
document.write("<br><h1> SORTED ARRAY</h1><br>");
document.write(unique);
