class FooterComponent extends HTMLElement {

    constructor() {
        super();
        // Open DOM shadow mode
        // this.attachShadow({ mode: 'open' });
    }

    // Render footer component
    connectedCallback() {
        this.renderFooterComponent();
    }

    renderFooterComponent() {
        this.innerHTML = `

            <!-- Style links  -->
            <link rel="stylesheet" href="script/components/footer-component/footer-component.css"/>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"/>

            <!-- Component tags structure -->
            <footer id="footer-component">
            
                <!-- Social navigation icons list -->
                <nav id="footer-nav">
                    <ul id="social-icon-list">
                        <li class="social-icon__item">
                            <a class="social-icon__link" href="https://github.com/DMuszynski" target="_blank">
                                <i class="bx bxl-github"></i></a>
                        </li>
                        <li class="social-icon__item">
                            <a class="social-icon__link" href="https://www.linkedin.com/in/damian-muszy%C5%84ski-7b9a09173/" target="_blank">
                                <i class="bx bxl-linkedin"></i></a>
                        </li>
                        <li class="social-icon__item">
                            <a class="social-icon__link" href="https://www.facebook.com/dmuszynski.acc/" target="_blank">
                                <i class="bx bxl-facebook"></i></a>
                        </li>
                        <li class="social-icon__item">
                            <a class="social-icon__link" href="https://www.instagram.com/_dmuszynski/" target="_blank">
                                <i class="bx bxl-instagram"></i></a>
                        </li>
                        <li class="social-icon__item">
                            <a class="social-icon__link" href="#" target="_blank">
                                <i class="bx bxl-gmail"></i></a>
                        </li>
                    </ul>
                    
                    <!-- Text page navigation list -->
                    <ul id="menu-nav-list">
                        <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Java Tutorial</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Clean Code</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Programming Tools</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Portfolio</a></li>
                    </ul>
                </nav>
        
                <!-- Copyright area section -->
                <section id="copyright-area">
                    <p>© 2024 Damian Muszyński | All Rights Reserved</p>
                </section>
                
                <!-- Animate button changing view position to top:0 -->
                <nav id="up-page-but">
                    <a href="#"><i class='bx bxs-chevrons-up'></i></a>
                </nav>
            </footer>
        `;
    }
}

// Footer tag definition
customElements.define("footer-component", FooterComponent);