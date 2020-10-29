let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".list-container");
let containerMenu = document.querySelector(".menu");
let activador = true;

// menu de navegación: animación

btnMenu.addEventListener("click", () => {
  document.querySelector(".btn-menu i").classList.toggle("fa-times");

  if (activador) {
    menu.style.left = "0";
    menu.style.transition = "0.5s";
    activador = false;
  } else {
    activador = false;
    menu.style.left = "-100%";
    menu.style.transition = "0.5s";
    activador = true;
  }
});

// Intecalar clase Activo

let enlaces = document.querySelectorAll(".lists li a");

enlaces.forEach((element) => {
  element.addEventListener("click", (event) => {
    enlaces.forEach((link) => {
      link.classList.remove("activo");
    });
    event.target.classList.add("activo");
  });
});

// Efectos Scroll

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector(".go-top");

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  // mostrar y ocultar nav menu
  if (prevScrollPos > currentScrollPos) {
    containerMenu.style.top = "0";
    containerMenu.style.transition = "0.5s";
  } else {
    containerMenu.style.top = "0px";
    containerMenu.style.transition = "0.5s";
  }
  prevScrollPos = currentScrollPos;

  //Mostrar y ocultar Scroll Estilos
  let arriba = window.pageYOffset;
  if (arriba <= 600) {
    containerMenu.style.borderBottom = "none";
    goTop.style.right = "-100%";
  } else {
    containerMenu.style.borderBottom = "3px solid #0da19f";
    goTop.style.right = "0";
    goTop.style.transition = "0.5s";
  }
};

goTop.addEventListener("click", () => {
  document.body.scrollTop = 0; //Para navegador Safari
  document.documentElement.scrollTop = 0; //Para navegador Chrome
});

let verAbajo = document.querySelector("#abajo");

verAbajo.addEventListener("click", () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
});
