const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';

let indexSeccionActiva;

// --- Observador para el menú ---
const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            indexSeccionActiva = [...secciones].indexOf(entrada.target);
            indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
        }
    });
}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.3
});

observer.observe(document.getElementById('hero'));
secciones.forEach(seccion => observer.observe(seccion));

// --- Ajuste al cambiar tamaño de pantalla ---
const onResize = () => {
    tamañoIndicador = menu.querySelector('a').offsetWidth;
    indicador.style.width = `${tamañoIndicador}px`;
    indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
}

window.addEventListener('resize', onResize);

