var nameOfStudent= [];
var marks = [];
var counter;


for (counter = 0 ; counter <= 2 ; counter++)

{
   
    nameOfStudent[counter] =  prompt(" Enter the name of student");
   marks[counter] = prompt("Enter the marks of student " + nameOfStudent[counter]);
   if (marks[counter] > 500)
   {
    marks[counter] = prompt("Please re-enter the marks of student " + nameOfStudent[counter] + "(Range : 0 - 500)");
   }
}
for (counter = 0 ; counter <= 2 ; counter++)
{
    var Percentage = (marks[counter] /500) * 100;
   document.write(" <br> Score of " + nameOfStudent[counter] + " is " + marks[counter] + " . Percentage : " +  Percentage);
   
}
