// Datos de Automatizaciones del PDF
const automationData = {
    1: {
        title: "Automatización 1: Recuperar 'Carrito Abandonado'",
        description: "Cuando alguien que ya tenemos en nuestra bbdd con comunicación por whatsapp, correo o ambas. Entra en web, empieza el proceso de reserva de una cita pero no llega a hacerlo generarle un flujo dependiendo del punto donde se ha perdido la conversión.",
        timeline: [
            {
                time: "De 0-1 hora",
                action: "Email educativo",
                detail: '"Te falta solo un paso. ¿Necesitas ayuda?" Tono amable, sin presión. Personalizado según el punto del formulario de reserva se quedó.'
            },
            {
                time: "A las 2 horas",
                action: "Chatbot WhatsApp",
                detail: 'El chatbot NO trata de vender, mas bien pregunta "¿Qué necesitas saber?" y responde automáticamente a: ¿Cuánto cuesta? ¿Qué marcas reparáis? ¿Qué horarios tenéis?'
            },
            {
                time: "Tras 24 horas",
                action: "Email final",
                detail: 'Que muestre la calidad del servicio y materiales de Carglass + oferta 15% dto.'
            }
        ],
        aspects: [
            "Cada automatización ocurre cuando la anterior no ha logrado reconvertir al prospecto",
            "Importante hacer una segmentación: ¿Dónde abandonó? ¿En contacto? ¿Matricula? ¿Fecha? Cada uno recibe un mensaje diferente",
            "Un abandono en 'fecha' no necesita volver a explicar qué es Carglass. Necesita solo saber que puede venir en horario que mejor le encaja",
            "Pudiendo llegar a recuperar un 15%, 20% del abandono"
        ]
    },
    2: {
        title: "Automatización 2: Evitar el % de No-show en las Reservas",
        description: "La mayoría de 'no-show' puede ocurrir porque han encontrado algo más barato o porque se les olvida. Aquí la estrategia es diferente, habría que enfocar las automatizaciones a una fase más avanzada.",
        timeline: [
            {
                time: "48 horas antes",
                action: "Email personalizado avanzado",
                detail: 'Se enviará un email que vaya más allá del nombre o el modelo. Algo como: "Tienes un Audi A4, así que deberías revisar las escobillas y hacer un tratamiento antilluvia pronto". Usa Chat GPT, BBDD interna y N8N para personalización con IA.'
            },
            {
                time: "24 horas antes",
                action: "SMS recordatorio + link",
                detail: '"¿Confirmas tu cita mañana a las 10:00?". Que le lleve a una landing page muy sencilla con la hora, día, ubicación y un botón de confirmación, cancelar o reprogramar.'
            },
            {
                time: "6 horas antes",
                action: "SMS cercano + Agente Voz IA",
                detail: '"Pablo nos vemos a las 12:30 en Avd Marina 312-314". Opcional: Agente de voz IA que llama 90 minutos antes si aún no ha confirmado.'
            }
        ],
        aspects: [
            "La IA analiza vehículo (tipo, antigüedad, etc.) con API de GPT y analiza productos por categoría y stock según taller",
            "Rellena automáticamente una propiedad en HubSpot llamada 'Recomendación IA'",
            "El agente de voz IA puede confirmar que va a ir, cancelar, reprogramar, y la voz suena natural",
            "Con estas automatizaciones apoyadas de inteligencia artificial, se personaliza y asegura que el proceso de confirmación se haga correctamente"
        ]
    },
    3: {
        title: "Post-Servicio: Cierre del Círculo",
        description: "Tan importante es, tener bien definido un flujo de reservas y recordatorios a los clientes como evaluar el trabajo que le hemos ofrecido al cliente.",
        timeline: [
            {
                time: "30 minutos después",
                action: "Email de agradecimiento",
                detail: 'Envío de email de agradecimiento por confiar en servicio Carglass, dejar los datos del taller por si llega a ocurrir algún fallo y un botón bien claro para dejar una puntuación en un formulario NPS.'
            },
            {
                time: "24 horas después",
                action: "Llamada de call center",
                detail: 'Si no lo rellena, hacer una llamada de call center para poder conocer su opinión.'
            }
        ],
        aspects: [
            "Desde HubSpot se pueden hacer este tipo de encuestas",
            "En el área de paneles se pueden construir informes con los que poder ver la evolución de la satisfacción",
            "Ratio de respuesta y evaluación del servicio",
            "Identificar detractores para reactivar e impulsar referencias"
        ]
    }
};

// Función para toggle de automatizaciones
function toggleAutomation(automationNumber) {
    const detailsContainer = document.getElementById('automationDetails');
    const data = automationData[automationNumber];

    let timelineHTML = '';
    if (data.timeline && data.timeline.length > 0) {
        timelineHTML = '<div style="margin: 25px 0;"><h4 style="color: var(--primary-color); margin-bottom: 15px;">Timeline:</h4>';
        data.timeline.forEach((item, index) => {
            timelineHTML += `
                <div style="margin-bottom: 20px; padding-left: 25px; border-left: 3px solid var(--primary-color); position: relative;">
                    <span style="position: absolute; left: -12px; width: 24px; height: 24px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">${index + 1}</span>
                    <p style="font-weight: 600; color: var(--primary-color); margin-bottom: 5px;">${item.time}</p>
                    <p style="font-weight: 600; color: #333; margin-bottom: 5px;">${item.action}</p>
                    <p style="color: #666; font-size: 13px;">${item.detail}</p>
                </div>
            `;
        });
        timelineHTML += '</div>';
    }

    let aspectsHTML = '';
    if (data.aspects && data.aspects.length > 0) {
        aspectsHTML = '<div><h4 style="color: var(--primary-color); margin: 25px 0 15px;">Aspectos Clave:</h4>';
        data.aspects.forEach(aspect => {
            aspectsHTML += `
                <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #666; font-size: 14px;">
                    <span style="position: absolute; left: 0; color: var(--primary-color); font-weight: bold;">✓</span>
                    ${aspect}
                </li>
            `;
        });
        aspectsHTML += '</div>';
    }

    const detailsHTML = `
        <h3>${data.title}</h3>
        <p style="color: #666; margin: 15px 0; line-height: 1.6;">${data.description}</p>
        ${timelineHTML}
        <ul style="list-style: none; padding-left: 0;">${aspectsHTML}</ul>
    `;

    detailsContainer.innerHTML = detailsHTML;
    detailsContainer.classList.add('active');

    setTimeout(() => {
        detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Datos de Herramientas IA
const iaToolsData = {
    1: {
        title: "Chatbot WhatsApp (Automático en 60 minutos)",
        description: "No es un bot de 'presiona 1 para reservar'. Es un chatbot conversacional que entiende el contexto del usuario.",
        features: [
            "Entiende preguntas en lenguaje natural",
            "Contexto del usuario (si abandonó en 'vehículo', sabe que lo importante es elegir marca)",
            "Integración con HubSpot (busca el contacto, ve su historial, adapta respuestas)"
        ],
        responses: [
            "Precios",
            "Horarios disponibles",
            "Recomendaciones de servicios",
            "Cambios de cita",
            "Garantías"
        ],
        provider: "Twilio + OpenAI API"
    },
    2: {
        title: "Agente de Voz IA (Opcional, 90 minutos antes si no confirmó)",
        description: "Llamada automática (número de Carglass) que es un agente que puede confirmar, cambiar hora, resolver dudas. La voz suena natural, no es un mensaje grabado.",
        features: [
            "Confirma que va a ir",
            "Pregunta si estará en casa (domicilio)",
            "Ofrece cambio de hora si es necesario",
            "Contesta preguntas básicas",
            "La voz suena humana"
        ],
        responses: [
            "Confirmar que va a ir",
            "Cancelar visita al taller",
            "Reprogramar visita al taller",
            "Se podría llegar a clonar a un humano real"
        ],
        provider: "Twilio + Google Text-to-Speech o Verbo.ai o DAPTA"
    },
    3: {
        title: "Recomendación Dinámica de VAPS (48h antes)",
        description: "Email de 48h antes con recomendación IA basada en el vehículo del cliente e historial de compras.",
        features: [
            "Analiza vehículo del cliente (año, marca, modelo)",
            "Analiza historial (última vez que compró VAPS, qué compró)",
            "Sugiere servicios relevantes con probabilidad de compra",
            "Personalización máxima e inteligencia artificial"
        ],
        example: "Un cliente tiene un Audi A4 de hace 5 años → la IA acude a la bbdd, según esa antigüedad, el stock en zona y esa categoría de coche le sugiere revisar escobillas o tratamiento antilluvia, y eso aparece personalizado en el email/chatbot",
        provider: "HubSpot + N8N + API GPT 5"
    }
};

// Función para toggle de herramientas IA
function toggleIATool(toolNumber) {
    const detailsContainer = document.getElementById('iaDetails');
    const data = iaToolsData[toolNumber];

    let featuresHTML = '';
    if (data.features && data.features.length > 0) {
        featuresHTML = '<h4 style="color: var(--primary-color); margin: 20px 0 15px;">Características:</h4><ul style="list-style: none; padding-left: 0;">';
        data.features.forEach(feature => {
            featuresHTML += `
                <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #666; font-size: 14px;">
                    <span style="position: absolute; left: 0; color: var(--success-color); font-weight: bold;">✓</span>
                    ${feature}
                </li>
            `;
        });
        featuresHTML += '</ul>';
    }

    let responsesHTML = '';
    if (data.responses && data.responses.length > 0) {
        responsesHTML = '<h4 style="color: var(--primary-color); margin: 20px 0 15px;">Responde a:</h4><ul style="list-style: none; padding-left: 0;">';
        data.responses.forEach(response => {
            responsesHTML += `
                <li style="padding: 8px 0; padding-left: 25px; position: relative; color: #666; font-size: 14px;">
                    <span style="position: absolute; left: 0; color: var(--primary-color);">→</span>
                    ${response}
                </li>
            `;
        });
        responsesHTML += '</ul>';
    }

    let exampleHTML = '';
    if (data.example) {
        exampleHTML = `<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;"><strong>Ejemplo:</strong> ${data.example}</div>`;
    }

    const detailsHTML = `
        <h3>${data.title}</h3>
        <p style="color: #666; margin: 15px 0; line-height: 1.6;">${data.description}</p>
        ${featuresHTML}
        ${responsesHTML}
        ${exampleHTML}
        <p style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;"><strong>Proveedor:</strong> ${data.provider}</p>
    `;

    detailsContainer.innerHTML = detailsHTML;
    detailsContainer.classList.add('active');

    setTimeout(() => {
        detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
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
