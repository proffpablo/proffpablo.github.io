const userData = async () => {
    const response = await fetch("https://randomuser.me/api/?nat=us,es&gender=male");
    const data = await response.json();

    let name = data.results[0].name.first + ' ' + data.results[0].name.last
    poner_nombre = document.querySelectorAll("span.name")
    
    poner_nombre.forEach(element => {
        element.innerHTML = name
    });

    photo = data.results[0].picture.large
    document.getElementById("profile-photo").src = photo
};

window.addEventListener("load", function () {
    userData();
});

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
