class NotificationBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.renderSideOptionBarComponent();
    }

    renderSideOptionBarComponent() {
        this.innerHTML = `
            <style>                
                .notify{  
                    position:fixed;
                    display: block;
                    bottom: 0;
                    width:100%;
                    height: 5rem;
                    line-height: 5rem;  
                    box-sizing:border-box;
                    color: var(--third-color);  
                    text-align:center;
                    font-size: 1.5rem;
                    background: var(--fourth-color);
                    overflow:hidden;
                    transition:height .2s;
                    user-select: none;
                }
                
                #notifyType:before{
                    display:block;
                    margin-top:15px; 
                }
                
                .active{  
                    height:50px;
                }
                
                .success:before{
                    Content:"Aww Yeaaaaa! Success!";
                }
                
            </style>
            <body>
                <div class="notify">Pomyślnie skopiowano adres email</div>
            </body>
        `;
    }
}

// Definicja paska powiadomień
customElements.define("notification-bar", NotificationBar);

function notification(message) {
    let div = document.createElement("p");
    div.classList.add(".notify");

    // div.style.width = "100px";
    // div.style.height = "100px";
    // div.style.background = "red";
    // div.style.color = "white";
    div.innerHTML = "Hello";

    document.getElementById("main").appendChild(div);
}