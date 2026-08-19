// ==========================================
// YANZES CARO PORTFOLIO - JAVASCRIPT (v4 FINAL)
// ==========================================

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Mí',
        'nav-skills': 'Habilidades',
        'nav-experience': 'Experiencia',
        'nav-education': 'Educación',
        'nav-contact': 'Contacto',
        'hero-greeting': 'Hola, mi nombre es',
        'hero-description': 'Ingeniero de Datos con +10 años de experiencia diseñando arquitecturas analíticas y pipelines a gran escala en GCP. Especializado en BigQuery, Airflow, dbt y optimización SQL.',
        'stat-years': 'Años de experiencia',
        'stat-optimization': '% Optimización',
        'stat-pipelines': 'Pipelines en GCP',
        'hero-cta-contact': 'Contáctame →',
        'hero-cta-experience': 'Ver experiencia',
        'about-tag': 'Sobre Mí',
        'about-title-1': 'Construyendo datos que',
        'about-title-2': 'transforman negocios',
        'about-subtitle': 'Un ingeniero de datos enfocado en arquitectura cloud y analítica escalable',
        'about-profile-title': 'Perfil Profesional',
        'about-profile-1': 'Ingeniero de Datos con más de 10 años de experiencia diseñando y automatizando arquitecturas analíticas y pipelines de datos a gran escala. Especialista en ecosistemas cloud sobre GCP (BigQuery, Airflow, dbt, Dataflow) y en modelado relacional y multidimensional.',
        'about-profile-2a': 'Historial comprobado de reducción de tiempos de procesamiento de consultas en un ',
        'about-profile-2b': ' y de optimización de flujos operativos mediante automatización. Experiencia en entornos BPO, financiero y de seguros, bajo metodologías ágiles y coordinación de equipos cross-border.',
        'cta-title': '¿Conversamos?',
        'cta-availability': 'Disponible para nuevos proyectos',
        'highlight-1-title': 'Cloud & Data Warehouse',
        'highlight-1-desc': 'Arquitecturas escalables en GCP, AWS y Azure. Especialista en BigQuery y Dataflow.',
        'highlight-2-title': 'Orquestación & Pipelines',
        'highlight-2-desc': 'ETL/ELT robustos con Airflow, dbt y CI/CD. Trazabilidad y monitoreo garantizado.',
        'highlight-3-title': 'Analytics & BI',
        'highlight-3-desc': 'Dashboards ejecutivos en Power BI, modelado de datos y calidad de información.',
        'highlight-4-title': 'Optimización SQL',
        'highlight-4-desc': 'Tuning avanzado en SQL Server, PostgreSQL y MySQL. Reducción de tiempos hasta 40%.',
        'skills-tag': 'Habilidades Técnicas',
        'skills-title': 'Stack Tecnológico',
        'skills-subtitle': 'Las herramientas que uso para construir soluciones de datos escalables',
        'skills-1-title': 'Cloud & Data Warehousing',
        'skills-2-title': 'Orquestación & Transformación',
        'skills-3-title': 'Bases de Datos & Lenguajes',
        'skills-4-title': 'Analytics & BI',
        'skills-5-title': 'Metodologías',
        'skill-doc': 'Documentación Técnica',
        'skill-improve': 'Mejora Continua',
        'exp-tag': 'Resumen Profesional',
        'exp-title-1': '¿Qué',
        'exp-title-2': 'puedo hacer',
        'exp-title-3': 'por tu equipo?',
        'exp-subtitle': 'Una década transformando datos complejos en decisiones estratégicas de negocio',
        'impact-1': 'Años diseñando soluciones de datos a gran escala',
        'impact-2': 'Reducción promedio en tiempos de procesamiento',
        'impact-3': 'Pipelines productivos con alta disponibilidad',
        'impact-4': 'Uptime garantizado en cargas críticas',
        'areas-tag': 'Áreas de Expertise',
        'areas-title': 'Donde genero mayor impacto',
        'exp-1-title': 'Arquitectura Cloud & Data Warehouse',
        'exp-1-desc': 'Diseño arquitecturas analíticas escalables sobre <strong>GCP, AWS y Azure</strong>, modelando Data Warehouses en BigQuery y bases relacionales para soportar volúmenes masivos de datos.',
        'exp-2-title': 'Optimización & Performance',
        'exp-2-desc': 'Especialista en tuning avanzado de consultas SQL y rediseño de estructuras de datos. He logrado reducciones de hasta <strong>40% en tiempos de ejecución</strong>.',
        'exp-3-title': 'ETL/ELT & Orquestación',
        'exp-3-desc': 'Construyo pipelines robustos y automatizados con <strong>Apache Airflow y dbt</strong>, integrando fuentes heterogéneas con trazabilidad y validación de calidad.',
        'exp-4-title': 'Analytics & Business Intelligence',
        'exp-4-desc': 'Desarrollo dashboards ejecutivos en <strong>Power BI</strong> y reportes automatizados en Python que mejoran la visibilidad operativa.',
        'exp-5-title': 'Calidad & Gobernanza de Datos',
        'exp-5-desc': 'Implemento pruebas automatizadas y validaciones. Garantizo <strong>cero inconsistencias</strong> en reportes operativos mediante frameworks de calidad.',
        'exp-6-title': 'Liderazgo & Colaboración',
        'exp-6-desc': 'He coordinado equipos técnicos <strong>cross-border</strong> bajo metodologías ágiles (Scrum/Kanban) con resultados consistentes.',
        'sectors-tag': 'Experiencia Sectorial',
        'sectors-title': 'He generado impacto en',
        'sector-1': 'Servicios Financieros',
        'sector-1-desc': 'Procesamiento de cartera, valoración de activos y reportería regulatoria.',
        'sector-2': 'Seguros & F&I',
        'sector-2-desc': 'ETL para contratos, integración de sistemas de garantías y warranties.',
        'sector-3': 'BPO & Operaciones',
        'sector-3-desc': 'BI de alto volumen, optimización de reportería y automatización de procesos.',
        'sector-4': 'Sector Legal',
        'sector-4-desc': 'Analítica de cartera jurídica, campañas de cobranza basadas en datos.',
        'edu-tag': 'Educación',
        'edu-title': 'Formación Académica',
        'edu-1': 'Diplomado en Ciencia de Datos Avanzado',
        'edu-2': 'Técnico en Ingeniería de Sistemas',
        'edu-3': 'Profesional en Comercio Exterior',
        'cert-tag': 'Certificaciones',
        'cert-title': 'Certificaciones y Cursos',
        'cert-1': 'Certificación Profesional de Análisis de Datos',
        'cert-2': 'Curso de Análisis de Datos y Big Data',
        'cert-3': 'Fundamentos de Bases de Datos',
        'cert-4': 'Introducción al Análisis de Datos',
        'cert-5': 'Curso de Ciberseguridad',
        'lang-tag': 'Idiomas',
        'lang-title': 'Idiomas',
        'lang-spanish': 'Español',
        'lang-spanish-level': 'Nativo · C2',
        'lang-english': 'Inglés',
        'lang-english-level': 'B1+ Técnico Profesional',
        'contact-tag': 'Contacto',
        'contact-title': '¿Conversamos?',
        'contact-subtitle': 'Estoy abierto a nuevas oportunidades y proyectos desafiantes',
        'contact-h3': 'Hablemos sobre tu próximo proyecto de datos',
        'contact-p1': 'Si buscas un ingeniero de datos con experiencia en arquitecturas cloud, pipelines ETL/ELT y optimización de consultas, me encantaría conversar contigo.',
        'contact-p2': 'Puedes contactarme directamente por <strong class="text-primary">WhatsApp</strong> usando el botón verde en la esquina inferior derecha, o enviarme un mensaje mediante el formulario y te responderé a tu correo.',
        'trust-1': 'Conexión directa',
        'trust-1-desc': 'Sin intermediarios ni formularios de terceros.',
        'trust-2': 'Respuesta rápida',
        'trust-2-desc': 'Generalmente en menos de 24 horas hábiles.',
        'trust-3': 'Confidencialidad',
        'trust-3-desc': 'Tus datos solo se usan para responder tu consulta.',
        'form-name': 'Nombre',
        'form-name-ph': 'Tu nombre completo',
        'form-email': 'Tu Email',
        'form-email-ph': 'tu@email.com',
        'form-subject': 'Asunto',
        'form-subject-ph': '¿En qué puedo ayudarte?',
        'form-message': 'Mensaje',
        'form-message-ph': 'Cuéntame sobre tu proyecto...',
        'form-submit': 'Enviar mensaje →',
        'form-note': 'Te responderé directamente al email que proporciones',
        'footer-by': 'Diseñado y construido por',
        'footer-made': 'Hecho con',
        'footer-in': 'en'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-education': 'Education',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hi, my name is',
        'hero-description': 'Data Engineer with 10+ years of experience designing analytical architectures and large-scale data pipelines on GCP. Specialized in BigQuery, Airflow, dbt, and SQL optimization.',
        'stat-years': 'Years of experience',
        'stat-optimization': '% Optimization',
        'stat-pipelines': 'Pipelines on GCP',
        'hero-cta-contact': 'Contact me →',
        'hero-cta-experience': 'View experience',
        'about-tag': 'About Me',
        'about-title-1': 'Building data that',
        'about-title-2': 'transforms businesses',
        'about-subtitle': 'A data engineer focused on cloud architecture and scalable analytics',
        'about-profile-title': 'Professional Profile',
        'about-profile-1': 'Data Engineer with more than 10 years of experience designing and automating analytical architectures and large-scale data pipelines. Specialist in cloud ecosystems on GCP (BigQuery, Airflow, dbt, Dataflow) and in relational and multidimensional modeling.',
        'about-profile-2a': 'Proven track record of reducing query processing time by ',
        'about-profile-2b': ' and optimizing operational flows through automation. Experience in BPO, financial, and insurance environments, under agile methodologies and cross-border team coordination.',
        'cta-title': "Let's talk?",
        'cta-availability': 'Available for new projects',
        'highlight-1-title': 'Cloud & Data Warehouse',
        'highlight-1-desc': 'Scalable architectures on GCP, AWS, and Azure. Specialist in BigQuery and Dataflow.',
        'highlight-2-title': 'Orchestration & Pipelines',
        'highlight-2-desc': 'Robust ETL/ELT with Airflow, dbt, and CI/CD. Traceability and monitoring guaranteed.',
        'highlight-3-title': 'Analytics & BI',
        'highlight-3-desc': 'Executive dashboards in Power BI, data modeling, and information quality.',
        'highlight-4-title': 'SQL Optimization',
        'highlight-4-desc': 'Advanced tuning in SQL Server, PostgreSQL, and MySQL. Time reduction up to 40%.',
        'skills-tag': 'Technical Skills',
        'skills-title': 'Tech Stack',
        'skills-subtitle': 'The tools I use to build scalable data solutions',
        'skills-1-title': 'Cloud & Data Warehousing',
        'skills-2-title': 'Orchestration & Transformation',
        'skills-3-title': 'Databases & Languages',
        'skills-4-title': 'Analytics & BI',
        'skills-5-title': 'Methodologies',
        'skill-doc': 'Technical Documentation',
        'skill-improve': 'Continuous Improvement',
        'exp-tag': 'Professional Summary',
        'exp-title-1': 'What',
        'exp-title-2': 'can I do',
        'exp-title-3': 'for your team?',
        'exp-subtitle': 'A decade transforming complex data into strategic business decisions',
        'impact-1': 'Years designing large-scale data solutions',
        'impact-2': 'Average reduction in processing time',
        'impact-3': 'Production pipelines with high availability',
        'impact-4': 'Guaranteed uptime in critical loads',
        'areas-tag': 'Expertise Areas',
        'areas-title': 'Where I make the biggest impact',
        'exp-1-title': 'Cloud & Data Warehouse Architecture',
        'exp-1-desc': 'I design scalable analytical architectures on <strong>GCP, AWS, and Azure</strong>, modeling Data Warehouses in BigQuery and relational databases to support massive data volumes.',
        'exp-2-title': 'Optimization & Performance',
        'exp-2-desc': 'Specialist in advanced SQL query tuning and data structure redesign. I have achieved reductions of up to <strong>40% in execution time</strong>.',
        'exp-3-title': 'ETL/ELT & Orchestration',
        'exp-3-desc': 'I build robust and automated pipelines with <strong>Apache Airflow and dbt</strong>, integrating heterogeneous sources with traceability and quality validation.',
        'exp-4-title': 'Analytics & Business Intelligence',
        'exp-4-desc': 'I develop executive dashboards in <strong>Power BI</strong> and automated reports in Python that improve operational visibility.',
        'exp-5-title': 'Data Quality & Governance',
        'exp-5-desc': 'I implement automated tests and validations. I guarantee <strong>zero inconsistencies</strong> in operational reports through quality frameworks.',
        'exp-6-title': 'Leadership & Collaboration',
        'exp-6-desc': 'I have coordinated <strong>cross-border</strong> technical teams under agile methodologies (Scrum/Kanban) with consistent results.',
        'sectors-tag': 'Sector Experience',
        'sectors-title': 'I have generated impact in',
        'sector-1': 'Financial Services',
        'sector-1-desc': 'Portfolio processing, asset valuation, and regulatory reporting.',
        'sector-2': 'Insurance & F&I',
        'sector-2-desc': 'ETL for contracts, integration of warranty systems and warranties.',
        'sector-3': 'BPO & Operations',
        'sector-3-desc': 'High-volume BI, reporting optimization, and process automation.',
        'sector-4': 'Legal Sector',
        'sector-4-desc': 'Legal portfolio analytics, data-driven collection campaigns.',
        'edu-tag': 'Education',
        'edu-title': 'Academic Background',
        'edu-1': 'Advanced Data Science Diploma',
        'edu-2': 'Systems Engineering Technician',
        'edu-3': 'Foreign Trade Professional',
        'cert-tag': 'Certifications',
        'cert-title': 'Certifications & Courses',
        'cert-1': 'Professional Data Analytics Certification',
        'cert-2': 'Data Analytics and Big Data Course',
        'cert-3': 'Database Fundamentals',
        'cert-4': 'Introduction to Data Analytics',
        'cert-5': 'Cybersecurity Course',
        'lang-tag': 'Languages',
        'lang-title': 'Languages',
        'lang-spanish': 'Spanish',
        'lang-spanish-level': 'Native · C2',
        'lang-english': 'English',
        'lang-english-level': 'B1+ Professional Technical',
        'contact-tag': 'Contact',
        'contact-title': "Let's talk?",
        'contact-subtitle': 'I am open to new opportunities and challenging projects',
        'contact-h3': "Let's talk about your next data project",
        'contact-p1': 'If you are looking for a data engineer with experience in cloud architectures, ETL/ELT pipelines, and query optimization, I would love to chat with you.',
        'contact-p2': 'You can contact me directly via <strong class="text-primary">WhatsApp</strong> using the green button in the bottom right corner, or send me a message through the form and I will reply to your email.',
        'trust-1': 'Direct connection',
        'trust-1-desc': 'No intermediaries or third-party forms.',
        'trust-2': 'Quick response',
        'trust-2-desc': 'Usually within less than 24 business hours.',
        'trust-3': 'Confidentiality',
        'trust-3-desc': 'Your data is only used to answer your inquiry.',
        'form-name': 'Name',
        'form-name-ph': 'Your full name',
        'form-email': 'Your Email',
        'form-email-ph': 'your@email.com',
        'form-subject': 'Subject',
        'form-subject-ph': 'How can I help you?',
        'form-message': 'Message',
        'form-message-ph': 'Tell me about your project...',
        'form-submit': 'Send message →',
        'form-note': 'I will reply directly to the email you provide',
        'footer-by': 'Designed and built by',
        'footer-made': 'Made with',
        'footer-in': 'in'
    }
};

// ===== LANGUAGE MANAGER =====
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key]) {
            el.innerHTML = TRANSLATIONS[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
        const key = el.getAttribute('data-placeholder-i18n');
        if (TRANSLATIONS[lang][key]) {
            el.placeholder = TRANSLATIONS[lang][key];
        }
    });
    
    // Update lang toggle UI (nuevos botones)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}


// ===== THEME MANAGER =====
let currentTheme = localStorage.getItem('theme') || 'dark';

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

// Apply saved theme on load
setTheme(currentTheme);

// ===== LANGUAGE TOGGLE BUTTON =====
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
    });
});

// ===== THEME TOGGLE BUTTON =====
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

// Initialize language
setLanguage(currentLang);

// ===== WHATSAPP LINKS SETUP (DEFINIDA PRIMERO) =====
function setupWhatsappLink(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    const trySetup = () => {
        if (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.whatsappNumber) {
            const { whatsappNumber, whatsappMessage } = window.PORTFOLIO_CONFIG;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            el.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
            console.log(`✅ WhatsApp link configured for #${elementId}`);
        } else {
            setTimeout(trySetup, 100);
        }
    };
    trySetup();
}

// Configurar ambos botones de WhatsApp
setupWhatsappLink('whatsappBtn');
setupWhatsappLink('ctaWhatsapp');

// ===== TYPING EFFECT (HERO) =====
const typingElement = document.getElementById('typing');
const phrases = [
    'Data Engineer',
    'Cloud Data',
    'BigQuery Specialist',
    'Pipeline Builder',
    'SQL Optimizer'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingElement) return;
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
    const ctaPhrases = {
        es: [
            '¿Interesado en colaborar?',
            'Conversemos por WhatsApp',
            'O usa el formulario al final',
            'Estoy disponible para tu proyecto'
        ],
        en: [
            'Interested in collaborating?',
            "Let's chat on WhatsApp",
            'Or use the form at the end',
            'I am available for your project'
        ]
    };
    let ctaIndex = 0;
    let ctaChar = 0;
    let ctaDeleting = false;

    function ctaType() {
        const phrase = ctaPhrases[currentLang][ctaIndex];
        
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
            ctaIndex = (ctaIndex + 1) % ctaPhrases[currentLang].length;
            speed = 500;
        }

        setTimeout(ctaType, speed);
    }

    setTimeout(ctaType, 1000);
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
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
}

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

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));

// Counter observer separado
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                counters.forEach(animateCounter);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    counterObserver.observe(heroStats);
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Usar el email de config si está disponible
        const recipientEmail = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.email) 
            || 'yanzes01@gmail.com';
        
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Hola Yanzes,\n\nMi nombre es ${name}\nMi email: ${email}\n\n${message}\n\n---\nEnviado desde tu portafolio web`
        )}`;
        
        window.location.href = mailtoLink;
        setTimeout(() => contactForm.reset(), 500);
    });
}

// ===== SMOOTH SCROLL (NO INTERCEPTA WHATSAPP) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // NO prevenir default si es un enlace de WhatsApp
        const id = this.id;
        if (id === 'ctaWhatsapp' || id === 'whatsappBtn') {
            return; // Dejar que el href funcione normal
        }
        
        const href = this.getAttribute('href');
        if (!href || href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== PARTICLES BACKGROUND =====
const canvas = document.getElementById('particles-canvas');
if (canvas) {
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
}

// ===== CONSOLE MESSAGE =====
console.log('%c¡Hola! 👋', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cSoy Yanzes Caro - Data Engineer', 'color: #7c3aed; font-size: 16px;');
console.log('%cPortfolio v4 - Multi-language & Theme Toggle', 'color: #94a3b8; font-size: 14px;');
