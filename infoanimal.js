let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let idurl = urlParams.get("id");
let divInfo = document.getElementById("div-info");
let ulInfo = document.getElementById("ul-info");
let fotoanimal = document.getElementById("fotoanimal");
let h2 = document.getElementById("h2");
let linkwpp = document.getElementById("linkwpp");

fetch("datos/animales.json")
  .then((response) => response.json())
  .then((json) => {
    let animalito = [];
    Array.from(json.animal).forEach((el) => {
      if (el.id == idurl) animalito.push(el);
    });
    let animal = animalito[0];

    console.log(animal);

    let descli = document.createElement("li");
    let desc = document.createElement("p");
    desc.innerHTML = animal.descripcion;
    descli.appendChild(desc);
    ulInfo.appendChild(descli);

    let edadli = document.createElement("li");
    let edad = document.createElement("p");
    edad.innerHTML = animal.edad;
    edadli.appendChild(edad);
    ulInfo.appendChild(edadli);

    let sexoli = document.createElement("li");
    let sexo = document.createElement("p");
    sexo.innerHTML = animal.sexo;
    sexoli.appendChild(sexo);
    ulInfo.appendChild(sexoli);

    let h22 = document.createElement("h2");
    h22.innerHTML = animal.nombre;
    h22.setAttribute("class", "card-title flp");
    h2.appendChild(h22);

    let img = document.createElement("img");
    img.src = animal.imagen;
    fotoanimal.appendChild(img);

    let textowpp = "Hola! Quisiera adoptar a " + animal.nombre;
    let linkk = "https://wa.me/5492262516630?text=" + textowpp;
    linkwpp.href = linkk;
  });
