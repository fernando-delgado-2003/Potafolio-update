const d = document;
let header = d.querySelector("header");
let windowHeight = window.innerHeight / 3;
let SectionSkill = d.querySelector("#skills").getBoundingClientRect().top;
let aboutMe = d.querySelector("#aboutMe").getBoundingClientRect().top;
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
  console.log(window.scrollY);
  if (SectionSkill <= windowHeight) {
      animationSkills()
  }
  if (aboutMe <= windowHeight) {
      animationAboutMe()
  }
});


function animationSkills(params) {
      /**barra del nivel */
      const lineHhtml = d.querySelector(".skill-level-html");
      const lineCss = d.querySelector(".skill-level-css");
      const lineJavascript = d.querySelector(".skill-level-javascript");
      const lineWebpack = d.querySelector(".skill-level-webpack");
      const lineWordpress = d.querySelector(".skill-level-wordpress");

      /**toolTip */
      const toolTipHtml = d.querySelector(".level-percentage-html");
      const toolTipCss = d.querySelector(".level-percentage-css");
      const toolTipJavascript = d.querySelector(".level-percentage-javascript");
      const toolTipWebpack = d.querySelector(".level-percentage-webpack");
      const toolTipWordpress = d.querySelector(".level-percentage-wordpress");

      lineHhtml.style.animation = "level-html 1.5s";
      toolTipHtml.style.animation = "level-percentage-html 1.5s";

      lineCss.style.animation = "level-css 1.5s";
      toolTipCss.style.animation = "level-percentage-css 1.5s";

      lineJavascript.style.animation = "level-javascript 1.5s";
      toolTipJavascript.style.animation = "level-percentage-javascript 1.5s";

      lineWebpack.style.animation = "level-webpack 1.5s";
      toolTipWebpack.style.animation = "level-percentage-webpack 1.5s";

      lineWordpress.style.animation = "level-webpack 1.5s";
      toolTipWordpress.style.animation = "level-percentage-webpack 1.5s";
    

    /**Seccion acerca de mi */
  }
  function animationAboutMe(params) {

      let aboutMeText = d.querySelector(".acerca-de_text");
      let aboutMeImg = d.querySelector(".acerca-de_img");
      aboutMeText.classList.add("active");
      aboutMeImg.classList.add("active");
    
  }





// const animationBtns = d.querySelectorAll(".animation-btn");

// animationBtns.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop;

//         let span = d.createElement("span");
//          span.style.left = `${x}px`;
//          span.style.top = `${y}px`;

//          btn.appendChild(span)

//          setTimeout(()=>{
//              span.remove()
//          }, 800);
//     })
// })
