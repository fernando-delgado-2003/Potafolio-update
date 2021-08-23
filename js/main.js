const selectElement = (element)=>{
				return document.querySelector(element);
},
				selectElements = (elements)=>{
				return document.querySelectorAll(elements);
},	
containerSkills = selectElement(".skills"),
skills = selectElements(".skill"),
titles = selectElements(".title"),
descriptions = selectElements(".description"),
logos = selectElements(".skill-logo"),
header = selectElement("header"),
btnMenu = selectElement(".btn-menu"),
nav = selectElement("nav"),
sectionsAbout = selectElements(".about > div");

window.addEventListener("scroll", ()=>{
				if(nav.classList.contains("active")) {
								nav.classList.remove("active");
								btnMenu.innerHTML= "<i class='bx bx-menu'></i>		"
				}
				if (window.scrollY > 0) {
								header.classList.add("active")
				}else{
								header.classList.remove("active")
				}
				let windowHeight = window.innerHeight / 1.22;
				
			for(let i = 0; i<skills.length; i++){
							if(skills[i].getBoundingClientRect().top < windowHeight){
											logos[i].style.animation="fadeDown 1.2s forwards";
											titles[i].style.animation="fadeDown 1.2s forwards";
											descriptions[i].style.animation="fadeLeft 800ms forwards"
											descriptions[i].style.animationDelay="500ms"
							}
				
			}
			sectionsAbout.forEach((elem)=>{
							if (elem.getBoundingClientRect().top < windowHeight) {
											elem.style.animation="fadeUp 1s forwards";
							}
			})
			
})

/*
								PINTAR LAS TARJETAS DEL PORTAFOLIO
*/


				


function handleCards (cards) {
let wrapCards = selectElement(".wrap-cards"),
				templeteCards="";
			
cards.forEach((elem)=>{
				templeteCards+=`
				<div class="card" style="background-image:url(${elem.img}); opacity: 0;">
						<div>
								<h4>${elem.name}</h4>		
								<div class="data">
								<p>${elem.text}</p>
								<div class="btns">
												<div class="btn">
																<a href=${elem.link} class="text">Ver demo</a>
												</div>
												<div class="btn">
																<a href="" class="text">Ver código</a>
												</div>
								</div>
								</div>
						</div>
				</div>			
				`;
				
})
				wrapCards.innerHTML= templeteCards;
				selectElements(".wrap-cards .card").forEach((elem,i)=>{
								elem.style.animation="fadeUp 1.5s forwards";
								elem.style.animationDelay=`${250*i}ms`;
				})
}
handleCards(portfolio);

/*
								FILTRO DEL PORTAFOLIO
*/

function handleFilterPortfolio(data){
				let select = selectElement("select");
				
				select.addEventListener("change", (e)=>{
							let search = e.target.value;
							if(search != "default") {
											
							
							data.forEach((elem,i)=>{
											dataFilter = data.filter(elem => elem.category == search);							
							})
							handleCards(dataFilter)
							}else{
											handleCards(data)
							}
				})
				
}
handleFilterPortfolio(portfolio);
/*
				Menu
*/

btnMenu.addEventListener("click", ()=>{
				nav.classList.toggle("active");
				btnMenu.innerHTML = `<i class="bx ${nav.classList.contains('active') ? 'bx-x' : 'bx-men'}"></i>`
})



