const d = document;

let header = d.querySelector("header");
let windowHeight = window.innerHeight / 3;
let SectionSkill = d.querySelector("#skills").getBoundingClientRect().top;
let aboutMe = d.querySelector("#aboutMe").getBoundingClientRect().top;
let links = d.querySelectorAll("nav a");

const menu = d.querySelector(".menu-hamburger");
const closedAndHamburger = menu.querySelectorAll("i");
/**
* Menu
*/
menu.addEventListener("click", ()=> {
  const nav = d.querySelector("nav");
  nav.classList.toggle("active");
  closedAndHamburger.forEach((item)=> {
    item.classList.toggle("active");
  })
  links.forEach((link)=> {
    link.addEventListener("click", ()=> {
      let closed = menu.querySelector(".fa-times");
      let hamburger = menu.querySelector(".fa-bars");

      nav.classList.remove("active");
      /**
      * icono hamburger y x
      */
      closed.classList.add("active");
      hamburger.classList.remove("active");
    })
  })
})



/**
* Por si el usuario recarga la pagina en la seccion de about me el texto y la imagen esten
*/

if (aboutMe <= windowHeight) {
  animationAboutMe()
}
/**
* Por si el usuario recarga la pagina el header se vea bien
*/
header.classList.toggle("active", window.scrollY > 0);

/**
* Evento scroll
*/
window.addEventListener("scroll", () => {
  let windowHeight = window.innerHeight / 3;
  let SectionSkill = d.querySelector("#skills").getBoundingClientRect().top;
  let aboutMe = d.querySelector("#aboutMe").getBoundingClientRect().top;

  header.classList.toggle("active", window.scrollY > 0);
  if (SectionSkill <= windowHeight) {
    animationSkills()
  }
  if (aboutMe <= windowHeight) {
    animationAboutMe()
  }
});


function animationSkills() {
  const skills = d.querySelectorAll(".skill");
  Array.from(skills).forEach((skill)=> {
    // skill.querySelector(".title").style.width = "100%";
    // skill.querySelector(".title h3").style.width = "100%";
    // setTimeout(()=> {

    // }, 2000)
  });

  // /**barra del nivel */
  // const lineHhtml = d.querySelector(".skill-level-html");
  // const lineCss = d.querySelector(".skill-level-css");
  // const lineJavascript = d.querySelector(".skill-level-javascript");
  // const lineWebpack = d.querySelector(".skill-level-webpack");
  // const lineWordpress = d.querySelector(".skill-level-wordpress");

  // /**toolTip */
  // const toolTipHtml = d.querySelector(".level-percentage-html");
  // const toolTipCss = d.querySelector(".level-percentage-css");
  // const toolTipJavascript = d.querySelector(".level-percentage-javascript");
  // const toolTipWebpack = d.querySelector(".level-percentage-webpack");
  // const toolTipWordpress = d.querySelector(".level-percentage-wordpress");

  // lineHhtml.style.animation = "level-html 1.5s";
  // toolTipHtml.style.animation = "level-percentage-html 1.5s";

  // lineCss.style.animation = "level-css 1.5s";
  // toolTipCss.style.animation = "level-percentage-css 1.5s";

  // lineJavascript.style.animation = "level-javascript 1.5s";
  // toolTipJavascript.style.animation = "level-percentage-javascript 1.5s";

  // lineWebpack.style.animation = "level-webpack 1.5s";
  // toolTipWebpack.style.animation = "level-percentage-webpack 1.5s";

  // lineWordpress.style.animation = "level-webpack 1.5s";
  // toolTipWordpress.style.animation = "level-percentage-webpack 1.5s";
}

/**Seccion About me */
function animationAboutMe() {

  let aboutMeText = d.querySelector(".acerca-de_text");
  let aboutMeImg = d.querySelector(".acerca-de_img");
  aboutMeText.classList.add("active");
  aboutMeImg.classList.add("active");

}