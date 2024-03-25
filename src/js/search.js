
const searchForm = document.querySelector(".search")

searchForm.search.addEventListener("input", (e) => {
  const searchValue =  searchForm.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".cards__item")
  const cardsTitles = document.querySelectorAll(".cards__title");
  cardsTitles.forEach((title,i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
       cardsItem[i].style.display = "block"
    } else {
       cardsItem[i].style.display = "none";

    }
  })


})
 
const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");
import { upDateUI } from "./updateUi";
import request from "./request";

searchSelect.forEach((li) => {
  li.addEventListener( "click", () => {
    searchSelectSpan.textContent = li.textContent
    let filterAPI
    if (li.textContent == "All") {
        filterAPI = "https://restcountries.com/v3.1/all";
    } else {
        filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;
    }
    request(filterAPI)
    .then((data) => {upDateUI(data)})
    .catch((err) => {console.log(err.message)})
  })
})
