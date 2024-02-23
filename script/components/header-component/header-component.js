class HeaderComponent extends HTMLElement {

    #slideIndex = 1;        // Slider start index and favourite index values
    #favSlideIndex = -1;    // Favourite slide index, -1 is not selected
    #sliderLen = 7;         // Slider length

    constructor() {
        super();
        // Open DOM shadow mode
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Render header component
        this.#renderHeaderComponent();
        // Load favourite theme from local storage
        this.#loadFavSlideFromLocalStorage();
        // Init slider (next/prev) and save theme onclick button
        this.#initOnclickHeaderAction();

        // Set time interval after slider image has changed to the next one
        setInterval(()=> { if(this.#favSlideIndex <= 0) this.plusSlides(1); }, 30000);
    }

    #renderHeaderComponent() {
        this.shadowRoot.innerHTML = `
            <!-- Style links  -->
            <link rel="stylesheet" href="script/components/header-component/header-component.css"/>       
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"/>
            
            <!-- Header tags structure -->
            <header id="slider-container">
                <div id="slider-mask">`

                    // Slider generator
                    + this.#generateSliderImg() +

                   `<a id="prev">❮</a> <a id="next">❯</a>
                    
                    <div id="fav-slider">
                        <i class='bx bxs-heart'></i>
                    </div>
                </div>
            </header>

            <nav id="dot-nav">`
                // Slider dot nav generator
                + this.#generateSliderDotNav() +
            `</nav>
        `;
    }

    #initOnclickHeaderAction() {
        // Initialize slider onclick button
        this.shadowRoot.querySelector("#prev").onclick = () => { this.plusSlides(-1); };
        this.shadowRoot.querySelector("#next").onclick = () => { this.plusSlides(1); };
        this.shadowRoot.querySelector("#fav-slider").onclick = () => { this.#saveFavSlideIndex() };

        let navDotList = this.shadowRoot.querySelectorAll('.dot');
        for (let i = 0; i < navDotList.length; i++)
            navDotList[i].onclick = () => { this.showSlides(this.#slideIndex = i+1);};
    }

    #generateSliderImg(){
        let slider = "";
        for (let i = 0; i < this.#sliderLen; ++i)
            slider +=
                `<div class="mySlides fade">
                    <img src='../../img/header_tutorial/header${i+1}.gif' alt="header-img">
                    <div class="text">
                        <div class="word"></div>
                    </div>
                </div>`;

        return slider;
    }

    #generateSliderDotNav(){
        let dotNav = "";
        for (let i = 0; i < this.#sliderLen; ++i)
            dotNav += `<span class="dot"></span>`;

        return dotNav;
    }

    // Show and set up next slide in slider
    plusSlides(index) {
        this.showSlides(this.#slideIndex = Number(this.#slideIndex) + Number(index));
    }
    // Show and set up current slide in slider
    currentSlide(index) {
        this.showSlides(this.#slideIndex = index);
    }

    // Show slide by index
    showSlides(index) {
        let slides = this.shadowRoot.querySelectorAll(".mySlides");
        let dots = this.shadowRoot.querySelectorAll(".dot");

        if (index > slides.length) this.#slideIndex  = 1;
        if (index < 1) this.#slideIndex  = slides.length;

        for (let i = 0; i < slides.length; i++)
            slides[i].style.display = "none";

        for (let i = 0; i < dots.length; i++)
            dots[i].className = dots[i].className.replace(" active", "");

        slides[this.#slideIndex - 1].style.display = "block";
        dots[this.#slideIndex - 1].className += " active";

        this.#fillHeartImageForFavSlide(this.#slideIndex , this.#favSlideIndex);
    }

    // Load user favourite slide index and set slide by this index if exist
    #loadFavSlideFromLocalStorage(){
        let loadFavSlideIdx = localStorage.getItem("favSlideIndex");
        if (loadFavSlideIdx !== null)
            this.currentSlide(this.#favSlideIndex = loadFavSlideIdx)
        else
            this.currentSlide(this.#slideIndex );
    }

    // Fill heart image when user is on his favourite slide
    #fillHeartImageForFavSlide(slideId, favSlideElementId){
        let favSlideElement = this.shadowRoot.getElementById("fav-slider");

        if (slideId.toString() === favSlideElementId.toString())
            favSlideElement.style.color = "var(--fourth-color)";
        else
            favSlideElement.style.color = "#ededed";
    }

    // Set or unset user favourite slide
    #saveFavSlideIndex() {
        if (this.#favSlideIndex < 0 || this.#favSlideIndex.toString() !== this.#slideIndex.toString()) {
            localStorage.setItem('favSlideIndex', this.#slideIndex.toString());
            this.#favSlideIndex = this.#slideIndex;
        }
        else {
            localStorage.removeItem('favSlideIndex');
            this.#favSlideIndex = -1;   // unset fav slide index
        }
        this.#fillHeartImageForFavSlide(this.#slideIndex, this.#favSlideIndex);
    }
}

// Header tag definition
customElements.define("header-component", HeaderComponent);


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
    console.log("jest");
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

