let userparam = new URLSearchParams(window.location.search).get("username");
if (userparam){
  let botonHomeAdopta = document.getElementById("botonHomeAdopta");
  let botonHomeUnite = document.getElementById("botonHomeUnite");
  botonHomeAdopta.setAttribute("href","animales_adopcion.html?username="+userparam);
  botonHomeUnite.remove();
}

fetch("datos/animales.json")
  .then((response) => response.json())
  .then((json) => {
    let animales = [];
    Array.from(json.animal).forEach((el) => {
      animales.push(el);
    });
    animales = shuffle(animales);
    console.log(animales.length);
    Array.from(document.getElementsByClassName("cartapicho")).forEach(function (
      element,
      index,
      array
    ) {
      /*
        HACER H3
        HACER A
        A DARLE href
        A DARLE class linkpicho
        A PONERLE INNERHTMLL
        APEANDAR A > H3
        APENDAR H3  cartapicho
        HACER P
        P CLASS TEXTOPICHO
        P INNERHTML
        APPEANDAR P > cartapicho*/

      let h3 = document.createElement("h3");
      let a = document.createElement("a");
      let p = document.createElement("a");
      let userp = new URLSearchParams(window.location.search).get("username");

      if (userp) {
        a.setAttribute(
          "href",
          "infoanimal.html?id=" + animales[index].id + "&username=" + userp
        );
      } else {
        a.setAttribute("href", "infoanimal.html?id=" + animales[index].id);
      }

      a.setAttribute("class", "linkpicho");
      a.innerHTML = "→" + animales[index].nombre + "←";
      h3.appendChild(a);
      element.appendChild(h3);
      p.setAttribute("class", "textopicho");
      let stringDescripcion = animales[index].descripcion;
      p.innerHTML = stringDescripcion.slice(0, 80) + "... ¡Seguir leyendo!";

      if (userp) {
        p.setAttribute(
          "href",
          "infoanimal.html?id=" + animales[index].id + "&username=" + userp
        );
      } else {
        p.setAttribute("href", "infoanimal.html?id=" + animales[index].id);
      }

      element.appendChild(p);
    });
  });

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
