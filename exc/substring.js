// (function self() {
//     document.getElementById("fill").innerHTML ="miło Cię znowu widzieć"
//  })();

function spaceX(x)
{
    var p=0;
    for (var i=0;i<x.length;i++)
    {
        var x1 = x.substring(i,1);
        if (x1=="a")
        {
            p++;
        }
        //console.log(p);
    }
return p;
}

var d="ro ma na";
//document.getElementById("fill").innerHTML = spaceX(d);
//alert(d);
var t=spaceX(d);
alert(t);


