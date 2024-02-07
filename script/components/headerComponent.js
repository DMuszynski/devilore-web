import { getColorTheme } from "../colorThemeMode.js";

// NASŁUCHIWANIE ZMIANY SCHEMATU KOLORU STRONY W CELU OBSŁUGI ZMIANY TŁA NAGŁÓWKA
let sidebarComponent = document.querySelector("#sidebar-icons");
sidebarComponent.addEventListener("click", function() {
    handleChangeBackgroundImage();
});

export function handleChangeBackgroundImage(){
    const colorThemeMode = getColorTheme();
    if(colorThemeMode === "darkmode")
        document.getElementById("header-container").style.backgroundImage = "url('img/coding.png'";
    else
        document.getElementById("header-container").style.backgroundImage = "url('img/wallpaper.jpg'";
}