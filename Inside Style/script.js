const toggleMenu = document.querySelector(".toggle_menu");
const headerNav= document.querySelector(".header_nav");
const backDrop = document.querySelector(".backdrop")

toggleMenu.addEventListener("click",()=>{
    toggleMenu.classList.toggle("open")
    headerNav.classList.toggle("open")
    backDrop.classList.toggle("open")
});