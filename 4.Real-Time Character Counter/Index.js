const textareaEl = document.getElementById("textarea");
const totalcharacterEl = document.getElementById("Countercharacter")
const remainderEl = document.getElementById("total-remainder")



textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})


function updateCounter(){
    totalcharacterEl.innerText = textareaEl.value.length;
    remainderEl.innerText = textareaEl.getAttribute("maxlength")-textareaEl.value.length;
}





updateCounter()