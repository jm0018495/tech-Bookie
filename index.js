let openBtn =document.querySelector("#openBtn")
let closeBtn =document.querySelector("#closeBtn")
let link=document.querySelector("#link")

console.log(closeBtn)

openBtn.addEventListener("click", function(){
    link.style.display="flex"
    openBtn.style.display= "none"
    closeBtn.style.display="block"



   

})

closeBtn.addEventListener("click", function(){
    link.style.display="none"
    openBtn.style.display= "block"
    closeBtn.style.display= "none"
})