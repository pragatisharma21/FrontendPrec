// let btn = document.querySelector("button")
// let ul = document.querySelector("ul")
// let input = document.querySelector("input")
//  btn.addEventListener("click" , function (){
//     let item = document.createElement("li")
//     item.innerText = input.value
//     let delbtn = document.createElement("button")
//     delbtn.innerText ="delete"
//     delbtn.classList.add("delete")
//     item.appendChild(delbtn)
//     ul.appendChild(item)
//     input.value = ""

//  })
//  let delbtns = document.querySelectorAll(".delete")


let h1 = document.querySelector("h1")

// setTimeout(()=>{
//    h1.style.color = "red"
// }, 1000)
// setTimeout(()=>{
//    h1.style.color = "green"
// }, 2000)
// setTimeout(()=>{
//    h1.style.color = "pink"
// }, 3000)
function colorChange(color, delay, nextColorChange){
  setTimeout(()=>{
   h1.style.color = color
   if(nextColorChange)nextColorChange()
  }, delay)
}
colorChange("red",1000,()=>{
   colorChange("blue",2000,()=>{
      colorChange("red",2000,()=>{
         colorChange("blue",2000)
      })
   })
})