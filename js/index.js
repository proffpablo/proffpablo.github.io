function seleccionar(link){
 
    var links = document.getElementById("links").getElementsByTagName("li");
 
    links[0].children[0].className = "";
    links[1].children[0].className = "";
    links[2].children[0].className = "";
    links[3].children[0].className = "";
    link.className="seleccionado";

    var x = document.getElementById("nav");
    x.className="";
}

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }
    else{
        x.className = "";
    }
}