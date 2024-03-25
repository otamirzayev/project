const modeBtn = document.querySelector(".header__dark-mode")
const body = document.querySelector("body");
const Local = localStorage.getItem("mode") ? localStorage.getItem("mode"): null
if(Local) {
    body.classList.add("dark-mode");
    
}


modeBtn.addEventListener("click", () => [
    body.classList.toggle("dark-mode"),
    Local ? localStorage.setItem("mode", "") : localStorage.setItem("mode", "dark") 
])