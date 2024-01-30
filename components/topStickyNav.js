// GÓRNY PASEK NAWIGACJI - HOME, JAVA, PORTFOLIO, CONTACT  -->
class TopStickyNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.renderTopStickyNavComponent();
    }

    renderTopStickyNavComponent() {
        this.innerHTML = `
            <style>
                #stickyNav {
                    position: fixed;
                    justify-content: space-between;
                    align-content: center;
                    flex-wrap: wrap;
                    top: 0; left: 0;
                    width: 85%;
                    padding: 0 1rem;
                    transform: translate(calc(50vw - 50%));
                    background-color: var(--first-color);
                    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.4);   
                }
                
                #stickyNav, #stickyNav #menu-logo{
                    display: flex;
                    align-items: center;
                    min-height: var(--navbarSize);
                }
                #stickyNav a {
                    color: var(--third-color);
                    font-size: 1.5rem;
                    font-weight: 500;
                    position: relative;
                }
                
                #stickyNav a, #stickyNav a:hover {
                    transition: 0.5s ease-in-out;
                }
                
                #stickyNav a:hover {
                    color: var(--fourth-color);
                    filter: brightness(110%);
                }
                
                #stickyNav #menu-list ul {
                    margin: 0;
                    display: flex;
                    flex-direction: row;
                    list-style-type: none;
                }
                
                #stickyNav #menu-list ul li{
                    margin: 1rem 1.6rem;
                }
                
                #stickyNav #menu-list ul li a::after {
                    content: '';
                    width: 0;
                    height: 0.3rem;
                    background-color: var(--fourth-color);
                    position: absolute;
                    left: -3%;
                    bottom: -0.8rem;
                    transition: 0.4s linear;
                }
                
                #stickyNav #menu-list ul li a:hover::after {
                    width: 103%;
                }
                
                #stickyNav #menu-list ul li a[active]{
                    color: var(--fourth-color);
                    font-weight: 600;
                }
                
                #stickyNav #menu-icon {
                    display: none;
                    font-size: 2.2rem;
                    margin: 1rem 1.5rem;
                    cursor: pointer;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    text-align: center;
                    transition: 0.5s ease-in-out;
                }
                
                #stickyNav #menu-icon:hover {
                    background-color: var(--fourth-color);
                    transition: 0.5s ease-in-out;
                    color: var(--first-color);
                }
                
                @media screen and (max-width: 768px) {
                
                    #stickyNav #menu-list[collapsed = "true"] ul {
                        transition: all 1.2s linear;
                        margin-top: 0;
                        overflow: hidden;
                    }
                
                    #stickyNav #menu-list[collapsed = "false"] ul {
                        transition: all 1.2s linear;
                        margin-top: -70%;
                        overflow: hidden;
                    }
                
                    #stickyNav #menu-icon {
                        display: block;
                        transition: all 0.5s linear;
                    }
                
                    #stickyNav #menu-list {
                        display: inline-flex;
                        align-items: center;
                        width: 100%;
                        justify-content: center;
                    }
                
                    #stickyNav #menu-list ul {
                        margin-top: -70%;
                        overflow: hidden;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items: center;
                        width: 70%;
                        border-top: 1px solid var(--fourth-color);
                        padding: 1rem 0;
                    }
                }
            </style>
            
            <!-- PASEK NAWIGACJI GŁÓWNEJ - LOGO ORAZ HIPERŁĄCZA DO PODSTRON APLIKACJI  -->
            <nav id="stickyNav">
                <section id="menu-logo">
                    <a href="https://devilore.dev"><span id="logo" >Devilore.</span> IT Coaching</a>
                </section>
                <section id="menu-icon" onclick="displayCollapsedMenu()">
                    <i class='bx bx-menu'></i>
                </section>
                <section id="menu-list">
                    <!-- TU TRAFI ODPOWIEDNIA NAWIGACJA ZE SKRYPTU-->
                </section>
            </nav>
        `;
    }
}

// Definicja górnego paska nawigacji
customElements.define("top-sticky-nav", TopStickyNav);



// WYBÓR TYPU NAWIGACJI - baseTopNav (Podstawowa), portfolioTopNav (dla podstrony z portfolio)


// Odczyt typu nawigacji z tagu komponentu topStickyNav
const navType = document.getElementsByTagName("top-sticky-nav").item(0).getAttribute("navType");

// Ustawienie odpowiednich elementów w nawigacji na podstawie atrybutu type
chooseMenuListElements(navType);

// Funkcja wybierająca typ paska nawigacji na podstawie atrybutu
function chooseMenuListElements(navType) {
    const menuList = document.getElementById("menu-list");
    switch (navType) {
        case "baseTopNav":
            const baseMenuListElement = '<ul>' +
                '<li><a active href="#home">Home</a></li>' +
                '<li><a href="#jtutorial">Java Tutorial</a></li>' +
                '<li><a href="#cleanCode">Clean Code</a></li>' +
                '<li><a href="#programmingtool">Programming Tool</a></li>' +
                '<li><a href="#portfolio">Portfolio</a></li>' +
                '<li><a href="#contact">Contact</a></li>' +
                '</ul>';
            menuList.innerHTML= baseMenuListElement;
            break;
        case "portfolioTopNav":
            const portfolioMenuListElement = '<ul>' +
                '<li><a href="#home">Home</a></li>' +
                '<li><a href="#about">About</a></li>' +
                '<li><a href="#services">Services</a></li>' +
                '<li><a href="#skills">Skills</a></li>' +
                '<li><a href="#contact">Contact</a></li>' +
                '</ul>';
            menuList.innerHTML= portfolioMenuListElement;
            break;
    }
}


//  HAMBURGER MENU

// Inicjalizacja zawijania paska nawigacyjnego
setCollapseNavOption();

// Zmiana zawijania paska nawigacyjnego w przypadku manipulacji wielkością strony
addEventListener("resize", () => {
    setCollapseNavOption();
});

// Funkcja ustawia zawijanie paska nawigacyjnego dla określonej wartości szerokości okna
function setCollapseNavOption() {
    const windowMinSizeForNavCollapse = 768;
    if (window.innerWidth > windowMinSizeForNavCollapse)
        document.getElementById("menu-list").toggleAttribute("collapsed", false);
    else
        document.getElementById("menu-list").toggleAttribute("collapsed", true);
}

// Funkcja ustawia wartość zawijaniego paska nawigacyjnego i decyduje czy ma być wyświetlony czy nie
function displayCollapsedMenu(){
    let menuListElement = document.getElementById("menu-list");
    let isCollapsed = menuListElement.hasAttribute("collapsed");
    let collapsedValue = menuListElement.getAttribute("collapsed").valueOf();

    if(isCollapsed && collapsedValue !== "true")
        menuListElement.setAttribute("collapsed", "true");
    else
        menuListElement.setAttribute("collapsed", "false");
}
