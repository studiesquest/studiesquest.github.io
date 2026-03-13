const grid=document.getElementById("grid")
const search=document.getElementById("search")
const modal=document.getElementById("modal")
const frame=document.getElementById("gameFrame")
const home=document.getElementById("home")

let filter="All"

function render(){

grid.innerHTML=""

games
.filter(g=>{

if(filter==="All") return true
return g.signIn===filter

})
.filter(g=>g.title.toLowerCase().includes(search.value.toLowerCase()))
.forEach(g=>{

const tile=document.createElement("div")
tile.className="tile"

const tagClass =
g.signIn==="Playable" ? "playable":
g.signIn==="Slightly Unplayable" ? "slight":"hard"

tile.innerHTML=`
<img src="${g.thumbnail}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Joystick_icon.svg'">
<h3>${g.title}</h3>
<p>${g.description}</p>
<span class="tag ${tagClass}">${g.signIn}</span>
`

tile.onclick=()=>{
modal.style.display="flex"
frame.src=g.src
}

grid.appendChild(tile)

})

}

search.oninput=render

document.querySelectorAll(".filters button").forEach(b=>{
b.onclick=()=>{
filter=b.dataset.filter
render()
}
})

home.onclick=()=>{
frame.src=""
modal.style.display="none"
}

render()
