const theme = {
    dark: [
           ["--img-hero", " url(../img/hero-theme-dark.jpg)"],
           ["--color-theme", "#000"],
           ["--color-text-general", "#fff"],
           ["--color-principal", "#de3315"],
           ["--text-shadow-hero", "1px 1px 3px #454545"],
           ["--color-header", "#131413"],
           ["--color-menu", "#fff"],
           ["--color-circle-skill", "#dddbdb3d"],
           ["--color-text-skill", "rgba(255, 255, 255, 0.69)"],
           ["--color-text-about", "#fff"]
        ],
    light: [
            ["--img-hero", " url(../img/hero-theme-light.jpg)"],
            ["--color-theme", "#E6E6FA"],
            ["--color-text-general", "#000"],
            ["--color-principal", "#D6D1F9"],
            ["--text-shadow-hero", "none"],
            ["--color-header", "#E6E6FA"],
            ["--color-menu", "#fff"],
            ["--color-circle-skill", "#F0F0F4"],
            ["--color-text-skill", "#636472"],
            ["--color-text-about", "#636472"]
        ]
};
const btnTheme = d.querySelector(".theme");

btnTheme.addEventListener("click", (e) => {
    let themeApplied = e.target.value == undefined ? e.target.parentNode.value : e.target.value;
    newtheme = themeApplied == "dark" ? "light" : "dark",
        newTextBtn = `
        <i class='bx bx-${themeApplied == "dark" ? "moon": "sun"}' ></i>
        Cambiar al tema ${themeApplied}
     `;


    for (let i = 0; i < theme[newtheme].length; i++) {
        d.documentElement.style.setProperty(`${theme[newtheme][i][0]}`, `${theme[newtheme][i][1]}`);
        btnTheme.innerHTML = newTextBtn;
        btnTheme.value = newtheme;
    }
    localStorage.setItem("theme", newtheme)


})

d.addEventListener("DOMContentLoaded", (e) => {

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "dark");
    }
       let newtheme = localStorage.getItem("theme");
btnTheme.value= newtheme;

    localStorage.getItem("theme", btnTheme.value);
    for (let i = 0; i < theme[newtheme].length; i++) {
        d.documentElement.style.setProperty(`${theme[newtheme][i][0]}`, `${theme[newtheme][i][1]}`);
    }

});