# Guía de Integración - Cuestionario IPSS

## 🔗 Opciones de Integración

### 1. GitHub Pages (Recomendado - Gratuito)

#### Paso 1: Crear Repositorio
```bash
# Si no existe, crear repositorio en GitHub
# Nombre sugerido: clinica_garcia_reboll
```

#### Paso 2: Subir Archivos
```bash
git clone https://github.com/<tu-usuario>/clinica_garcia_reboll.git
cd clinica_garcia_reboll
# Copiar index.html aquí
git add .
git commit -m "Agregar cuestionario IPSS"
git push origin main
```

#### Paso 3: Activar GitHub Pages
1. Ir a **Settings** → **Pages**
2. Seleccionar **Deploy from a branch**
3. Elegir rama **main** y carpeta **root**
4. Click **Save**

#### Resultado
```
URL pública: https://<usuario>.github.io/clinica_garcia_reboll/
```

### 2. Integración en Sitio Web Actual

#### Opción A: Reemplazar página completa
```
1. Descargar index.html
2. Subirlo a servidor web (vía FTP/SFTP)
3. Asignarlo a una URL, ej: clinica.com/ipss/
```

#### Opción B: Incrustación como iframe
```html
<!-- En su página web -->
<div class="ipss-container">
  <iframe 
    id="ipss-form"
    src="/ipss/index.html"
    width="100%"
    height="1400px"
    style="border: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
    title="Cuestionario IPSS"
  ></iframe>
</div>

<style>
  .ipss-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 0 20px;
  }
</style>
```

#### Opción C: Dentro de un acordeón/modal
```html
<!-- En Bootstrap, por ejemplo -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ipssModal">
  Evaluar Síntomas
</button>

<div class="modal fade modal-lg" id="ipssModal">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Cuestionario IPSS</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <iframe 
          src="/ipss/index.html"
          width="100%"
          height="800px"
          style="border: none;"
        ></iframe>
      </div>
    </div>
  </div>
</div>
```

### 3. Sitios Populares

#### Wordpress
1. **Método 1**: Página HTML estática
   - Dashboard → Páginas → Nueva
   - Editor HTML → Pegar código `<iframe>`
   - Publicar

2. **Método 2**: Plugin Custom HTML
   - Instalar "Custom HTML"
   - Crear bloque con iframe
   - Publicar

#### Wix
1. Ir a **Editor** → **+ Agregar**
2. Seleccionar **HTML Embed**
3. Pegar código iframe:
```html
<iframe src="URL_DEL_CUESTIONARIO" width="100%" height="1400px" style="border:none;border-radius:8px;"></iframe>
```

#### Squarespace
1. **+** → **Code Block**
2. Pegar iframe
3. Ajustar altura según necesidad

#### Shopify
1. **Online Store** → **Pages**
2. **Add page** → Editor HTML
3. Insertar iframe en la sección deseada

---

## 📧 Integración con Email Marketing

### Incluir en Newsletters
```html
<p>Antes de su próxima cita, complete nuestro cuestionario IPSS:</p>
<a href="https://[URL_DEL_CUESTIONARIO]" class="btn" style="background:#2a8fa8;color:white;padding:10px 20px;text-decoration:none;border-radius:4px;display:inline-block;">
  Evaluar Mis Síntomas
</a>
```

### Código QR
Generar QR que apunte a la URL del cuestionario:
- Usar: https://qr-server.com/api/qrcode?size=300x300&data=[URL]
- Imprimir en folletos, afiches de consultorios

---

## 📱 Integración en Aplicaciones Móviles

### React Native / Flutter
```javascript
// React Native WebView
import { WebView } from 'react-native-webview';

<WebView 
  source={{ uri: 'https://[URL_CUESTIONARIO]' }}
  style={{ flex: 1 }}
/>
```

### Aplicación Android Nativa
```xml
<WebView
  android:id="@+id/webview"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
/>
```

---

## 🔐 Consideraciones de Seguridad

### HTTPS Obligatorio
- El cuestionario debe servirse bajo **HTTPS** (no HTTP)
- GitHub Pages lo proporciona automáticamente
- Verificar certificado SSL en servidor web

### CORS (Cross-Origin)
Si se integra en sitio diferente:
```html
<!-- Agregar header en servidor -->
Access-Control-Allow-Origin: https://sudominio.com
```

### Validación
- Los datos se procesan en el navegador del cliente
- No se envían a servidores externos
- Totalmente seguro para RGPD/LOPD

---

## 📊 Monitoreo y Analytics

### Google Analytics (Opcional)
Agregar a `index.html` antes de `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Métricas a Monitorear
- Visitantes únicos
- Tasa de completación
- Conversión (pacientes que completan → citan)
- Dispositivos (móvil vs escritorio)

---

## 🎯 Links de Distribución

### Código para Sitio Web
```html
<!-- Banner llamada a acción -->
<section style="background:#f0f8fb;padding:30px;text-align:center;border-radius:8px;margin:40px 0;">
  <h3 style="color:#1a5f7a;margin-bottom:15px;">Evaluación Gratuita de Síntomas</h3>
  <p style="margin-bottom:20px;">Completa nuestro cuestionario IPSS para evaluar tus síntomas urinarios</p>
  <a href="https://[URL_CUESTIONARIO]" style="background:#2a8fa8;color:white;padding:12px 30px;text-decoration:none;border-radius:4px;font-weight:bold;display:inline-block;">
    Comenzar Cuestionario →
  </a>
</section>
```

### Redes Sociales
**Facebook/Instagram Post:**
> "¿Tienes síntomas urinarios? 🩺 Completa nuestro cuestionario IPSS en menos de 5 minutos. Es gratuito, confidencial y sin compromiso. [LINK]"

**LinkedIn Post:**
> "Nueva herramienta: Cuestionario IPSS para evaluación de síntomas urinarios. Ideal para pacientes que desean hacer una autoevaluación antes de su consulta. [LINK]"

---

## 🔄 Mantenimiento y Actualizaciones

### Versioning
- Versión actual: 1.0
- Cambios documentados en CHANGELOG

### Actualizaciones Futuras
Si necesita ajustar:
1. Modificar `index.html`
2. Hacer commit
3. Push a repositorio
4. GitHub Pages actualiza automáticamente

### Respaldos
- Mantener copia local de `index.html`
- Exportar cambios periódicamente

---

## 🚨 Troubleshooting

### La página no carga
- ✓ Verificar URL es correcta
- ✓ Comprobar conexión HTTPS
- ✓ Limpiar cache navegador (Ctrl+Shift+Del)
- ✓ Intentar en otro navegador

### iframe no se muestra
- ✓ Verificar atributo `src` es URL válida
- ✓ Comprobar dimensiones (width/height)
- ✓ Revisar headers CORS del servidor

### Respuestas no se guardan
- ✓ Esto es normal (por diseño, sin almacenamiento)
- ✓ Usuario debe tomar captura/imprimir si necesita guardar

---

## 📞 Soporte Técnico

Para problemas de integración:
1. Revisar esta guía
2. Verificar URL es accesible públicamente
3. Probar en navegador diferente
4. Contactar soporte técnico

---

**Última actualización**: Junio 2026
