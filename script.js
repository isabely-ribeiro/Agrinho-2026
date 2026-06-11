// Cursor Glow personalizado
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
        cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});

// Animações de números (counter)
const stats = document.querySelectorAll('.stat-number');
const animateNumbers = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = parseInt(stat.innerText);
        if (current < target) {
            let increment = Math.ceil(target / 50);
            let newVal = Math.min(current + increment, target);
            stat.innerText = newVal;
        }
    });
};

let animated = false;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            animated = true;
            const interval = setInterval(() => {
                let allReached = true;
                stats.forEach(stat => {
                    let current = parseInt(stat.innerText);
                    let target = parseInt(stat.getAttribute('data-target'));
                    if (current < target) allReached = false;
                });
                if (allReached) clearInterval(interval);
                animateNumbers();
            }, 35);
        }
    });
}, { threshold: 0.4 });

if (stats.length) observer.observe(document.querySelector('.hero-stats'));

// Navegação suave + active link
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Menu mobile toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.background = '#0a1419';
            navMenu.style.padding = '1.5rem';
            navMenu.style.borderRadius = '28px';
            navMenu.style.gap = '1rem';
            navMenu.style.width = '80%';
            navMenu.style.backdropFilter = 'blur(20px)';
        }
    });
}

// Formulário com feedback futurista
const form = document.getElementById('futureForm');
const feedback = document.getElementById('formFeedback');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        if (name && email.includes('@')) {
            feedback.innerHTML = '✅ Inscrição confirmada! Você receberá atualizações do Agro Forte 2050.';
            feedback.style.color = '#b3ff00';
            form.reset();
        } else {
            feedback.innerHTML = '⚠️ Preencha nome e e-mail válido para fazer parte da revolução.';
            feedback.style.color = '#ff8866';
        }
        setTimeout(() => {
            feedback.innerHTML = '';
        }, 3000);
    });
}

// Explorar botão (scroll para sustentabilidade)
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        document.getElementById('sustentabilidade').scrollIntoView({ behavior: 'smooth' });
    });
}

// Efeito glitch contínuo opcional no h1
const glitchElement = document.querySelector('.glitch-text');
if (glitchElement) {
    setInterval(() => {
        glitchElement.style.animation = 'none';
        setTimeout(() => {
            glitchElement.style.animation = 'glitch 3s infinite';
        }, 20);
    }, 5000);
}
