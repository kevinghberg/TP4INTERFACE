let queryString2 = window.location.search;
let urlParams2 = new URLSearchParams(queryString2);
let username = urlParams2.get("username");

let navLogin = document.getElementById("navLogin");
let navLoginMayor = document.getElementById("navLoginMayor");
let botonLogo = document.getElementById("botonLogo");
let botonHome = document.getElementById("botonHome");
let botonAdopta = document.getElementById("botonAdopta");
let botonAbout = document.getElementById("botonAbout");

if (username) {
  botonLogo.setAttribute("href", "index.html?username=" + username);
  botonHome.setAttribute("href", "index.html?username=" + username);
  if (botonAdopta) {
    botonAdopta.setAttribute(
      "href",
      "animales_adopcion.html?username=" + username
    );
  
  botonAbout.setAttribute("href", "about.html?username=" + username);

  navLogin.remove();
}
  if (username != "admin") {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let a = document.createElement("a");

    let img = document.createElement("img");
    let a2 = document.createElement("a");
    img.src = "logoutchico.png";
    a2.setAttribute("href", "index.html");
    a2.appendChild(img);

    ul.className = "navbar-nav";
    li.className = "nav-item";
    a.className = "nav-link";
    a.href = "#";
    a.innerHTML = "Usuario:" + username;

    li.appendChild(a);
    ul.appendChild(li);
    ul.appendChild(a2);
    navLoginMayor.appendChild(ul);
    navLoginMayor.setAttribute("class", "flp col-2");
  } else {
    if(botonAdopta){
      botonAdopta.setAttribute("href", "agregaranimal.html?username=" + username);
      botonAdopta.innerHTML = "PANEL DE ADMINISTRADOR";
      botonAbout.remove();
    }
    let ul = document.createElement("ul");
    let liloged = document.createElement("li");
    liloged.className = "nav-item";
    let p = document.createElement("p");
    p.innerHTML = username;
    liloged.appendChild(p);
    let li = document.createElement("li");
    let img = document.createElement("img");
    let a2 = document.createElement("a");
    img.src = "logoutchico.png";
    a2.setAttribute("href", "index.html");
    a2.appendChild(img);

    ul.className = "navbar-nav";
    li.className = "nav-item";

    ul.appendChild(liloged);
    ul.appendChild(li);
    ul.appendChild(a2);
    navLoginMayor.appendChild(ul);
    navLoginMayor.setAttribute("class", "flp col-2");
  }
}
