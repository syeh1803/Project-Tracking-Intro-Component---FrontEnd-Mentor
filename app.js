const hamburger = document.querySelector("#hamburger");
const cross = document.querySelector("#cross");
const navList = document.querySelector("#nav-list");

hamburger.addEventListener('click', () => {
    navList.classList.toggle("show");  
    cross.style.display = "block";
    hamburger.style.display = "none";
});

cross.addEventListener('click', () => {
    navList.classList.toggle("show");
    hamburger.style.display = "block";
    cross.style.display = "none";
})

