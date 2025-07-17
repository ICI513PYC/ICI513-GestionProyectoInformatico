# Documentación de Pruebas y Validación

Esta documentación describe las estrategias, herramientas y procesos de testing implementados para asegurar la calidad del sistema.

## Herramientas de Apoyo a la Calidad

### 1. Pruebas Automáticas y Manuales

#### Pruebas Automatizadas con Playwright
- **Framework:** Playwright Test
- **Navegadores:** Chromium, Firefox, WebKit
- **Cobertura:** Flujos críticos del sistema
- **Ejecución:** CI/CD y local

#### Pruebas Manuales
- **Exploratorias:** Detección de issues no previstos
- **Usabilidad:** Validación de experiencia de usuario
- **Accesibilidad:** Cumplimiento de estándares

### 2. Validación con Inteligencia Artificial

#### Herramientas IA Utilizadas
- **Revisión de código:** Análisis de patrones y mejores prácticas
- **Validación lógica:** Detección de inconsistencias
- **Optimización:** Sugerencias de mejora de rendimiento

### 3. Revisión Cruzada

#### Proceso de Code Review
- Cada integrante revisa formularios modificados por otros
- Revisión obligatoria antes del cierre del sprint
- Documentación de hallazgos y resoluciones

---

## Estrategia de Testing

### Niveles de Prueba

#### 1. Pruebas de Unidad
**Alcance:** Validaciones individuales y funciones específicas  
**Herramientas:** Jest (JavaScript), Playwright (E2E componentes)  
**Cobertura objetivo:** 80%

#### 2. Pruebas de Integración
**Alcance:** Interacción entre componentes del formulario  
**Herramientas:** Playwright  
**Enfoque:** Flujos de usuario completos

#### 3. Pruebas de Sistema
**Alcance:** Sistema completo en ambiente productivo  
**Herramientas:** Playwright + validación manual  
**Enfoque:** Casos de uso end-to-end

#### 4. Pruebas de Aceptación
**Alcance:** Validación con usuarios reales  
**Enfoque:** UAT (User Acceptance Testing)  
**Participantes:** Ciudadanos y operadores municipales

### Tipos de Prueba

#### Funcionales
- ✅ **Pruebas de flujo principal**
- ✅ **Validación de formularios**
- ✅ **Gestión de estados**
- ✅ **Manejo de errores**

#### No Funcionales
- ⚡ **Rendimiento**
- 🔒 **Seguridad**
- 📱 **Usabilidad**
- ♿ **Accesibilidad**
- 🌐 **Compatibilidad**

---

## Casos de Prueba Automatizados

### 1. Flujo Principal - Formulario de Contactabilidad

**Archivo:** `tests/flujo-inicial.spec.ts`

```typescript
test('flujo hasta pantalla de términos', async ({ page }) => {
  await page.goto('https://municipios.simple.digital.gob.cl/');

  const tarjeta = page.locator('.card:has-text("[SSVA] Form Contactabilidad")');
  await expect(tarjeta).toBeVisible();

  const boton = tarjeta.locator('.card-footer');
  await expect(boton).toHaveText(/Iniciar/i);
  await boton.click();

  await expect(page.locator('text=¡Bienvenido a Servicio de Salud')).toBeVisible();
});
```

**Objetivo:** Verificar navegación desde página principal hasta pantalla de bienvenida  
**Criterios de éxito:**
- [ ] Tarjeta de formulario visible
- [ ] Botón "Iniciar" funcional
- [ ] Mensaje de bienvenida mostrado

### 2. Modal de Términos y Condiciones

**Archivo:** `tests/modal-terminos.spec.ts`

**Objetivo:** Validar presentación y gestión de términos y condiciones  
**Criterios de éxito:**
- [ ] Modal se abre correctamente
- [ ] Términos son legibles
- [ ] Botones de aceptar/rechazar funcionan
- [ ] No se puede continuar sin aceptación

### 3. Proceso de Aceptación y Continuación

**Archivo:** `tests/aceptar-continuar.spec.ts`

**Objetivo:** Verificar flujo de aceptación de términos y continuación del proceso  
**Criterios de éxito:**
- [ ] Aceptación registrada correctamente
- [ ] Navegación al siguiente paso
- [ ] Estado persistido apropiadamente

---

## Configuración de Testing

### Configuración de Playwright

**Archivo:** `playwright.config.ts`

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://municipios.simple.digital.gob.cl/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox', 
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
```

### Scripts de Testing

```json
{
  "scripts": {
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "test:html": "playwright test --reporter=html && npx playwright show-report"
  }
}
```

---

## Casos de Prueba Manuales

### CP-001: Validación de RUT

**Objetivo:** Verificar validación correcta de RUT chileno  
**Precondiciones:** Formulario de contactabilidad abierto  

**Pasos:**
1. Ingresar RUT válido (ej: 12.345.678-9)
2. Verificar que se acepta sin errores
3. Ingresar RUT inválido (ej: 12.345.678-0)
4. Verificar mensaje de error apropiado
5. Ingresar RUT con formato incorrecto
6. Verificar validación de formato

**Resultado esperado:** Solo RUTs válidos son aceptados, mensajes de error claros

### CP-002: Responsividad en Dispositivos Móviles

**Objetivo:** Verificar funcionamiento en dispositivos móviles  
**Dispositivos:** iPhone, Android, Tablet  

**Pasos:**
1. Acceder desde dispositivo móvil
2. Verificar layout adaptativo
3. Probar navegación táctil
4. Completar formulario completo
5. Verificar funcionalidad de botones

**Resultado esperado:** Experiencia consistente en todos los dispositivos

### CP-003: Accesibilidad con Lector de Pantalla

**Objetivo:** Verificar compatibilidad con tecnologías asistivas  
**Herramientas:** NVDA, JAWS, VoiceOver  

**Pasos:**
1. Navegar usando solo teclado
2. Verificar orden de tabulación
3. Probar con lector de pantalla
4. Verificar etiquetas y descripciones
5. Completar formulario sin mouse

**Resultado esperado:** Navegación completa usando solo teclado y lector de pantalla

---

## Pruebas de Rendimiento

### Métricas Objetivo

| Métrica | Objetivo | Método de Medición |
|---------|----------|-------------------|
| Tiempo de carga inicial | ≤ 2s | Lighthouse, WebPageTest |
| Tiempo de respuesta formulario | ≤ 1s | Playwright timing |
| Tiempo de envío | ≤ 3s | Network monitoring |
| First Contentful Paint | ≤ 1.5s | Lighthouse |
| Largest Contentful Paint | ≤ 2.5s | Lighthouse |

### Herramientas de Medición

#### Lighthouse
```bash
# Análisis de rendimiento automatizado
lighthouse https://municipios.simple.digital.gob.cl/ --output=html
```

#### Playwright Performance Testing
```typescript
test('performance del formulario', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('/formulario');
  const loadTime = Date.now() - startTime;
  
  expect(loadTime).toBeLessThan(2000); // 2 segundos
});
```

---

## Pruebas de Seguridad

### Validaciones de Seguridad

#### 1. Inyección de Código
**Objetivo:** Verificar protección contra XSS y SQL injection  
**Método:** Intentar ingresar scripts maliciosos en campos de texto  
**Resultado esperado:** Scripts sanitizados o rechazados

#### 2. Validación de Datos
**Objetivo:** Verificar validación server-side  
**Método:** Modificar datos en frontend y enviar  
**Resultado esperado:** Validación en backend rechaza datos inválidos

#### 3. Protección de Datos Sensibles
**Objetivo:** Verificar manejo seguro de información personal  
**Método:** Inspeccionar transmisión de datos  
**Resultado esperado:** Datos encriptados en tránsito

### Herramientas de Seguridad

- **OWASP ZAP:** Análisis automático de vulnerabilidades
- **Browser DevTools:** Inspección de tráfico de red
- **Manual Testing:** Pruebas de penetración básicas

---

## Gestión de Defectos

### Clasificación de Severidad

#### Crítica
- Sistema no funcional
- Pérdida de datos
- Vulnerabilidad de seguridad

#### Alta
- Funcionalidad principal no funciona
- Datos incorrectos procesados
- Error que bloquea flujo principal

#### Media
- Funcionalidad secundaria afectada
- Problemas de usabilidad
- Errores de validación menores

#### Baja
- Problemas cosméticos
- Mejoras de UX
- Optimizaciones

### Proceso de Reporte

1. **Detección:** Durante testing o uso normal
2. **Documentación:** Crear issue en GitHub con detalles
3. **Triage:** Asignar severidad y prioridad
4. **Asignación:** Asignar a desarrollador
5. **Resolución:** Fix y validación
6. **Cierre:** Confirmación de resolución

### Template de Bug Report

```markdown
## Bug Report

**Título:** [Descripción breve del problema]

**Severidad:** [Crítica/Alta/Media/Baja]
**Prioridad:** [Alta/Media/Baja]
**Componente:** [Formulario/Validación/UI/etc.]

**Descripción:**
[Descripción detallada del problema]

**Pasos para Reproducir:**
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

**Resultado Esperado:**
[Qué debería suceder]

**Resultado Actual:**
[Qué está sucediendo]

**Entorno:**
- Navegador: [Chrome/Firefox/Safari]
- Versión: [Versión del navegador]
- OS: [Sistema operativo]
- URL: [URL donde ocurre]

**Evidencia:**
- [ ] Screenshot adjunto
- [ ] Video adjunto
- [ ] Logs de consola

**Workaround:**
[Solución temporal si existe]
```

---

## Reportes de Testing

### Reporte de Ejecución de Pruebas

#### Resumen Ejecutivo
- **Total de pruebas:** [X]
- **Pruebas exitosas:** [X]
- **Pruebas fallidas:** [X]
- **Cobertura:** [X%]
- **Duración:** [X minutos]

#### Detalles por Categoría

| Categoría | Total | Exitosas | Fallidas | % Éxito |
|-----------|-------|----------|----------|---------|
| Flujo principal | 5 | 5 | 0 | 100% |
| Validaciones | 10 | 9 | 1 | 90% |
| UI/UX | 8 | 8 | 0 | 100% |
| Rendimiento | 3 | 3 | 0 | 100% |

#### Issues Identificados
- [Issue 1]: [Descripción y severidad]
- [Issue 2]: [Descripción y severidad]

### Métricas de Calidad

#### Tendencias por Sprint
- **Defectos encontrados:** Tracking por sprint
- **Tiempo de resolución:** Promedio de días
- **Reincidencia:** % de bugs que reaparecen
- **Satisfacción del usuario:** Rating en pruebas UAT

---

## Plan de Mejora Continua

### Retrospectiva de Testing

#### ✅ Lo que funciona bien
- Automatización con Playwright es efectiva
- Revisión cruzada detecta problemas temprano
- Documentación de casos es clara

#### 🔧 Áreas de mejora
- Aumentar cobertura de pruebas automatizadas
- Implementar pruebas de rendimiento continuas
- Mejorar testing en dispositivos móviles

#### 🆕 Próximas implementaciones
- Testing visual con Playwright
- Integración con herramientas de monitoring
- Automatización de pruebas de accesibilidad

### Capacitación del Equipo

#### Temas de Capacitación
- Mejores prácticas de testing
- Herramientas de automatización avanzadas
- Testing de seguridad
- Pruebas de accesibilidad

---

**Versión:** 1.0  
**Fecha de creación:** [Fecha actual]  
**Última actualización:** [Fecha actual]  
**Próxima revisión:** [Fecha + 1 mes]  
**Responsable:** Equipo de QA