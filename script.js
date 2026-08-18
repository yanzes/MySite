// ==========================================
// YANZES CARO PORTFOLIO - JAVASCRIPT
// ==========================================

// ===== TYPING EFFECT (HERO) =====
const typingElement = document.getElementById('typing');
const phrases = [
    'Senior Data Engineer',
    'Cloud Data Architect',
    'BigQuery Specialist',
    'Pipeline Builder',
    'SQL Optimizer'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

typeEffect();

// ===== CTA TYPEWRITER =====
const ctaTypewriter = document.getElementById('ctaTypewriter');
if (ctaTypewriter) {
    const ctaPhrases = [
        '¿Interesado en colaborar?',
        'Conversemos por WhatsApp',
        'O usa el formulario al final',
        'Estoy disponible para tu proyecto'
    ];
    let ctaIndex = 0;
    let ctaChar = 0;
    let ctaDeleting = false;

    function ctaType() {
        const phrase = ctaPhrases[ctaIndex];
        
        if (ctaDeleting) {
            ctaTypewriter.textContent = phrase.substring(0, ctaChar - 1);
            ctaChar--;
        } else {
            ctaTypewriter.textContent = phrase.substring(0, ctaChar + 1);
            ctaChar++;
        }

        let speed = ctaDeleting ? 30 : 70;

        if (!ctaDeleting && ctaChar === phrase.length) {
            speed = 2500;
            ctaDeleting = true;
        } else if (ctaDeleting && ctaChar === 0) {
            ctaDeleting = false;
            ctaIndex = (ctaIndex + 1) % ctaPhrases.length;
            speed = 500;
        }

        setTimeout(ctaType, speed);
    }

    setTimeout(ctaType, 1000);
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
        current += step;
        if (current < target) {
            el.textContent = Math.floor(current) + '+';
            requestAnimationFrame(update);
        } else {
            el.textContent = target + '+';
        }
    };
    update();
};

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');
let countersAnimated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// ===== COUNTER ANIMATION (VERSIÓN CORREGIDA) =====
// Observer separado SOLO para los contadores del hero
const heroStats = document.querySelector('.hero-stats');

if (heroStats) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                counters.forEach(animateCounter);
                counterObserver.unobserve(entry.target); // Dejar de observar
            }
        });
    }, { threshold: 0.3 }); // 30% visible para disparar

    counterObserver.observe(heroStats);
}
// ===== WHATSAPP BUTTON =====
const whatsappBtn = document.getElementById('whatsappBtn');

if (whatsappBtn && window.PORTFOLIO_CONFIG) {
    const { whatsappNumber, whatsappMessage } = window.PORTFOLIO_CONFIG;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

if (contactForm && window.PORTFOLIO_CONFIG) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        const recipientEmail = window.PORTFOLIO_CONFIG.email;
        
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Hola Yanzes,\n\nMi nombre es ${name}\nMi email: ${email}\n\n${message}\n\n---\nEnviado desde tu portafolio web`
        )}`;
        
        window.location.href = mailtoLink;
        setTimeout(() => contactForm.reset(), 500);
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== PARTICLES BACKGROUND =====
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    connectParticles();
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

console.log('%c¡Hola! 👋', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cSoy Yanzes Caro - Senior Data Engineer', 'color: #7c3aed; font-size: 16px;');
console.log('%c¿Interesado? Usa el botón de WhatsApp', 'color: #94a3b8; font-size: 14px;');
