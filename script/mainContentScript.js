// OPEN/CLOSE MAIN NAVIGATION
export function toggleNav() {
    let mainSidebar = document.getElementById("main-sidebar");
    let isCollapsed = mainSidebar.getAttribute("collapsed").valueOf();

    if(isCollapsed !== "true")
        mainSidebar.setAttribute("collapsed", "true");
    else
        mainSidebar.setAttribute("collapsed", "false");
}

// Inicjalizacja zawijania paska nawigacyjnego
setCollapseMainNavOption();

// Funkcja ustawia zawijanie paska nawigacyjnego dla określonej wartości szerokości okna
export function setCollapseMainNavOption() {
    const windowMinSizeForNavCollapse = 768;
    if (window.innerWidth > windowMinSizeForNavCollapse)
        document.getElementById("main-sidebar").setAttribute("collapsed", "false");
    else
        document.getElementById("main-sidebar").setAttribute("collapsed", "true");
}

function displayCollapsedMainNav() {
    let mainSidebar = document.getElementById("main-sidebar");
    let isCollapsed = mainSidebar.getAttribute("collapsed").valueOf();

    if(isCollapsed !== "true")
        mainSidebar.setAttribute("collapsed", "true");
    else
        mainSidebar.setAttribute("collapsed", "false");
}

// Wyświetlenie bocznej nawigacji po przyciśnięciu ikony id view-button
const viewButtonElement = document.getElementById("view-button");
viewButtonElement.onclick = function () { displayCollapsedMainNav(); }