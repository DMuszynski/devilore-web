// GÓRNY PASEK NAWIGACJI - HOME, JAVA, PORTFOLIO, CONTACT  -->
class StickynavComponent extends HTMLElement {
    constructor() {
        super();
        // Open DOM shadow mode
        this.attachShadow({ mode: 'open' });
    }

    // Render stickynav component
    connectedCallback() {
        this.#renderStickyNavComponent();
        // USTAWIENIE LISTY NAWIGACYJNEJ NA PODSTAWIE WYBRANEGO TYPU
        this.#chooseMenuListElements();
        // Inicjalizacja zawijania paska nawigacyjnego
        this.#setCollapseTopNavOption();

        // Zmiana zawijania pasków nawigacyjnych w przypadku manipulacji wielkością strony
        addEventListener("resize", this.#setCollapseTopNavOption);

        // Wyświetlenie menu górnej nawigacji po przyciśnięciu ikony id menu-icon
        this.shadowRoot.querySelector("#menu-icon").onclick = () => { this.#displayCollapsedMenu() };
    }

    #renderStickyNavComponent() {
        this.shadowRoot.innerHTML = `
            <!-- Style links  -->
            <link rel="stylesheet" href="script/components/stickynav-component/stickynav-component.css"/>       
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"/>
            
            <!-- PASEK NAWIGACJI GŁÓWNEJ - LOGO ORAZ HIPERŁĄCZA DO PODSTRON APLIKACJI  -->
            <nav id="stickyNav">
                <section id="menu-logo">
                    <a href="https://devilore.dev"><span id="logo" >Devilore.</span> IT Coaching</a>
                </section>
                <section id="menu-icon">
                    <i class='bx bx-menu'></i>
                </section>
                <section id="menu-list">
                    <!-- TU TRAFI ODPOWIEDNIA NAWIGACJA ZE SKRYPTU-->
                </section>
            </nav>
        `;
    }

    // WYBÓR RODZAJU PASKA NAWIGACJI - baseTopNav (Podstawowa), portfolioTopNav (dla podstrony z portfolio)
    #chooseMenuListElements() {
        // ODCZYT WYBRANEGO RODZAJU NAWIGACJI GÓRNEJ
        // const navType = this.shadowRoot.querySelector("sticky-nav").getAttribute("navType");
        const navType = "baseTopNav";

        const menuList = this.shadowRoot.querySelector("#menu-list");
        switch (navType) {
            case "baseTopNav":
                const baseMenuListElement = '<ul>' +
                    '<li><a active href="#home">Home</a></li>' +
                    '<li><a href="#jtutorial">Java Tutorial</a></li>' +
                    '<li><a href="#cleanCode">Clean Code</a></li>' +
                    '<li><a href="#programmingtool">Programming Tool</a></li>' +
                    '<li><a href="#portfolio">Portfolio</a></li>' +
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

    #displayCollapsedMenu() {
        let menuListElement = this.shadowRoot.querySelector("#menu-list");
        let isCollapsed = menuListElement.hasAttribute("collapsed");
        let collapsedValue = menuListElement.getAttribute("collapsed").valueOf();

        if(isCollapsed && collapsedValue !== "true")
            menuListElement.setAttribute("collapsed", "true");
        else
            menuListElement.setAttribute("collapsed", "false");
    }

    // Funkcja ustawia zawijanie paska nawigacyjnego dla określonej wartości szerokości okna
    #setCollapseTopNavOption() {
        const windowMinSizeForNavCollapse = 768;
        if (window.innerWidth > windowMinSizeForNavCollapse)
            this.shadowRoot.querySelector("#menu-list").toggleAttribute("collapsed", false);
        else
            this.shadowRoot.querySelector("#menu-list").toggleAttribute("collapsed", true);
    }
}

// Definicja górnego paska nawigacji
customElements.define("sticky-nav", StickynavComponent);