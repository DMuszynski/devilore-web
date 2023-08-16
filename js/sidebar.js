// Sidebar component script
let btn = document.querySelector("#btn");
let sidebar = document.querySelector("#sidebar");
let searchBtn = document.querySelector(".bx-search");

let isActive = initSidebarToggle();
onresize = () => {
    if(sidebar.classList.contains('active') && !checkIsMinWindowSize())
        isActive = sidebar.classList.toggle("active", checkIsMinWindowSize());
};

btn.onclick = function() {
    if(checkIsMinWindowSize()) sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    if(checkIsMinWindowSize()) sidebar.classList.toggle("active");
}

function checkIsMinWindowSize() {
    const minWindowSize = 600;
    return (window.innerWidth > minWindowSize);
}
function initSidebarToggle() {
    return sidebar.classList.toggle("active", checkIsMinWindowSize());
}