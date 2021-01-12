var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var merge = a.concat(b);
var originalArray = merge.toString();
var array1 = a.toString();
var array2 = b.toString();
document.write("<h1> Array 1</h1><br>");
document.write(array1);
document.write("<h1> Array 2</h1><br>");
document.write(array2);

document.write("<h1> Array 1 and Array 2 merged with duplicate values</h1><br>");
document.write(originalArray);


var uniqueArray = [];
 var i;       

for(i=0; i < merge.length; i++){
    if(uniqueArray.indexOf(merge[i]) === -1) {
        uniqueArray.push(merge[i]);
    }
}
//uniqueArray.sort();
uniqueArray.sort(function (a , b){return a - b} );
var unique = uniqueArray.toString();
console.log(unique);
document.write("<br><h1> Union of Array 1 and Array 2</h1><br>");
document.write(unique);

