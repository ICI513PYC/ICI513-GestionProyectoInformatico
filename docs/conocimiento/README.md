# Base de Conocimientos

Esta sección contiene soluciones a problemas comunes, mejores prácticas y lecciones aprendidas durante el desarrollo del proyecto.

## Problemas Comunes y Soluciones

### 1. Problemas de la Plataforma SIMPLE

#### Problema: Limitaciones de JavaScript
**Descripción:** La plataforma SIMPLE tiene restricciones en el uso de ciertos features de JavaScript moderno.

**Síntomas:**
- Errores de sintaxis con ES6+
- Funciones no reconocidas
- Problemas con async/await

**Solución:**
```javascript
// ❌ Evitar ES6+ avanzado
const data = await fetch('/api/data');

// ✅ Usar JavaScript compatible
function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/data', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Procesar respuesta
        }
    };
    xhr.send();
}
```

#### Problema: Conflictos con CSS de Bootstrap
**Descripción:** Los estilos personalizados entran en conflicto con Bootstrap preexistente.

**Solución:**
```css
/* ✅ Usar especificidad alta para sobrescribir */
.formulario-custom .form-control {
    border-color: #007bff !important;
}

/* ✅ Usar clases específicas del proyecto */
.ssva-form-input {
    /* Estilos personalizados */
}
```

### 2. Problemas de Validación

#### Problema: Validación de RUT Chileno
**Descripción:** Implementar validación correcta del dígito verificador del RUT.

**Solución:**
```javascript
function validarRUT(rut) {
    // Limpiar formato
    rut = rut.replace(/\./g, '').replace('-', '');
    
    if (rut.length < 8 || rut.length > 9) {
        return false;
    }
    
    var cuerpo = rut.slice(0, -1);
    var dv = rut.slice(-1).toUpperCase();
    
    // Calcular dígito verificador
    var suma = 0;
    var multiplicador = 2;
    
    for (var i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    
    var dvCalculado = 11 - (suma % 11);
    if (dvCalculado === 11) dvCalculado = '0';
    if (dvCalculado === 10) dvCalculado = 'K';
    
    return dv === dvCalculado.toString();
}
```

#### Problema: Validación de Email en Tiempo Real
**Descripción:** Implementar validación de email que funcione en SIMPLE.

**Solución:**
```javascript
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarEmailEnTiempoReal(input) {
    input.addEventListener('blur', function() {
        var email = this.value;
        var errorDiv = document.getElementById('email-error');
        
        if (email && !validarEmail(email)) {
            errorDiv.textContent = 'Formato de email inválido';
            errorDiv.style.display = 'block';
            this.classList.add('error');
        } else {
            errorDiv.style.display = 'none';
            this.classList.remove('error');
        }
    });
}
```

### 3. Problemas de UI/UX

#### Problema: Modal de Términos No Responsive
**Descripción:** El modal de términos y condiciones no se adapta bien a dispositivos móviles.

**Solución:**
```css
.modal-terminos {
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
}

@media (max-width: 768px) {
    .modal-terminos {
        width: 95%;
        margin: 10px;
    }
    
    .modal-terminos .modal-body {
        padding: 15px;
        font-size: 14px;
    }
}
```

#### Problema: Problemas de Accesibilidad
**Descripción:** Formularios no son accesibles para lectores de pantalla.

**Solución:**
```html
<!-- ✅ Usar labels apropiados -->
<label for="rut-input">RUT (sin puntos, con guión)</label>
<input type="text" id="rut-input" name="rut" 
       aria-describedby="rut-help" required>
<div id="rut-help" class="help-text">
    Formato: 12345678-9
</div>

<!-- ✅ Usar aria-labels para elementos dinámicos -->
<div role="alert" aria-live="polite" id="error-messages">
    <!-- Mensajes de error aparecen aquí -->
</div>
```

### 4. Problemas de Rendimiento

#### Problema: Carga Lenta de Formularios
**Descripción:** Los formularios tardan mucho en cargar en la plataforma SIMPLE.

**Solución:**
```javascript
// ✅ Optimizar carga de scripts
function cargarFormularioOptimizado() {
    // Cargar elementos críticos primero
    mostrarEstructuraBasica();
    
    // Cargar validaciones después
    setTimeout(function() {
        inicializarValidaciones();
    }, 100);
    
    // Cargar elementos no críticos al final
    setTimeout(function() {
        cargarElementosSecundarios();
    }, 500);
}

// ✅ Usar debouncing para validaciones
function debounce(func, wait) {
    var timeout;
    return function executedFunction(...args) {
        var later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

var validarConDebounce = debounce(validarFormulario, 300);
```

### 5. Problemas de Testing

#### Problema: Playwright No Encuentra Elementos
**Descripción:** Los selectores de Playwright fallan intermitentemente.

**Solución:**
```typescript
// ❌ Selector frágil
await page.click('.card-footer');

// ✅ Selector más específico y robusto
await page.click('.card:has-text("[SSVA] Form Contactabilidad") .card-footer');

// ✅ Usar waitFor para elementos dinámicos
await page.waitForSelector('.card:has-text("[SSVA] Form Contactabilidad")', {
    state: 'visible',
    timeout: 10000
});

// ✅ Usar text content cuando sea posible
await page.click('text=Iniciar');
```

#### Problema: Tests Fallan en CI/CD
**Descripción:** Las pruebas pasan localmente pero fallan en el pipeline.

**Solución:**
```typescript
// ✅ Configurar timeouts apropiados
test.setTimeout(60000); // 60 segundos

// ✅ Agregar waits explícitos
await page.waitForLoadState('networkidle');

// ✅ Usar retry para elementos flaky
await expect(async () => {
    await page.click('.boton-enviar');
    await expect(page.locator('.mensaje-exito')).toBeVisible();
}).toPass({ timeout: 30000 });
```

---

## Mejores Prácticas Técnicas

### 1. Desarrollo en Plataforma SIMPLE

#### Estructura de Código
```javascript
// ✅ Estructura recomendada para formularios SIMPLE
var FormularioSSVA = {
    // Configuración
    config: {
        validacionTiempoReal: true,
        mensajesError: {
            rut: 'RUT inválido',
            email: 'Email inválido',
            requerido: 'Campo obligatorio'
        }
    },
    
    // Inicialización
    init: function() {
        this.bindEvents();
        this.setupValidation();
    },
    
    // Event handlers
    bindEvents: function() {
        // Eventos del formulario
    },
    
    // Validaciones
    setupValidation: function() {
        // Configurar validaciones
    }
};
```

#### Manejo de Errores
```javascript
// ✅ Manejo robusto de errores
function procesarFormulario() {
    try {
        validarDatos();
        enviarFormulario();
    } catch (error) {
        console.error('Error procesando formulario:', error);
        mostrarMensajeError('Ha ocurrido un error. Intente nuevamente.');
        
        // Log para debugging
        if (window.console && console.log) {
            console.log('Detalles del error:', error);
        }
    }
}
```

### 2. Gestión de Estados

#### Seguimiento de Estado del Formulario
```javascript
var EstadoFormulario = {
    estado: 'inicial', // inicial, completando, validando, enviando, completado
    datos: {},
    errores: {},
    
    cambiarEstado: function(nuevoEstado) {
        console.log('Cambiando estado de', this.estado, 'a', nuevoEstado);
        this.estado = nuevoEstado;
        this.actualizarUI();
    },
    
    actualizarUI: function() {
        switch(this.estado) {
            case 'enviando':
                this.mostrarSpinner();
                break;
            case 'completado':
                this.mostrarExito();
                break;
            // etc.
        }
    }
};
```

### 3. Testing Efectivo

#### Organización de Tests
```typescript
// ✅ Estructura de tests recomendada
describe('Formulario de Contactabilidad', () => {
    beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });
    
    describe('Flujo principal', () => {
        test('debe mostrar formulario correctamente', async ({ page }) => {
            // Test específico
        });
        
        test('debe validar datos correctamente', async ({ page }) => {
            // Test específico
        });
    });
    
    describe('Casos de error', () => {
        test('debe manejar RUT inválido', async ({ page }) => {
            // Test de error
        });
    });
});
```

---

## Lecciones Aprendidas

### 1. Gestión de Configuración

#### Lo que Funcionó Bien ✅
- **Comunicación previa:** Avisar antes de cambios evitó conflictos
- **Respaldos manuales:** Salvaron el proyecto en varias ocasiones
- **Documentación durante desarrollo:** Evitó pérdida de conocimiento

#### Lo que se Puede Mejorar 🔧
- **Automatización de respaldos:** Reducir dependencia de proceso manual
- **Validación de ambientes:** Implementar checks automáticos
- **Versionado más granular:** Mejorar seguimiento de cambios menores

### 2. Desarrollo Técnico

#### Aprendizajes Clave
1. **La plataforma SIMPLE tiene limitaciones específicas** que requieren adaptación
2. **Las validaciones del lado cliente son cruciales** para buena UX
3. **La compatibilidad cross-browser es esencial** en ambiente gubernamental
4. **Las pruebas automatizadas ahorran tiempo** en el largo plazo

#### Errores Comunes Evitados
- No asumir que funciones modernas de JavaScript están disponibles
- Siempre probar en múltiples navegadores antes de finalizar
- No confiar solo en validaciones del lado cliente
- Documentar decisiones técnicas importantes

### 3. Gestión de Equipo

#### Dinámicas Exitosas
- **Rotación de roles:** Mantuvo al equipo motivado y aprendiendo
- **Revisión cruzada:** Mejoró la calidad del código
- **Retrospectivas estructuradas:** Permitieron mejora continua

#### Desafíos Superados
- **Comunicación con cliente:** Establecer canales claros de feedback
- **Gestión de expectativas:** Explicar limitaciones técnicas temprano
- **Distribución de carga:** Evitar que una persona acumule demasiado trabajo

---

## FAQ - Preguntas Frecuentes

### ¿Cómo debuggear problemas en SIMPLE?

**R:** Usar las herramientas de desarrollador del navegador:
```javascript
// Agregar logs para debugging
console.log('Estado actual:', estadoFormulario);

// Verificar si elementos existen
if (document.getElementById('mi-elemento')) {
    console.log('Elemento encontrado');
} else {
    console.error('Elemento no existe');
}
```

### ¿Qué hacer si un formulario no responde?

**R:** Checklist de troubleshooting:
1. Verificar errores en consola del navegador
2. Confirmar que todos los scripts cargaron
3. Validar que no hay conflictos de CSS
4. Probar en modo incógnito
5. Verificar en diferentes navegadores

### ¿Cómo manejar cambios de último minuto?

**R:** Proceso recomendado:
1. Evaluar impacto del cambio
2. Crear respaldo del estado actual
3. Comunicar cambio al equipo
4. Implementar en ambiente de pruebas
5. Validar funcionamiento
6. Desplegar con monitoring

### ¿Cuándo escalar un problema técnico?

**R:** Escalar cuando:
- El problema bloquea desarrollo por más de 2 horas
- Afecta funcionalidad crítica del sistema
- Requiere conocimiento especializado no disponible en el equipo
- Involucra configuración de infraestructura de SIMPLE

---

## Recursos y Referencias

### Documentación Técnica
- [Documentación oficial SIMPLE](https://simple.digital.gob.cl/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Playwright Documentation](https://playwright.dev/)

### Herramientas Útiles
- **Validador de RUT online:** Para verificar implementación
- **BrowserStack:** Testing multi-navegador
- **Lighthouse:** Auditoría de rendimiento y accesibilidad

### Contactos de Soporte
- **Soporte SIMPLE:** [Información de contacto]
- **Equipo técnico interno:** [Contactos del equipo]
- **Escalación urgente:** [Proceso de escalación]

---

**Versión:** 1.0  
**Última actualización:** [Fecha actual]  
**Mantenido por:** Todo el equipo  
**Próxima revisión:** Final de cada sprint