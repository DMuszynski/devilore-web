class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // RENDEROWANIE SLIDERA NAGŁÓWKOWEGO
        this.renderSideOptionBarComponent();
    }

    renderSideOptionBarComponent() {
        this.innerHTML = `
            <style>
                header#slideshow-container {
                    width: calc(100% - 10rem);
                    transform: translate(calc(50vw - 50%));
                    height: 30rem;
                    position: relative;
                    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.6);
                }
                
                #slideshow-container #slideshow-mask {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    mask-image: linear-gradient(black 85%, transparent 115%);
                }
                
                #slideshow-container .mySlides {
                    width: 100%;
                    height: 100%;
                    display: none;
                }
                
                #slideshow-container .mySlides img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 100% 75%;
                    opacity: .8;
                }
                
                #slideshow-container .prev, #slideshow-container .next {
                    cursor: pointer;
                    position: absolute;
                    top: calc(50% - 3rem);
                    width: auto;
                    padding: 0.6rem;
                    margin: 0.6rem;
                    color: var(--third-color);
                    background-color: var(--first-color);
                    opacity: 0.9;
                    font-weight: bold;
                    font-size: 18px;
                    transition: 0.6s ease;
                    border-radius: 3px;
                    user-select: none;
                }
                
                #slideshow-container .next {
                    right: 0;
                }
                
                #slideshow-container .prev:hover, #slideshow-container .next:hover {
                    background-color: var(--fourth-color);
                    opacity: 1;
                    color: #ededed;
                }
                
                #slideshow-container .text {
                    position: absolute;
                    width: auto;
                    background: var(--third-color);
                    left: 49.5%;
                    border-radius: 8px;
                    transform: translate(-50%, -50%);
                    bottom: 1rem;
                    font-size: 1.5rem;
                    color: var(--fourth-color);
                    font-weight: 600;
                    padding: 1px 12px;
                }
               
                #dot-nav, #slideshow-container .text {
                    text-align: center;
                }
                
                .dot {
                    cursor: pointer;
                    height: 1rem;
                    width: 1rem;
                    margin: 10px 2px;
                    background-color: var(--third-color);
                    border-radius: 50%;
                    display: inline-block;
                    transition: background-color 0.6s ease;
                }
                
                .active, .dot:hover {
                    background-color: var(--fourth-color);
                }
                
                .fade {
                    animation-name: fade;
                    animation-duration: 1.5s;
                }
                
                .word {
                    margin: auto;
                    color: var(--first-color);
                    font-weight: 700;
                    letter-spacing: 0.3rem;
                }
                
                #fav-slider {
                    position: absolute;
                    bottom: 0;
                    right: 5rem;
                    font-size: 4rem;
                    color: #ededed;
                    cursor: pointer;
                    transition: .5s ease-in-out;
                }
                
                 #fav-slider:hover {
                    color: var(--fourth-color) !important;
                    transition: .5s ease-in-out;
                }
                
                @keyframes fade {
                    from {opacity: .5}
                    to {opacity: 1}
                }
            </style>

            <header id="slideshow-container">
                <div id="slideshow-mask">
                    <div class="mySlides fade">
                        <img src="../../img/header_tutorial/header1.gif" alt="header-img">
                        <div class="text">
                            <div class="word"></div>
                        </div>
                    </div>
        
                    <div class="mySlides fade">
                        <img src="../../img/header_tutorial/header2.gif" alt="header-img">
                        <div class="text">
                            <div class="word"></div>
                        </div>
                    </div>
        
                    <div class="mySlides fade">
                        <img src="../../img/header_tutorial/header3.gif" alt="header-img">
                        <div class="text">
                            <div class="word"></div>
                        </div>
                    </div>
        
                    <div class="mySlides fade">
                        <img src="../../img/header_tutorial/header4.gif" alt="header-img">
                        <div class="text">
                            <div class="word"></div>
                        </div>
                    </div>
        
                    <div class="mySlides fade">
                        <img src="../../img/header_tutorial/header5.gif" alt="header-img">
                        <div class="text">
                            <div class="word"></div>
                        </div>
                    </div>
        
                    <div class="mySlides fade">
                        <img src="../../img/header_tutorial/header6.gif" alt="header-img">
                        <div class="text">
                            <div class="word"></div>
                        </div>
                    </div>
        
                <a class="prev" onclick="plusSlides(-1)">❮</a>
                <a class="next" onclick="plusSlides(1)">❯</a>
                
                <div id="fav-slider" onclick="setFavTheme()">
                    <i class='bx bxs-heart'></i>
                </div>
            </div>
        </header>

        <nav id="dot-nav">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
            <span class="dot" onclick="currentSlide(7)"></span>
        </nav>
        `;
    }
}

// DEFINICJA ZNACZNIKA NAGŁÓWKA
customElements.define("header-component", HeaderComponent);

// Initial slide and favourite slide index values
let slideIndex = 1;
let favThemeIndex = -1;

// Check if favourite theme not exist than move slider
setInterval(()=>{ if(favThemeIndex <= 0) plusSlides(1); }, 30000);

// Load favourite theme from local storage
loadFavThemeByLocalStorage();

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++)
        slides[i].style.display = "none";

    for (let i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    fillHeartImageForFavTheme(slideIndex, favThemeIndex);
}

// Function set or unset user favourite theme image by global slideIndex. Next update heart image
function setFavTheme(){
    if (favThemeIndex < 0 || favThemeIndex !== slideIndex) localStorage.setItem('favThemeIndex', slideIndex);
    else {
        localStorage.removeItem('favThemeIndex');
        favThemeIndex = -1;
    }

    loadFavThemeByLocalStorage();
}

// Function load user favourite theme image if exist
function loadFavThemeByLocalStorage(){
    let favThemeValue = localStorage.getItem("favThemeIndex");
    (favThemeValue !== null) ? currentSlide(favThemeIndex = favThemeValue) : currentSlide(slideIndex);
}

// Function fill heart image when user is on his favourite slide
function fillHeartImageForFavTheme(slideId, favSlideElementId){
    let favSlideElement = document.getElementById("fav-slider");

    (slideId.toString() === favSlideElementId) ? favSlideElement.style.color = "var(--fourth-color)"
        : favSlideElement.style.color = "#ededed";
}

let words = ['Hej, masz ochotę troche poprogramować?', 'W takim razie bierzmy się do roboty :)',
        'Nauczę cię języka Java', 'Design patterns', 'oraz Clean Coding'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 20,
    speed = 70;
var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count === skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset === 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count === 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.word').text(part);
    },speed);
};

wordflick();