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

function longest()
{
    var long = String(document.querySelector('.longest_1').value)

    var array = long.split(' ')
    var arr_lg = array[0] 

    for (var i=0; i<array.length; i++)
    {
        if (array[i].length > arr_lg.length)
            arr_lg=array[i];
    }

    document.getElementById('longest_2').innerHTML = arr_lg

}

function isPrime()
{
    var prime = Number (document.querySelector('.prime_1').value)
    var prime2
   
//parzysta czy nieparzysta

    // if (prime == 1)
    //     prime2 = "Nieparzysta";
    // else if (prime == 2)
    //     prime2 = "Parzysta";
    // else if (prime%2==0)
    //     prime2 = "parzysta";
    // else if (prime%2==1)
    //     prime2 = "nieparzysta";
    // else
    //     prime2 = "error";

//czy pierwsza
    if (prime == 1)
        prime2 = "Nieparzysta";
    else if (prime == 2)
        prime2 = "Parzysta";
    else
    {
        prime2="liczba pierwsza"       
        for (let i=2;i<prime;i++)
        {
            if(prime%i===0)
            {
                prime2 = "nie Pierwsza";
                break;    
            }
        }

    }

      
        
    document.getElementById('prime_2').innerHTML = prime2

}
function dev()
{
    
}

