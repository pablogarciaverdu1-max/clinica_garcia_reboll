// Datos de cada etapa del Customer Journey
const journeyData = {
    1: {
        title: "Awareness - Fase de Descubrimiento",
        description: "En esta etapa, el cliente potencial toma conciencia de CARGLASS como solución para sus necesidades de reparación de cristales.",
        strategies: [
            "Campañas de Google Ads y Facebook segmentadas por geografía",
            "Content marketing: blog sobre cuidado de cristales y seguridad vehicular",
            "Integración HubSpot para captura automática de leads desde landing pages",
            "Seguimiento de fuentes de tráfico en dashboards HubSpot",
            "Scoring automático de leads según comportamiento inicial"
        ]
    },
    2: {
        title: "Consideration - Fase de Evaluación",
        description: "El cliente evalúa CARGLASS contra competidores, buscando información sobre servicios, precios y ubicaciones.",
        strategies: [
            "Email nurturing personalizado basado en comportamiento de navegación",
            "Workflows de HubSpot que envían caso de uso similar al perfil del cliente",
            "SMS con promociones locales y ubicaciones cercanas",
            "Chatbot de WhatsApp integrado con HubSpot para consultas inmediatas",
            "Retargeting dinámico con testimonios y reviews de clientes reales"
        ]
    },
    3: {
        title: "Decision - Fase de Conversión",
        description: "El cliente está listo para realizar la compra. Esta es la fase crítica donde la fricción debe minimizarse.",
        strategies: [
            "Sistema de citas online integrado con HubSpot CRM",
            "Email confirmación automática con details de la cita y ubicación",
            "Oferta especial automática según customer lifetime value predictivo",
            "Recordatorios 24 horas antes de la cita vía SMS/Email",
            "Seguimiento en tiempo real de la conversión en dashboard"
        ]
    },
    4: {
        title: "Retention - Fase de Fidelización",
        description: "Post-venta: mantener la relación, fomentar repetidas compras y crear defensores de marca.",
        strategies: [
            "Workflows automáticos de encuesta de satisfacción 48 horas post-servicio",
            "Programa de referidos con incentivos automáticos en HubSpot",
            "Re-engagement campaigns para clientes inactivos (segmentación por 6+ meses)",
            "Upsell automático de servicios complementarios (protección, limpieza, etc.)",
            "VIP program para clientes frecuentes con beneficios y acceso preferente"
        ]
    }
};

// Función para toggle de detalles del journey
function toggleJourneyDetails(element) {
    // Obtener el número de etapa del elemento
    const stageNumber = parseInt(element.querySelector('.stage-number').textContent);
    const detailsContainer = document.getElementById('journeyDetails');
    const data = journeyData[stageNumber];

    // Crear HTML de los detalles
    const detailsHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <h4 style="color: var(--primary-color); margin-top: 25px; margin-bottom: 15px;">Estrategias Implementadas:</h4>
        <ul style="list-style: none; padding-left: 0;">
            ${data.strategies.map(strategy => `
                <li style="padding: 10px 0; padding-left: 25px; position: relative; color: #666;">
                    <span style="position: absolute; left: 0; color: var(--primary-color); font-weight: bold;">→</span>
                    ${strategy}
                </li>
            `).join('')}
        </ul>
    `;

    detailsContainer.innerHTML = detailsHTML;
    detailsContainer.classList.add('active');

    // Scroll a los detalles
    setTimeout(() => {
        detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Marcar la etapa como activa visualmente
    document.querySelectorAll('.journey-stage').forEach(stage => {
        stage.style.opacity = '0.6';
    });
    element.style.opacity = '1';
}

// Navegación smooth
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remover clase activa de todos
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

        // Añadir clase activa al clickeado
        this.classList.add('active');

        // Scroll a la sección
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Actualizar nav activa al hacer scroll
window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animación de números en la sección de resultados
function animateResults() {
    const resultadoCards = document.querySelectorAll('.resultado-card');

    resultadoCards.forEach(card => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numberElement = card.querySelector('.resultado-number');
                    const text = numberElement.textContent;

                    // Si contiene %, +, -, hacer animación de conteo
                    if (text.match(/[\d]/)) {
                        numberElement.style.animation = 'pulse 0.5s ease';
                    }
                }
            });
        }, { threshold: 0.5 });

        observer.observe(card);
    });
}

// Animación de barras de skills
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fillBar 1.5s ease forwards';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// Agregar animaciones CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    @keyframes fillBar {
        from {
            width: 0 !important;
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    animateResults();
    animateSkillBars();

    // Cargar detalles de la primera etapa por defecto
    setTimeout(() => {
        const firstStage = document.querySelector('.journey-stage');
        if (firstStage) {
            toggleJourneyDetails(firstStage);
        }
    }, 500);
});

// Efecto hover adicional para cards
document.querySelectorAll('.desafio-item, .solucion-principal, .metodo-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});
