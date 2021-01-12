var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt(" Welcome to ABC Bakery. What do you want to order sir/ma'am?");

search = search.toLowerCase();
var flag = 0;
for (i = 0; i< A.length; i++)
{
    if (search === A[i])
    {
        alert( A[i] + " is available at index " + i + " in our bakery");
        flag = 1;
    }
    
}

if (flag === 0){
    alert("We are sorry. " + search + " is not available in our Bakery");
}