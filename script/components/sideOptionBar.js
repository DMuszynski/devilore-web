// PASEK NAWIGACJI BOCZNEJ - SOCIAL MEDIA, ZMIANA TRYBU DARK/LIGHT MODE  -->
import { handleChangeColorThemeAction } from '../colorThemeMode.js';

class SideOptionBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // RENDEROWANIE PASKA NAWIGACJI
        this.renderSideOptionBarComponent();

        // ODCZYT RODZAJU NAWIGACJI ZE ZNACZNIKA KOMPONENTU NAWIGACJI BOCZNEJ
        const sidebarType = document.getElementsByTagName("side-option-bar")
            .item(0).getAttribute("sidebarType");

        // USTAWIENIE ODPOWIEDNIEJ NAWIGACJI W ZALEŻNOŚCI OD WYBRANEGO TYPU
        this.chooseSidebarElements(sidebarType);
    }

    renderSideOptionBarComponent() {
        this.innerHTML = `
            <style>
                #sidebar-icons {
                    display: inline-grid;
                    position: fixed;
                    top: 50%;
                    width: auto;
                    margin: 0 0.6rem;
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                    z-index: 999;
                }
                #sidebar-icons a {
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
                #sidebar-icons a:first-child {
                    margin-bottom: 4rem;
                }
                #sidebar-icons a:last-child {
                    margin-top: 4rem;
                }
                #sidebar-icons a:hover, body[darkmode] #sidebar-icons a:first-child {
                    background-color: var(--fourth-color);
                }
                body:not([darkmode]) #sidebar-icons a:hover, body:not([darkmode]) #sidebar-icons a:last-child {
                    color: var(--first-color);
                }
                body:not([darkmode]) #sidebar-icons a:last-child {
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
            
            <aside id="sidebar-icons"> <!--IKONY WYGENEROWANE NA PODSTAWIE TYPU NAWIGACJI --> </aside>
        `;
    }

    chooseSidebarElements(sidebarType) {    // WYBÓR RODZAJU PASKA NAWIGACJI NA PODSTAWIE TYPU - compilerOptionIcons (Podstawowa), socialOptionIcons (Portfolio)
        const sidebarIconList = document.getElementById("sidebar-icons");
        const darkModeElement = '<a href="#" data-tooltip="Tryb ciemny"> <i class="bx bx-moon"></i></a>';
        const lightModeElement = '<a href="#" data-tooltip="Tryb jasny"> <i class="bx bx-sun"></i></a>';
        switch (sidebarType) {
            case "compilerOptionIcons":
                const compilerOptionListElement = darkModeElement +
                    '<a href="https://www.onlinegdb.com/online_java_compiler" data-tooltip="Kopilator Java" target="_blank"> ' +
                        '<i class="bx bxl-java"></i></a>' +
                    '<a href="https://www.onlinegdb.com/online_c++_compiler" data-tooltip="Kompilator C++" target="_blank">' +
                        '<i class="bx bxl-c-plus-plus"></i> </a>' +
                    '<a href="https://www.onlinegdb.com/online_php_interpreter" data-tooltip="Kompilator PHP" target="_blank">' +
                        '<i class="bx bxl-php"></i></a>' +
                    '<a href="https://www.onlinegdb.com/online_javascript_rhino_interpreter" data-tooltip="Kompilator JS" target="_blank">' +
                        '<i class="bx bxl-javascript"></i></a>' +
                    '<a href="https://sqliteonline.com/" data-tooltip="Kompilator SQL" target="_blank">' +
                        '<i class="bx bxs-data"></i></a>' + lightModeElement;
                sidebarIconList.innerHTML += compilerOptionListElement;
                break;
            case "socialOptionIcons":
                const socialOptionListElement = darkModeElement +
                    '<a href="https://github.com/DMuszynski" data-tooltip="Github" target="_blank"> ' +
                        '<i class="bx bxl-github"></i></a>' +
                    '<a href="https://www.linkedin.com/in/damian-muszy%C5%84ski-7b9a09173/" data-tooltip="LinkedIn" target="_blank">' +
                        '<i class="bx bxl-linkedin"></i> </a>' +
                    '<a href="https://www.facebook.com/dmuszynski.acc/" data-tooltip="Facebook" target="_blank">' +
                        '<i class="bx bxl-facebook"></i></a>' +
                    '<a href="https://www.instagram.com/_dmuszynski/" data-tooltip="Instagram" target="_blank">' +
                        '<i class="bx bxl-instagram"></i></a>' +
                    '<a href="#" data-tooltip="Skopiuj mail" class="mail" onClick="copyMailLink()">' +
                        '<i class="bx bxl-gmail"></i></a>' + lightModeElement;
                sidebarIconList.innerHTML += socialOptionListElement;
                break;
        }
    }

    copyMailLink() {     // KOPIOWANIE ADRESU MAILOWEGO
        let emailAddress = "d.muszynski.acc@gmail.com";
        navigator.clipboard.writeText(emailAddress)
            .then(() => alert("Pomyślnie skopiowano adres email"));
    }
}

// DEFINICJA DLA ZNACZNIKA PASKA NAWIGACJI BOCZNEJ
customElements.define("side-option-bar", SideOptionBar);

// OBSŁUGA PRZYCISKÓW ZMIENIAJĄCYCH TRYB WYŚWIETLANIA KOLORÓW NA STRONIE
const darkModeButton = document.querySelector("#sidebar-icons a:first-child");
const lightModeButton = document.querySelector("#sidebar-icons a:last-child");

darkModeButton.onclick = function () { handleChangeColorThemeAction('dark'); }
lightModeButton.onclick = function () { handleChangeColorThemeAction('light'); }
