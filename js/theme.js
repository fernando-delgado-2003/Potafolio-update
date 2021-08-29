const selectElement = (element) => {
        return document.querySelector(element);
    },
    selectElements = (elements) => {
        return document.querySelectorAll(elements);
    },
    theme = {
        "dark": [
				    ["--color-body", "#0A0A0B"],
					["--color-shadow-card", "rgba(0,0, 0, .8)"],
				    ["--color-primary", "#B71C1C"],
					["--img-hero", "url(../img/hero-theme-dark.jpg)"],

				],
        "light": [
					["--color-body", "#9DB1DB"],
					["--color-shadow-card", "rgba(30,33, 58, .5)"],
				    ["--color-primary", "#9095E4"],
					["--img-hero", "url(../img/hero-theme-light.jpg)"],

				]
    },
    btnTheme = selectElement(".btn-theme");

btnTheme.addEventListener("click", () => {
    let newTheme = btnTheme.value == "dark" ? "light" : "dark";
    chageVariablesCss(newTheme);

})
window.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "dark");
    }
    if (localStorage.getItem("theme") != btnTheme.value) {
        let newTheme = btnTheme.value == "dark" ? "light" : "dark"
        chageVariablesCss(newTheme)
    }

})

//FUNCION QUE CAMBIA EL LOCALSTORAGE Y LAS VARIABLES CSS
function chageVariablesCss(newTheme) {
    let newTextBtn = `Cambiar al tema ${newTheme == "dark" ? "claro" : "oscuro"}`;

    theme[newTheme].forEach((elem) => {
        document.documentElement.style.setProperty(elem[0], elem[1])
    })

    localStorage.setItem("theme", newTheme);
    btnTheme.value = newTheme;
    btnTheme.innerHTML = newTextBtn;
}