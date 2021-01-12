var allCities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = [];
var i;
var const1 = allCities.toString();
document.write("Cities list: <br>");
document.write(const1);
document.write("<br>");




 var selectCity =  prompt("select index number of city from all cities list from where the list of selectec cities start");
 var sizeOfSelectedCities = prompt("Enter number of cities to be copied to selected cities list");
selectCity = Number(selectCity);
sizeOfSelectedCities = Number(sizeOfSelectedCities);
 var i;
 var j = 0;
 for (i = selectCity; i <= sizeOfSelectedCities; i++)
 {
     selectedCities[j] = allCities[i];
    j++;
 }

 document.write("<br>");
 var const2 = selectedCities.toString();
 document.write("Selected Cities:");
 document.write("<br>");
 document.write(const2);
