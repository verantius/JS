function reV()
{
    var num1=Number(document.querySelector('#num1').value);
    num1=num1+"";
    var num2= num1.split("").reverse().join("");
    document.getElementById("rev").innerHTML = num2;
}
function alph_change()
{
    var alph = String (document.querySelector('#alph').value);
    if (alph=="") alph="string empty!!"
    alph = alph.toLowerCase();
    alph = alph.split("").sort().join("");

    document.getElementById("alphi").innerHTML = alph;
}

