
const containerLoader = document.querySelector("#containerLoader");
const divsLeftAndRight = [containerLoader.querySelector(".left"), containerLoader.querySelector(".right")];
setTimeout(()=>{
    document.querySelector(".text-1").classList.add("active");
    document.querySelector(".line").classList.add("active");
}, 3000)
setTimeout(()=>{
    divsLeftAndRight.forEach(leftAndRight =>{
        leftAndRight.style.display="none";
    })
    containerLoader.classList.add("active")
}, 4500)
