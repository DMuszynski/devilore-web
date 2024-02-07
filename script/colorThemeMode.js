// ZMIENNE I FUNKCJE DOTYCZĄCE SCHEMATU KOLORÓW STRONY

// TABLICA Z PARAMETRAMI STRONY - DO USTAWIENIA KOLORÓW
const root = document.querySelector(':root');

// USTAWIENIE SCHEMATU KOLORÓW DARK/LIGHT MODE;
const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));

function setDarkModeColors(){    // ZMIANA KOLORÓW TRYBU WYŚWIETLANIA TREŚCI LIGHTMODE/DARKMODE
    setVariables({
        '--first-color' : '#081b29', '--second-color': '#112e42',
        '--third-color': '#ededed', '--fourth-color': '#00abf0'
    });
}
function setLightModeColors() {
    setVariables({
        '--first-color' : '#ededed', '--second-color': '#112e42',
        '--third-color': '#081b29', '--fourth-color': '#00abf0'
    });
}

function loadColorThemeFromLocalStorage() {      // ŁADOWANIE Z PAMIĘCI LOKALNEJ ZAPISANY SCHEMAT KOLORÓW
    const savedTheme = localStorage.getItem('theme');
    savedTheme !== 'light' ? handleChangeColorThemeAction("light") : handleChangeColorThemeAction("dark");
    return savedTheme;
}

export function handleChangeColorThemeAction(colorTheme) {     // USTAWIANIE NOWEGO TRYBU WYŚWIETLANIA TREŚCI LIGHTMODE/DARKMODE
    let bodyTagElement = document.getElementsByTagName("body").item(0);
    let darkModeAvailable = bodyTagElement.hasAttribute("darkmode");

    if ((colorTheme === 'dark' && !darkModeAvailable) || (colorTheme === 'light' && darkModeAvailable))
        bodyTagElement.toggleAttribute("darkmode")

    localStorage.setItem('theme', colorTheme);
    colorTheme !== 'light' ? setDarkModeColors() : setLightModeColors();
}

export function setColorThemeFromLocalStorage() {       // USTAWIENIE TRYBU WYŚWIETLANIA TREŚCI Z PAMIĘCI LOKALNEJ
    // Odczyt bieżącego zestawu kolorów
    const savedTheme = loadColorThemeFromLocalStorage();
    // Ustawienie zestawu kolorów na bazie odczytanego
    handleChangeColorThemeAction(savedTheme);
}

export function getColorTheme() {
    if(document.getElementsByTagName("body").item(0).hasAttribute("darkmode"))
        return "darkmode";

    return "lightmode";
}