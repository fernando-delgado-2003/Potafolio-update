const titles = document.getElementsByClassName("title");
const descriptions = document.getElementsByClassName("description");
const logos = document.getElementsByClassName("skill-logo");

let windowHeightSkill = window.innerHeight / 1.22;
for(let x = 0; x < titles.length; x++){
    if(!titles[x].classList.contains("bounce-y")){
window.addEventListener("scroll", () => {
    console.log(windowHeightSkill, "jjh")
    console.log(document.querySelectorAll(".container-skills .skill")[0].getBoundingClientRect().bottom)
    if(windowHeightSkill > document.querySelector(".container-skills").getBoundingClientRect().top){
    for (let i = 0; i < titles.length; i++) {

        if (windowHeightSkill > document.querySelectorAll(".container-skills .skill")[i].getBoundingClientRect().top) {
            if (!titles[i].classList.contains("bounce-y")) {
                titles[i].classList.add("bounce-y")
                descriptions[i].classList.add("bounce-x")
                logos[i].classList.add("bounce-y")
            }

        }
    }
    }
})
}
}