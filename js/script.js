// Navbar no mobile

class MobileNavBar{
    constructor(mobileMenu, navItems, navLinks){
       this.mobileMenu = document.querySelector(mobileMenu);
       this.navItems = document.querySelector(navItems);
       this.navLinks = document.querySelectorAll(navLinks);
       this.activeClass = "active";

       this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
       this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            :(link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`);
       }); 
    }

    handleClick(){
        this.navItems.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
       this.mobileMenu.addEventListener("click", this.handleClick); 
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".navItems",
    ".navItems li",
);

mobileNavBar.init();

// Animação de elementos com o Scroll

window.sr = ScrollReveal({ reset: true });

sr.reveal('main', { duration: 1000 });

sr.reveal('section', { duration: 1000 });

sr.reveal('#projetos', { duration: 1600 });

sr.reveal('.blocos', { 
    rotate: { x: 80, y: 0, z: 0},
    duration: 1500 
});