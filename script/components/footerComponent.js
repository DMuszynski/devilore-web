class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // RENDEROWANIE STOPKI
        this.renderFooterComponent();
    }

    renderFooterComponent() {
        this.innerHTML = `
            <style>
                .footer-component {
                    position: relative;
                    width: 100%;
                    background: var(--fourth-color);
                    min-height: 10rem;
                    padding: 1rem 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                
                .footer-nav{
                    width: 100%;
                }
                .footer-nav .social-icon,
                .footer-nav .menu {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    margin: 1rem 0;
                }
                
                .footer-nav .social-icon__item,
                .footer-nav .menu__item {
                    list-style: none;
                }
                
                .footer-nav .social-icon__link {
                    font-size: 2rem;
                    color: #fff;
                    margin: 0 10px;
                    display: inline-block;
                    transition: 0.5s;
                }
                .footer-nav .social-icon__link:hover {
                    transform: translateY(-1rem);
                }
                
                .footer-nav .menu__link {
                    font-size: 1.2rem;
                    color: #fff;
                    margin: 0 1rem;
                    display: inline-block;
                    transition: 0.5s;
                    text-decoration: none;
                    opacity: 0.75;
                    font-weight: 300;
                }
                
                .footer-nav .menu__link:hover {
                    opacity: 1;
                }
                
                .footer-component .copyright-area {
                    width: 40%;
                    text-align: center;
                    border-top: 2px solid rgb(255, 255, 255);
                }
                .footer-component .copyright-area p {
                    color: #fff;
                    margin: 2rem 0 1rem 0;
                    font-size: 1rem;
                    font-weight: 300;
                }
                #start-page-nav {
                    position: relative;
                    display: block;
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                }
                #start-page-nav a {
                    display: block;
                    font-size: 3rem;
                    width: 100%;
                    height: 100%;
                    background-color: white;
                }
                
            </style>

            <footer class="footer-component">
                <nav class="footer-nav">
                    <ul class="social-icon">
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
        
                    <ul class="menu">
                        <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Java Tutorial</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Clean Code</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Programming Tools</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Portfolio</a></li>
                    </ul>
                </nav>
        
                <div class="copyright-area">
                    <p>© 2024 Damian Muszyński | All Rights Reserved</p>
                </div>
                
                <nav id="start-page-nav">
                    <a href="#"><i class='bx bxs-chevrons-up'></i></a>
                </nav>
            </footer>
        `;
    }
}

// DEFINICJA ZNACZNIKA NAGŁÓWKA
customElements.define("footer-component", FooterComponent);