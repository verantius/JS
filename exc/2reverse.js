function reV()
{
    var num1=Number(document.querySelector('#num1').value);
    num1=num1+"";
    var num2= num1.split("").reverse().join("");
    document.getElementById("rev").innerHTML = num2;
}
function alph_change()
{
    var alph = String (document.querySelector('.alph').value)
    if (alph=="") 
        alph="string empty!!"
    else{
        alph = alph.toLowerCase()
        alph = alph.split("").sort().join("")
    }
    document.getElementById("alphi").innerHTML = alph
}
function first_letter()
{
    var letter = String(document.querySelector('.upper1').value)
    
    var array = letter.split(' ')
    var array_2 = []

    for (var i=0;i<array.length;i++)
    {
        array_2.push(array[i].charAt(0).toUpperCase()+array[i].slice(1))
    }
    var array_2 = array_2.join(' ')
    document.getElementById('upper2').innerHTML = array_2

}

