// DOM Elements
const burgerMenu = document.querySelector("#burger-menu")
const navUl = document.querySelector("#nav-list")  // header nav #nav-container ul
const subListEle = document.querySelector("nav ul li > a:not(:only-child)")
const dropdownUl = document.querySelectorAll("ul.nav-dropdown")


// Toggle Display Property Function << block && none
// Or inject css?
// navUl.classList.toggle("display-none")


// REFed functions
const transformMain = ele => {
    ele.classList.toggle("active")
    navUl.classList.toggle("display-none")
}
const transformSub = ele => {
    dropdownUl.forEach(ele => ele.classList.toggle("display-none"))
    ele.classList.toggle("display-none")
}


//  Adding && Handling Events
// burgerMenu.addEventListener("click", _ => transformMain(burgerMenu))
    burgerMenu.addEventListener("click", event => transformMain(event.target))
subListEle.addEventListener("click", event => transformSub(event.target))