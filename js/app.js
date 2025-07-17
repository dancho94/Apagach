// Scroll suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = anchor.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animación de fade-in para las secciones al hacer scroll
const secciones = document.querySelectorAll('main section');
function mostrarSeccionAlScroll() {
    const trigger = window.innerHeight * 0.85;
    secciones.forEach(sec => {
        const boxTop = sec.getBoundingClientRect().top;
        if (boxTop < trigger) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', mostrarSeccionAlScroll);
window.addEventListener('load', mostrarSeccionAlScroll);

// Efecto en las tarjetas de tamaño y beneficios al pasar el mouse
document.querySelectorAll('.size-card, .benefit-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.065)';
        card.style.boxShadow = '0 10px 34px rgba(255, 183, 0, 0.13)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});

// Botón "Ir arriba"
const btnUp = document.createElement('button');
btnUp.innerHTML = '⬆';
btnUp.id = 'btnUp';
btnUp.style.position = 'fixed';
btnUp.style.bottom = '32px';
btnUp.style.right = '32px';
btnUp.style.padding = '0.7em 1em';
btnUp.style.fontSize = '1.5em';
btnUp.style.background = '#FFD700';
btnUp.style.color = '#7c4900';
btnUp.style.border = 'none';
btnUp.style.borderRadius = '50%';
btnUp.style.cursor = 'pointer';
btnUp.style.boxShadow = '0 4px 12px rgba(139,69,19,0.12)';
btnUp.style.display = 'none';
btnUp.style.zIndex = '1000';
btnUp.style.transition = 'opacity 0.2s';

document.body.appendChild(btnUp);

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        btnUp.style.display = 'block';
        btnUp.style.opacity = '1';
    } else {
        btnUp.style.opacity = '0';
        setTimeout(() => {
            btnUp.style.display = 'none';
        }, 200);
    }
});
btnUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animación en el h1 principal
window.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('header h1');
    if (h1) {
        h1.style.opacity = 0;
        h1.style.transform = 'scale(0.95)';
        setTimeout(() => {
            h1.style.transition = 'opacity 1.2s, transform 1.2s';
            h1.style.opacity = 1;
            h1.style.transform = 'scale(1)';
        }, 400);
    }
});
