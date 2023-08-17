class Sidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <link href="../css/sidebar.css" rel="stylesheet">
            <aside>
                <section id="logo-content">
                    <div id="logo">
                        <i class="bx bxl-c-plus-plus"></i>
                        <div id="logo-name">Devilore.</div>
                    </div>
                    <i class="bx bx-menu" id="btn"></i>
                </section>
                <nav>
                    <ul class="nav_list">
                        <li>
                            <i class='bx bx-search'></i>
                            <input type="text" placeholder="Search...">
                            <span class="tooltip">Search</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-home-alt'></i>
                                <span class="links_name">Home</span>
                            </a>
                            <span class="tooltip">Home</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxs-book-content'></i>
                                <span class="links_name">Kursy</span>
                            </a>
                            <span class="tooltip">Kursy</span>
                        </li>
                        <li>
                            <a href="../pages/portfolio.html">
                                <i class='bx bxs-user-detail'></i>
                                <span class="links_name">Portfolio</span>
                            </a>
                            <span class="tooltip">Portfolio</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxs-chat'></i>
                                <span class="links_name">Kontakt</span>
                            </a>
                            <span class="tooltip">Kontakt</span>
                        </li>
                    </ul>
                </nav>
                <section id="profile_content">
                    <div id="profile_details">
                        <a href="../pages/portfolio.html">
                            <img src="../img/face.jpg" alt="Me">
                        </a>
                        <div id="name_job">
                            <div id="name">Damian Muszyński</div>
                            <div id="job">Web Developer/IT Teacher</div>
                        </div>
                    </div>
                </section>
            </aside>
        `;
    }
}

customElements.define('sidebar-component', Sidebar);

let btn = document.querySelector("#btn");
let sidebar = document.querySelector("sidebar-component");
let searchBtn = document.querySelector(".bx-search");

let isActive = initSidebarToggle();

onresize = () => {
    if(sidebar.classList.contains('active') && !checkIsMinWindowSize())
        isActive = sidebar.classList.toggle("active", checkIsMinWindowSize());
};

btn.onclick = function() {
    if(checkIsMinWindowSize()) sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    if(checkIsMinWindowSize()) sidebar.classList.toggle("active");
}

function checkIsMinWindowSize() {
    const minWindowSize = 600;
    return (window.innerWidth > minWindowSize);
}
function initSidebarToggle() {
    return sidebar.classList.toggle("active", checkIsMinWindowSize());
}
