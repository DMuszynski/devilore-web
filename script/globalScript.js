// GŁÓWNY SKRYPT ŁĄCZĄCY FUNKCJONALNOŚĆ KOMPONENTÓW STRONY

import { setColorThemeFromLocalStorage } from "./colorThemeMode.js";

// OPERACJĘ WYKONYWANE W RAMACH ŁADOWANIA STRONY
window.onload = () => {
    // USTAWIENIE DOMYŚLNEGO SCHEMATU KOLORÓW ZAPISANEGO W PAMIĘCI LOKALNEJ
    setColorThemeFromLocalStorage();
};

