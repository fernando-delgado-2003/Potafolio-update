const d = document;
const animationBtns = d.querySelectorAll(".animation-btn");

animationBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let span = d.createElement("span");
         span.style.left = `${x}px`;
         span.style.top = `${y}px`;

         btn.appendChild(span)

         setTimeout(()=>{
             span.remove()
         }, 800);
    })
})