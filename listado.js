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
      let h2 = document.createElement("h2");
      h2.setAttribute("class", "card-title flp");
      h2.innerHTML = animales[index].nombre;
      element.appendChild(h2);

      let p = document.createElement("a");
      p.setAttribute("class", "card-desc");
      p.innerHTML = animales[index].descripcion;

      if (username) {
        p.setAttribute("href",("infoanimal.html?id=" + animales[index].id + "&username=" + username)
        );
      } else {
        p.setAttribute("href", "infoanimal.html?id=" + animales[index].id);
      }
      element.appendChild(p);

      let img = document.createElement("img");
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
