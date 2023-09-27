const animado = document.getElementById('skills')

window.addEventListener("scroll", () => {
    console.log('estas haciendo scroll');
})

const text = "</Hi, I'm Omar>";
const textContainer = document.getElementById("text");
const cursor = document.querySelector(".cursor");
let index = 0;

function typeText() {
    textContainer.textContent += text[index];
    index++;

    if (index < text.length) {
        setTimeout(typeText, 100); // Cambia la velocidad de escritura aquí
    } else {
        startCursorAnimation();
        
    }
}

function startCursorAnimation() {
    cursor.style.animation = "cursor-blink 0.8s infinite";
}

setTimeout(typeText, 1000); 

const menuToggle = document.getElementById("menu-toggle");
const menuShow = document.getElementById("menu-show");
const backgroundFixed = document.getElementById("bg-fixed")

let isTextVisible = true;

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("moved");
    
    if (isTextVisible) {
        const backgroundFixedNav = `fixed bg-gray-600 height_fixed w-screen fade-in-left-bar z-10`
        const customContent = `
                <div class="relative ">
                <div class="fixed top-3 right-16 z-20">
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#home">HOME</a></span>
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#about">ABOUT</a></span>
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#skills">SKILLS</a></span>
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#contact">CONTACT</a></span></span>
                <span class="px-5 fade-in-left hover:text-white duration-300 hover:-translate-y-1 transition ease-in-out"><a href="#proyectos">PROYECTOS</a></span>
                </div>
                </div>
        `;
        menuShow.innerHTML = customContent;
        backgroundFixed.className = backgroundFixedNav;
    } else {
        const backgroundFixedNav = `fixed bg-opacity-50 bg-gray-600 h-14 w-screen fade-out`

        const customContent = `
        <div class="relative ">
                <div class="fixed top-3 right-16 ">
                <span class="px-10 fade-out"><a href="#proyectos">ABOUT</a></span>
                <span class="px-10 fade-out"><a href="#skills">SKILLS</a></span>
                <span class="px-10 fade-out">CONTACT</span>
                <span class="pl-10 fade-out">PROYECTOS</span>
                </div>
                </div>
`;
backgroundFixed.className = backgroundFixedNav;
menuShow.innerHTML = customContent;
setTimeout(() => {
    menuShow.innerHTML = "";
    backgroundFixed.className = "";
}, 300); 
    }
    
    isTextVisible = !isTextVisible;
});

const elements = document.querySelectorAll('.fade-and-slide'); // Seleccionar todos los elementos

function handleScroll() {
    elements.forEach(element => { // Recorrer todos los elementos
        const rect = element.getBoundingClientRect();
        
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Obtener el ancho final desde el atributo de datos
            const finalWidth = element.dataset.finalWidth;
            
            // Aplicar la animación de cambio de ancho
            element.style.width = `${finalWidth}px`;
        } else {
            // Reiniciar el ancho cuando el elemento no está visible
            element.style.width = '0';
        }
    });
}

// Agrega un oyente de eventos de desplazamiento
window.addEventListener('scroll', handleScroll);
