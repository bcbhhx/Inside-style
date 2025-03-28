const toggleMenu = document.querySelector(".toggle_menu");
const headerNav= document.querySelector(".header_nav");
const backDrop = document.querySelector(".backdrop")

toggleMenu.addEventListener("click",()=>{
    toggleMenu.classList.toggle("open")
    headerNav.classList.toggle("open")
    backDrop.classList.toggle("open")
});

const headerWrapper= document.querySelector(".header_wrapper");
window.addEventListener("scroll",()=>{
    if(window.scrollY>=100){
        headerWrapper.classList.add("open")
    }else{
        headerWrapper.classList.remove("open")
    }
});