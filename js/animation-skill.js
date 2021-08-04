const titles = document.getElementsByClassName("title");
const descriptions = document.getElementsByClassName("description");
let windowHeightSkill = window.innerHeight / 1.22;
for(let x = 0; x < titles.length; x++){
    if(!titles[x].classList.contains("bounce-title")){
window.addEventListener("scroll", () => {
    console.log(windowHeightSkill, "jjh")
    console.log(document.querySelectorAll(".container-skills .skill")[0].getBoundingClientRect().bottom)
    if(windowHeightSkill > document.querySelector(".container-skills").getBoundingClientRect().top){
    for (let i = 0; i < titles.length; i++) {

        if (windowHeightSkill > document.querySelectorAll(".container-skills .skill")[i].getBoundingClientRect().top) {
            if (!titles[i].classList.contains("bounce-title")) {
                titles[i].classList.add("bounce-title")
                descriptions[i].classList.add("bounce-text")
            }

        }
    }
    }
})
}
}