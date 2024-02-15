// OPEN/CLOSE MAIN NAVIGATION
function toggleNav() {
    const mainNav = document.getElementById("main-sidebar");
    if(mainNav.getAttribute("collapsed") === "true")
        document.getElementById("main-sidebar").setAttribute("collapsed", "false");
    else
        document.getElementById("main-sidebar").setAttribute("collapsed", "true");
}