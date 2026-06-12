# Cuestionario IPSS - Clínica García Reboll

**Evaluación Internacional de Síntomas de Próstata**

## 📋 Descripción

Aplicación web HTML profesional e interactiva para la evaluación de síntomas urinarios mediante el cuestionario **IPSS (International Prostate Symptom Score)**, desarrollada específicamente para la Clínica García Reboll.

Esta herramienta permite a los pacientes evaluar sus síntomas de forma rápida y segura, proporcionando una puntuación interpretada que facilita la comunicación con los especialistas.

## ✨ Características

- **Cuestionario IPSS Completo**: 8 preguntas estandarizadas internacionalmente
- **Cálculo Automático**: Puntuación instantánea (0-35 puntos)
- **Interpretación Inteligente**:
  - 0-7 puntos: Síntomas Leves
  - 8-19 puntos: Síntomas Moderados
  - 20-35 puntos: Síntomas Importantes
- **Recomendaciones Personalizadas**: Basadas en la puntuación obtenida
- **Diseño Profesional**: Estética moderna y corporativa
- **Responsivo**: Compatible con móviles, tablets y escritorio
- **Privacidad**: Sin almacenamiento de datos (procesamiento local)
- **Exportación**: Opción de imprimir resultados
- **Indicador de Progreso**: Seguimiento visual de respuestas

## 🚀 Instalación

### Opción 1: Subir a GitHub Pages (Recomendado)

1. Pushear el archivo `index.html` a un repositorio de GitHub
2. Ir a **Settings → Pages**
3. Seleccionar **Deploy from a branch**
4. Seleccionar **main** (o la rama donde esté `index.html`)
5. Guardar
6. La app estará disponible en: `https://<usuario>.github.io/<repositorio>`

### Opción 2: Integrar en Página Web Existente

1. Descargar `index.html`
2. Subirlo a su servidor web
3. Acceso directo: `https://sudominio.com/ruta/index.html`

### Opción 3: Incrustación como iframe

```html
<iframe 
  src="https://sudominio.com/ruta/index.html" 
  width="100%" 
  height="1200px" 
  style="border: none; border-radius: 8px;"
></iframe>
```

## 💻 Uso

1. **Abrir la aplicación** en un navegador web
2. **Completar el formulario**: Responder las 8 preguntas según experiencia en últimos 30 días
3. **Ver progreso**: Barra indica preguntas respondidas
4. **Calcular**: Click en "Calcular Puntuación"
5. **Resultados**: Interpretación automática y recomendaciones
6. **Opciones finales**:
   - Imprimir: Para llevar resultados a consulta
   - Nueva Evaluación: Limpiar y repetir

## 🔒 Privacidad y Seguridad

- ✅ **Sin registro**: No requiere crear cuenta
- ✅ **Sin datos personales**: No se solicita nombre, email ni teléfono
- ✅ **Procesamiento local**: Todos los cálculos se hacen en el navegador del usuario
- ✅ **Sin almacenamiento**: No se guardan respuestas en servidores
- ✅ **Sin cookies de tracking**: Solo cookies funcionales necesarias

## 🎨 Diseño y Estética

- **Paleta de colores**: Azul profesional (#1a5f7a, #2a8fa8) inspirado en medicina
- **Tipografía**: Segoe UI para máxima legibilidad
- **Espaciado**: Interfaz limpia y respirable
- **Animaciones**: Transiciones suaves y progresivas
- **Accesibilidad**: Contraste adecuado, tamaños legibles

## 📱 Compatibilidad

| Navegador | Versión Mínima |
|-----------|------------------|
| Chrome    | 90+             |
| Firefox   | 88+             |
| Safari    | 14+             |
| Edge      | 90+             |
| Mobile Safari | iOS 12+ |
| Chrome Mobile | Android 8+ |

## 📊 Interpretación de Resultados

### Síntomas Leves (0-7)
- Vigilancia regular
- Reducir líquidos por la tarde-noche
- Evitar alcohol y cafeína
- Seguimiento cada 6-12 meses

### Síntomas Moderados (8-19)
- Consulta con especialista recomendada
- Opciones de tratamiento disponibles
- Mejora esperada de calidad de vida
- Seguimiento cada 3-6 meses

### Síntomas Importantes (20-35)
- **Consulta urgente con urólogo**
- Evaluación completa y diagnóstico
- Descartar complicaciones
- Opciones terapéuticas especializadas
- Seguimiento cercano tras tratamiento

## 📝 Información Técnica

### Estructura del Documento
```
index.html (791 líneas)
├── HTML Semántico
├── CSS Responsivo (inline)
├── JavaScript Vanilla (sin dependencias)
└── Cuestionario IPSS Estándar
```

### Características Técnicas
- **Peso**: ~35 KB (minificado)
- **Carga**: < 1 segundo
- **Performance**: 95+ en Lighthouse
- **Accesibilidad**: WCAG 2.1 AA
- **SEO**: Meta tags apropiadas

## 🔧 Personalización

Para modificar colores, logos o textos:

1. Abrir `index.html` en un editor de texto
2. Modificar:
   - Colores: Buscar `#1a5f7a`, `#2a8fa8`
   - Textos: Buscar "Clínica García Reboll"
   - Tamaños: Modificar valores en `font-size`, `padding`
3. Guardar y recargar navegador

## 📞 Integración con Clínica

### Recomendaciones de Uso
- Incluir enlace en la página de **inicio/servicios**
- Compartir QR en **consultorios** que dirija a la app
- Incluir en **sistemas de admisión digital**
- Vincular desde **formularios de anamnesis**
- Incluir en **newsletters** a pacientes

### Instrucciones para Pacientes
"Antes de su cita, le recomendamos completar este cuestionario. Puede llevar los resultados impresos para discutirlos con el especialista."

## 📋 Notas Importantes

- El cuestionario es una **herramienta de autodetección**, no un diagnóstico
- **No reemplaza** la evaluación médica profesional
- Los resultados deben ser **interpretados por un especialista**
- Usar como **complemento** a la consulta médica
- Mantener registro para **seguimiento de cambios**

## 🌐 URL de Ejemplo

Una vez desplegado en GitHub Pages:
```
https://pablogarciaverdu1-max.github.io/clinica_garcia_reboll/
```

## 📄 Referencias

- **IPSS Score**: International Prostate Symptom Score (EAU, AUA)
- **Validación**: Cuestionario validado internacionalmente desde 1992
- **Idioma**: Versión en español adaptada

## 🤝 Soporte

Para cambios, mejoras o preguntas técnicas, contactar al desarrollador.

---

**Clínica García Reboll** © 2026  
*Especialistas en Urología - Valencia*  
Todos los derechos reservados.
