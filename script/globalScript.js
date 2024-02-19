// GŁÓWNY SKRYPT ŁĄCZĄCY FUNKCJONALNOŚĆ KOMPONENTÓW STRONY

import { setColorThemeFromLocalStorage } from "./colorThemeMode.js";
import { setCollapseTopNavOption } from "./components/topStickyNav.js";

// OPERACJĘ WYKONYWANE W RAMACH ŁADOWANIA STRONY
window.onload = () => {
    // USTAWIENIE DOMYŚLNEGO SCHEMATU KOLORÓW ZAPISANEGO W PAMIĘCI LOKALNEJ
    setColorThemeFromLocalStorage();
};

// Zmiana zawijania pasków nawigacyjnych w przypadku manipulacji wielkością strony
addEventListener("resize", () => {
    setCollapseTopNavOption();
});