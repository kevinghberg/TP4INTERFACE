const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idurl = urlParams.get("id");
const divInfo = document.getElementById("div-info");
const ulInfo = document.getElementById("ul-info");
const fotoanimal = document.getElementById("fotoanimal");
const h2 = document.getElementById("h2");
const linkwpp = document.getElementById("linkwpp");

fetch("datos/animales.json")
  .then((response) => response.json())
  .then((json) => {
    let animalito = [];
    Array.from(json.animal).forEach((el) => {
      if (el.id == idurl) animalito.push(el);
    });
    let animal = animalito[0];

    console.log(animal);

    const descli = document.createElement("li");
    const desc = document.createElement("p");
    desc.innerHTML = animal.descripcion;
    descli.appendChild(desc);
    ulInfo.appendChild(descli);

    const edadli = document.createElement("li");
    const edad = document.createElement("p");
    edad.innerHTML = animal.edad;
    edadli.appendChild(edad);
    ulInfo.appendChild(edadli);

    const sexoli = document.createElement("li");
    const sexo = document.createElement("p");
    sexo.innerHTML = animal.sexo;
    sexoli.appendChild(sexo);
    ulInfo.appendChild(sexoli);

    const h22 = document.createElement("h2");
    h22.innerHTML = animal.nombre;
    h22.setAttribute("class", "card-title flp");
    h2.appendChild(h22);

    const img = document.createElement("img");
    img.src = animal.imagen;
    fotoanimal.appendChild(img);

    const textowpp = "Hola! Quisiera adoptar a " + animal.nombre;
    const linkk = "https://wa.me/5492262516630?text=" + textowpp;
    linkwpp.href = linkk;
  });
