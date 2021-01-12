var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var length = arr1.length;

var originalArray = arr1.toString();

document.write("<h1> Original Array with duplicate values</h1><br>");
document.write(originalArray);

var uniqueArray = [];
 var i;       

for(i=0; i < arr1.length; i++){
    if(uniqueArray.indexOf(arr1[i]) === -1) {
        uniqueArray.push(arr1[i]);
    }
}

var unique = uniqueArray.toString();
console.log(unique);
document.write("<br><h1> Duplicate entries removed from array</h1><br>");
document.write(unique);
