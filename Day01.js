var temp = "))(((((";
var floorNumber = 0;
function func() {
    for (var i = 0; i < temp.length; i++)
    {
    if (temp.charAt(i) == "(")
        floorNumber++;
    else if (temp.charAt(i) == ")")
        floorNumber--;
    }
    alert(floorNumber);
}