fetch("datos/animales.json")
  .then((response) => response.json())
  .then((json) => {
    let animales = [];
    Array.from(json.animal).forEach((el) => {
      animales.push(el);
    });
    animales = shuffle(animales);
    console.log(animales.length);
    Array.from(document.getElementsByClassName("card")).forEach(function (
      element,
      index,
      array
    ) {
      const h2 = document.createElement("h2");
      h2.setAttribute("class", "card-title flp");
      h2.innerHTML = animales[index].nombre;
      element.appendChild(h2);

      const p = document.createElement("p");
      p.setAttribute("class", "card-desc");
      p.innerHTML = animales[index].descripcion;
      element.appendChild(p);

      const img = document.createElement("img");
      img.src = animales[index].imagen;
      element.appendChild(img);
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
