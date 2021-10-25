(function self() {
   document.getElementById("fill").innerHTML ="miło Cię znowu widzieć"
})();

//var yo = document.getElementByClassName("fill");


function change() {
    var select = document.querySelector('select');
    var operator = select.options[select.selectedIndex].value;
    
    if (operator == "pink") {
        document.body.style.background = "#cc0099";
    } else if (operator == "yellow") {
        document.body.style.background = "rgb(204,204,0)";
    } else if (operator == "blue") {
        document.body.style.background = "rgb(0,0,204)";
    } else {
        document.getElementById("fill").innerHTML = "error";
    }
}
function shop() {
    var lista = document.createElement("li");
    var listaTextowa = document.createTextNode("Woda");
    lista.appendChild(listaTextowa);
    document.getElementById("zakupy").appendChild(lista);
}

function myshop() {
    var produkt = document.querySelector("#zak1").value;
    //document.getElementById("foll").innerHTML = produkt;
    
    var list = document.createElement("li");
    var listaTextowa = document.createTextNode(produkt);
    list.appendChild(listaTextowa);
    document.getElementById("zakupy").appendChild(list);
}

function del() {
    
    var lista = document.getElementById("zakupy");
    lista.removeChild(lista.childNodes[0]);
    
   // document.removeChild("li");
}

