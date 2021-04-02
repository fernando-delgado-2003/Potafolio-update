const d = document;

window.addEventListener("scroll", ()=>{
    let header = d.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0);
        // if(window.scrollY > 0){
    //     header.classList.add("active")
    // }else if(window.scrollY <= 0){
    //     header.classList.remove("active")
    // }
})
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
