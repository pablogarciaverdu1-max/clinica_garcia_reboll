# 📤 GUÍA COMPLETA: SUBIR A GITHUB Y PUBLICAR

## ⚡ VERSIÓN RÁPIDA (5 MINUTOS)

Si solo quieres que funcione YA:

### Paso 1: Crear Repositorio en GitHub
1. Ve a https://github.com/new
2. **Repository name**: `clinica-ipss` (o el nombre que prefieras)
3. **Description**: "Cuestionario IPSS - Clínica García Reboll"
4. Selecciona **Public** (para que sea público)
5. Haz click en **Create repository**

### Paso 2: Subir el Archivo
1. En tu nuevo repositorio, haz click en **Add file** → **Upload files**
2. Arrastra `index_mejorado.html` a la caja de subida
3. O haz click para seleccionar el archivo
4. **Nombre**: Cambia a `index.html` (importante!)
5. Haz click en **Commit changes**

### Paso 3: Activar GitHub Pages
1. Ve a **Settings** (pestaña de configuración)
2. En el menú izquierdo, busca **Pages**
3. En **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`
   - **Branch**: Selecciona `main` y `/root`
4. Haz click en **Save**
5. Espera 2-3 minutos

### Paso 4: ¡Listo!
Tu página estará en:
```
https://tu-usuario-github.github.io/clinica-ipss/
```

---

## 📋 VERSIÓN CON DETALLES (RECOMENDADO)

### OPCIÓN A: Web de GitHub (Sin instalar nada)

#### Paso 1️⃣: Crear Repositorio
```
1. Abre https://github.com (crea cuenta si no tienes)
2. Haz click en "+" arriba a la derecha
3. Selecciona "New repository"
4. Completa:
   - Repository name: clinica-ipss
   - Description: Cuestionario IPSS Clínica García Reboll
   - Visibility: Public ✓
5. Haz click en "Create repository"
```

#### Paso 2️⃣: Subir el HTML
```
En la página de tu repositorio vacío:

1. Haz click en "Add file" → "Upload files"
2. Arrastra index_mejorado.html
3. O haz click "choose your files" y selecciona
4. En el nombre del archivo, CAMBIA:
   ❌ index_mejorado.html
   ✅ index.html (IMPORTANTE!)
5. Abajo, en "Commit changes", haz click
6. Espera a que se suba (verde = OK)
```

#### Paso 3️⃣: Activar GitHub Pages
```
En tu repositorio:

1. Haz click en "Settings" (arriba a la derecha)
2. En el menú izquierdo, busca "Pages"
3. En "Build and deployment":
   - Source: "Deploy from a branch" (dropdown)
   - Branch: "main" (dropdown)
   - Carpeta: "/root" o "/(root)" (dropdown)
4. Haz click en "Save"
5. ESPERA 2-3 MINUTOS
6. Recarga la página de Settings
7. Verás un mensaje verde: 
   "Your site is published at https://..."
```

#### Paso 4️⃣: Tu URL pública
```
Tu página web estará EN VIVO en:

https://tu-nombre-github.github.io/clinica-ipss/

Ejemplo:
https://pablogarciaverdu.github.io/clinica-ipss/
```

#### ✅ Verifica que funciona:
- Abre tu URL en navegador
- Deberías ver el cuestionario IPSS
- Prueba a completarlo
- Verifica que muestre resultados
- Intenta agendar una cita

---

### OPCIÓN B: Usando Git en Terminal (Más profesional)

Si tienes **Git instalado** en tu computadora:

#### Paso 1️⃣: Crear carpeta y archivo
```bash
# Crea una carpeta
mkdir clinica-ipss
cd clinica-ipss

# Copia el archivo index.html aquí
# (Cambia el nombre de index_mejorado.html a index.html)

# Verifica que esté
ls -la
# Deberías ver: index.html
```

#### Paso 2️⃣: Inicializar Git
```bash
# Inicializa repositorio local
git init

# Agrega el archivo
git add index.html

# Crea el primer commit
git commit -m "Cuestionario IPSS - Clínica García Reboll"
```

#### Paso 3️⃣: Conectar con GitHub
```bash
# 1. Ve a GitHub y crea un repositorio vacío (sin README)
# 2. Copia la URL HTTPS que te muestra (ej: https://github.com/tu-usuario/clinica-ipss.git)

# 3. En terminal, agrega el origen remoto:
git remote add origin https://github.com/tu-usuario/clinica-ipss.git

# 4. Renombra branch si es necesario (solo primera vez)
git branch -M main

# 5. Sube a GitHub
git push -u origin main
```

#### Paso 4️⃣: Activar GitHub Pages
```
En GitHub (web):
1. Repositorio → Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save
5. Espera 2-3 minutos
```

#### ✅ Tu página está VIVA en:
```
https://tu-usuario.github.io/clinica-ipss/
```

---

## 🔧 PERSONALIZACIÓN ANTES DE SUBIR

Antes de subir, edita el HTML para cambiar datos de la clínica:

### Busca y reemplaza:

**1. Teléfono**
```html
❌ +34 XXX XXX XXX
✅ +34 600 123 456  (tu teléfono real)
```

**2. Email**
```html
❌ citas@clinicagarciareboll.com
✅ tu-email@clinicagarciareboll.com
```

**3. Horario**
```html
❌ Lunes a Viernes 9:00 - 20:00
✅ Tu horario real
```

**4. Nombre Clínica** (opcional, aparece en varios lugares)
```html
Busca: "Clínica García Reboll"
Reemplaza con tu nombre clínica
```

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] Descargaste `index_mejorado.html`
- [ ] Renombraste a `index.html`
- [ ] Personalizaste teléfono, email, horario
- [ ] Probaste localmente (abre en navegador)
- [ ] Creaste repositorio GitHub
- [ ] Subiste el archivo `index.html`
- [ ] Activaste GitHub Pages
- [ ] Esperaste 2-3 minutos
- [ ] Tienes tu URL pública
- [ ] Probaste que funciona en internet

---

## 🎯 PRUEBA LA PÁGINA

Una vez publicada:

1. **Abre tu URL**:
   ```
   https://tu-usuario.github.io/clinica-ipss/
   ```

2. **Prueba el cuestionario**:
   - Responde todas las preguntas
   - Haz click "Ver Resultados"
   - Deberías ver tu puntuación

3. **Prueba el formulario**:
   - Completa nombre, email, teléfono
   - Selecciona horario
   - Haz click "Agendar Cita"
   - Deberías ver: "¡Gracias! Tu solicitud ha sido enviada"

4. **Prueba en móvil**:
   - Abre tu URL en teléfono
   - Verifica que se ve bien
   - Prueba tocando los botones

---

## 🔗 COMPARTIR LA URL

Ahora puedes compartir tu página en:

**Con el cliente**:
```
"Mira, creé una herramienta donde tus pacientes 
pueden evaluar síntomas. Abre este enlace:"

https://tu-usuario.github.io/clinica-ipss/
```

**En redes sociales**:
```
"Nueva herramienta: Cuestionario IPSS para evaluar 
síntomas urinarios. Completa en 5 minutos. Haz clic:"

https://tu-usuario.github.io/clinica-ipss/
```

**En tu web**:
```html
<!-- Copia esto en tu página web -->
<iframe 
  src="https://tu-usuario.github.io/clinica-ipss/"
  width="100%"
  height="1400px"
  style="border: none; border-radius: 8px;"
></iframe>
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "No veo mi página después de 5 minutos"
✅ **Solución**:
1. Recarga la página (Ctrl+F5 o Cmd+Shift+R)
2. Borra cache del navegador
3. Abre en pestaña privada/incógnito
4. Verifica que el archivo se llamaba `index.html` (no `index_mejorado.html`)

### "El cuestionario no funciona"
✅ **Solución**:
1. Abre consola (F12) y mira errores
2. Verifica que copiaste el archivo COMPLETO
3. Intenta en otro navegador (Chrome, Firefox, Safari)

### "Ver la página con URL larga/fea"
✅ **Solución** (opcional):
Compra dominio personalizado (opcional, no necesario):
- godaddy.com
- namecheap.com
- Configura en GitHub Pages → Custom domain

---

## 📊 GITHUB PAGES - CARACTERÍSTICAS

Una vez publicado con GitHub Pages:

✅ **Dominio gratuito**: `tu-usuario.github.io`
✅ **HTTPS automático**: Seguro y profesional
✅ **Disponible 24/7**: Siempre en línea
✅ **Gratis**: Sin costo de hosting
✅ **Rápido**: CDN global de GitHub
✅ **Fácil actualización**: Solo hace push a GitHub
✅ **Historial de versiones**: Git controla cambios

---

## 🚀 ACTUALIZAR PÁGINA EN FUTURO

Si necesitas cambiar algo:

**Opción 1: Web de GitHub (sin terminal)**
```
1. Ve a tu repositorio en GitHub
2. Haz click en index.html
3. Haz click en el ícono de lápiz (edit)
4. Cambia lo que necesites
5. Haz click "Commit changes"
6. Espera 1-2 minutos
7. ¡Actualizado!
```

**Opción 2: Con Git (terminal)**
```bash
# Haz los cambios locales
# Luego:
git add index.html
git commit -m "Actualización: cambié datos"
git push origin main
# ¡Listo en 1-2 minutos!
```

---

## 📱 DOMINIO PERSONALIZADO (OPCIONAL)

Si quieres una URL más profesional:

```
De: https://pablogarciaverdu.github.io/clinica-ipss/

A: https://clinica-ipss.com/
```

**Pasos**:
1. Compra dominio (godaddy, namecheap, etc)
2. En GitHub: Settings → Pages → Custom domain
3. Agrega: `clinica-ipss.com`
4. Sigue instrucciones de DNS
5. Espera 24-48 horas

---

## 💡 TIPS PROFESIONALES

### Para presentar al cliente:

**Email**:
```
Asunto: Tu cuestionario IPSS está VIVO

Hola [Cliente],

Publiqué tu cuestionario. Aquí puedes verlo:
https://tu-usuario.github.io/clinica-ipss/

✅ Completamente funcional
✅ Profesional y moderno
✅ Formulario de citas integrado
✅ Disponible 24/7

¿Te gusta? ¿Quieres cambios?

Saludos,
[Tu nombre]
```

**WhatsApp/SMS**:
```
Hola, tu app IPSS está lista! 🎉
https://tu-usuario.github.io/clinica-ipss/
Pacientes pueden agendar citas directo.
¿Te late así o cambio algo?
```

---

## 📊 SIGUIENTE PASO DESPUÉS

Una vez que tu página funciona:

1. **Monitorea visitas** (opcional):
   - Agrega Google Analytics
   - Mira cuántos pacientes usan
   - Mejora el formulario según datos

2. **Recopila datos de citas**:
   - Ahora necesitas backend para guardar datos
   - Opciones: Formspree, Netlify Forms, Firebase, etc.
   - (Por ahora solo muestra mensaje de éxito)

3. **Integra en web clínica**:
   - Agrégalo como iframe en su sitio web
   - O enlaza desde su página de inicio
   - Más pacientes = más citas

4. **Versiones futuras**:
   - App nativa iOS/Android
   - Historial de evaluaciones
   - Recordatorios por email
   - Dashboard para médicos

---

## ✨ ¡LISTO!

Ya tienes TODO lo que necesitas:

✅ **HTML profesional** - Listo para usar
✅ **Funcionalidad completa** - Cuestionario + citas
✅ **Hosting gratuito** - GitHub Pages
✅ **Dominio profesional** - github.io
✅ **HTTPS seguro** - Automático
✅ **Disponible 24/7** - Sin mantenimiento

**Únicamente necesitas**:
1. Descargar `index_mejorado.html`
2. Renombrar a `index.html`
3. Cambiar teléfono/email
4. Subir a GitHub
5. Activar GitHub Pages
6. ¡Compartir URL con cliente!

---

## 🎉 CONCLUSIÓN

En menos de 10 minutos tendrás:

- ✅ Una página web profesional
- ✅ Con cuestionario IPSS funcional
- ✅ Con formulario de agendamiento
- ✅ Publicada en internet
- ✅ URL compartible
- ✅ 100% operativa

**¡Que disfrutes! 🚀**

---

**Preguntas?** Revisa esta guía o intenta los pasos nuevamente. 

Si algo no funciona:
1. Verifica que subiste `index.html` (no `index_mejorado`)
2. Espera 3 minutos (GitHub Pages es lento a veces)
3. Recarga navegador (Ctrl+F5)
4. Intenta en navegador diferente

---

**Última actualización**: Junio 2026
**Versión**: 1.0
**Estado**: ✅ Listo para producción
