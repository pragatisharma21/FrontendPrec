let div = document.querySelector("div")
let ul = document.querySelector("ul")
let lis = document.querySelectorAll("li")
div.addEventListener("click", function (){
    console.log("div is clicked")
})
ul.addEventListener("click", function(){
    console.log("ul is clicked")
})
for(li of lis){
    div.addEventListener("click", function(){
        console.log("div was clicked")
    })
}