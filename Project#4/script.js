const toggleBtn = document.getElementById("bars-container");
const navList = document.querySelector(".nav-list");

toggleBtn.addEventListener('click', () => {
    if(navList.style.display != "flex"){
        navList.style.display = "flex";
    }
    else {
        navList.style.display = "none";
    }
})