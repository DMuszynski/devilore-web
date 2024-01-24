// PASEK NAWIGACJI BOCZNEJ - SOCIAL MEDIA, ZMIANA TRYBU DARK/LIGHT MODE  -->
class SideOptionBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.renderSideOptionBarComponent();
    }

    renderSideOptionBarComponent() {
        this.innerHTML = `
            <style>
                #social-option-icons {
                    display: inline-grid;
                    position: fixed;
                    top: 50%;
                    width: auto;
                    margin: 0 0.6rem;
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
                #social-option-icons a {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 3.3rem;
                    color: var(--third-color);
                    font-size: 1.8rem;
                    margin: 0.1rem;
                    transition: 0.4s;
                }
                #social-option-icons a:first-child {
                    margin-bottom: 4rem;
                }
                #social-option-icons a:last-child {
                    margin-top: 4rem;
                }
                #social-option-icons a:hover, #social-option-icons[darkmode] a:first-child {
                    background-color: var(--fourth-color);
                }
                #social-option-icons:not([darkmode]) a:hover {
                    color: var(--first-color);
                }
                #social-option-icons:not([darkmode]) a:last-child {
                    background-color: var(--fourth-color);
                }
                
                [data-tooltip] {
                    position: relative;
                    z-index: 2;
                    cursor: pointer;
                } 
                [data-tooltip]:before,
                [data-tooltip]:after {
                    visibility: hidden;
                    opacity: 0;
                    pointer-events: none;
                }
                [data-tooltip]:hover:before,
                [data-tooltip]:hover:after {
                    visibility: visible;
                    opacity: 1;
                }
                [data-tooltip]:before {
                    position: absolute;
                    left: 140%;
                    padding: 0.7rem;
                    width: 10rem;
                    height: 1.8rem;
                    border-radius: 0.3rem;
                    background-color: var(--third-color);
                    color: var(--first-color);
                    content: attr(data-tooltip);
                    text-align: center;
                    font-size: 1.2rem;  
                    line-height: 1.8rem;
                    transform: translateY(0%);
                }
            </style>
            
            <aside id="social-option-icons" darkmode>
                <a href="#" data-tooltip="Tryb ciemny">
                    <i class='bx bx-moon'></i></a>
                <a href="https://github.com/DMuszynski" data-tooltip="Github" target="_blank">
                    <i class='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/damian-muszy%C5%84ski-7b9a09173/" data-tooltip="LinkedIn" target="_blank">
                    <i class='bx bxl-linkedin'></i> </a>
                <a href="https://www.facebook.com/dmuszynski.acc/" data-tooltip="Facebook" target="_blank">
                    <i class='bx bxl-facebook'></i></a>
                <a href="https://www.instagram.com/_dmuszynski/" data-tooltip="Instagram" target="_blank">
                    <i class='bx bxl-instagram'></i></a>
                <a href="#" data-tooltip="Skopiuj mail" class="mail" onclick="copyMailLink()">
                    <i class='bx bxl-gmail'></i></a>
                <a href="#" data-tooltip="Tryb jasny" onclick="this.oncopy">
                    <i class='bx bx-sun'></i></a>
            </aside>
        `;
    }
}

// Definicja bocznego paska nawigacji
customElements.define("side-option-bar", SideOptionBar);

// Zmiana trybu wyświetlania treści dark/light mode

// Definicja tablic z dostępnymi schematami kolorów dla strony
const root = document.querySelector(':root');
const darkModeVariables = {
    '--first-color' : '#081b29',
    '--second-color': '#112e42',
    '--third-color': '#ededed',
    '--fourth-color': '#00abf0'
}
const lightModeVariables = {
    '--first-color' : '#ededed',
    '--second-color': '#112e42',
    '--third-color': '#081b29',
    '--fourth-color': '#00abf0'
}
// Funkcja ustawiająca jeden z dwóch trybów wyświetlania treści dark/light mode;
const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));

// Funkcja ładuje z pamięci lokalnej tryb wyświetlania strony
function loadColorThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    savedTheme !== 'light' ? setVariables(darkModeVariables) : setVariables(lightModeVariables);
    return savedTheme;
}

// Implementacja odczytywania przycisków dark/light mode i zmiana ich wartości w pamięci lokalnej po kliknięciu
let darkModeButton = document.querySelector("#social-option-icons a:first-child");
let lightModeButton = document.querySelector("#social-option-icons a:last-child");
let sideOptionBarElement = document.querySelector("#social-option-icons");

darkModeButton.onclick = function () { handleChangeColorTheme('dark'); }
lightModeButton.onclick = function () { handleChangeColorTheme('light'); }

// Funkcja wykonuję zmianę schematu kolorów
function handleChangeColorTheme(colorTheme) {
    let darkModeAvailable = sideOptionBarElement.hasAttribute("darkmode");
    if ((colorTheme === 'dark' && !darkModeAvailable) || (colorTheme === 'light' && darkModeAvailable))
        sideOptionBarElement.toggleAttribute("darkmode")

    localStorage.setItem('theme', colorTheme);
    colorTheme !== 'light' ? setVariables(darkModeVariables) : setVariables(lightModeVariables);
}

// Funkcja kopiowania adresu mailowego
function copyMailLink() {
    let emailAddress = "d.muszynski.acc@gmail.com";
    navigator.clipboard.writeText(emailAddress)
        .then(r => alert("Pomyślnie skopiowano adres email"));
}

window.onload = () => {
    let savedTheme = this.loadColorThemeFromLocalStorage();
    this.handleChangeColorTheme(savedTheme);
};
