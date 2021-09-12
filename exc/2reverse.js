function reV()
{
    var num1=Number(document.querySelector('#num1').value);
    num1=num1+"";
    var num2= num1.split("").reverse().join("");
    document.getElementById("rev").innerHTML = num2;
}
function palCheck()
{
    var pal = String (document.querySelector('#pal').value);
    if (pal=="") pal="string empty!!"
    pal = pal.toLowerCase();

    document.getElementById("pali").innerHTML = pal;
}