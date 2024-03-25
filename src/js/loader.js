 const loaderEl = document.querySelector(".loader");

 function overlay (info) {
   if (info) {
    loaderEl.classList.remove("hidden")
   } else {
    loaderEl.classList.add("hidden");

   }
 }
 export default overlay