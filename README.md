# ICI513 - Gestión de Proyecto Informático

Sistema de digitalización de formularios y procesos desarrollado para la plataforma SIMPLE, implementando estándares de gestión de configuración y calidad.

## 📋 Descripción del Proyecto

Este proyecto implementa un sistema de formularios digitales que permite a los ciudadanos realizar trámites municipales de manera electrónica, específicamente enfocado en servicios de salud y otros servicios públicos.

### Tecnologías Utilizadas
- **Plataforma:** SIMPLE (Servicio Integral Municipal de Procedimientos Locales Electrónicos)
- **Frontend:** JavaScript, HTML, CSS
- **Librerías:** Bootstrap, SweetAlert
- **Testing:** Playwright
- **Versionado:** Git/GitHub

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18.0 o superior
- npm 8.0 o superior
- Git

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/ICI513PYC/ICI513-GestionProyectoInformatico.git

# Navegar al directorio del proyecto
cd ICI513-GestionProyectoInformatico

# Instalar dependencias de testing
cd Pruebas
npm install

# Instalar navegadores para Playwright
npx playwright install
```

### Ejecutar Pruebas
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar en modo UI
npm run test:ui

# Generar reporte HTML
npm run test:html
```

## 📚 Documentación

La documentación completa del proyecto está organizada en la carpeta [`docs/`](./docs/):

### 📖 Manuales
- **[Manual de Usuario y Operación](./docs/manual-usuario/README.md)** - Guías para usuarios finales y operadores del sistema
- **[Manual de Instalación](./docs/manual-instalacion/README.md)** - Instrucciones de instalación y configuración

### ⚙️ Gestión de Configuración
- **[Reglas de Configuración](./docs/configuracion/reglas-configuracion.md)** - Políticas y reglas de gestión de configuración
- **[Guía de Cambios](./docs/configuracion/guia-cambios.md)** - Proceso para gestionar cambios y versiones

### 📋 Planificación y Proceso
- **[Documentación de Planificación](./docs/planificacion/README.md)** - Minutas, tareas y retrospectivas
- **[Plantilla de Retrospectiva](./docs/planificacion/retrospectivas/plantilla-retrospectiva.md)** - Formato Mad, Sad, Glad

### 📝 Especificaciones Técnicas
- **[Especificación de Requerimientos](./docs/especificaciones/README.md)** - Requerimientos funcionales y no funcionales

### 🧪 Testing y Calidad
- **[Documentación de Pruebas](./docs/pruebas/README.md)** - Estrategias de testing y validación
- **[Base de Conocimientos](./docs/conocimiento/README.md)** - Soluciones a problemas comunes

## 🏗️ Estructura del Proyecto

```
ICI513-GestionProyectoInformatico/
├── docs/                          # 📚 Documentación completa
│   ├── configuracion/             # ⚙️ Gestión de configuración
│   ├── manual-usuario/            # 📖 Manual de usuario
│   ├── manual-instalacion/        # 🔧 Manual de instalación
│   ├── planificacion/             # 📋 Documentación de planificación
│   ├── especificaciones/          # 📝 Especificaciones técnicas
│   ├── pruebas/                   # 🧪 Documentación de testing
│   ├── conocimiento/              # 💡 Base de conocimientos
│   └── recursos/                  # 📚 Recursos adicionales
├── Pruebas/                       # 🧪 Testing automatizado
│   ├── tests/                     # Casos de prueba Playwright
│   ├── playwright.config.ts       # Configuración de Playwright
│   └── package.json              # Dependencias de testing
├── README.md                      # 📖 Este archivo
└── Pruebas.7z                    # 📦 Archivo de respaldo
```

## 🎯 Funcionalidades Principales

### ✅ Implementado
- **Formulario de Contactabilidad SSVA** - Formulario principal para servicios de salud
- **Validación en tiempo real** - RUT, email y campos obligatorios
- **Gestión de términos y condiciones** - Modal y aceptación requerida
- **Testing automatizado** - Suite completa con Playwright
- **Documentación integral** - Manuales y guías de proceso

### 🚧 En Desarrollo
- Panel de administración para operadores
- Sistema de notificaciones
- Reportes y estadísticas
- Integración con sistemas municipales

## 🛠️ Gestión de Configuración

Este proyecto implementa reglas específicas de gestión de configuración adaptadas a la plataforma SIMPLE:

### Reglas Principales
1. **Asignación exclusiva de formularios** - Cada integrante trabaja en formularios específicos
2. **Comunicación obligatoria** - Todos los cambios deben ser comunicados
3. **Versionado manual** - Respaldos antes de cambios importantes

### Ítems de Configuración
- Manual de usuario y operación
- Documentación de planificación  
- Especificación de requerimientos de software

Ver [Reglas de Configuración](./docs/configuracion/reglas-configuracion.md) para detalles completos.

## 🧪 Testing y Calidad

### Herramientas de Calidad
- **Pruebas automatizadas** - Playwright para testing E2E
- **Validación con IA** - Revisión de código y lógica
- **Revisión cruzada** - Code review obligatorio entre integrantes

### Ejecución de Pruebas
```bash
# Navegar al directorio de pruebas
cd Pruebas

# Ejecutar suite completa
npm test

# Ejecutar prueba específica
npx playwright test flujo-inicial.spec.ts

# Ejecutar con interfaz gráfica
npm run test:ui
```

Ver [Documentación de Pruebas](./docs/pruebas/README.md) para información detallada.

## 🤝 Contribución

### Proceso de Desarrollo
1. Seguir [Reglas de Configuración](./docs/configuracion/reglas-configuracion.md)
2. Crear branch para nuevas funcionalidades
3. Implementar cambios siguiendo [Guía de Cambios](./docs/configuracion/guia-cambios.md)
4. Ejecutar pruebas automatizadas
5. Solicitar revisión cruzada
6. Documentar cambios en retrospectiva

### Comunicación del Equipo
- **WhatsApp/Discord** - Comunicación inmediata
- **GitHub Issues** - Seguimiento de tareas y bugs
- **Retrospectivas** - Mejora continua cada sprint

## 📊 Estado del Proyecto

### Métricas Actuales
- **Cobertura de pruebas:** 80%+
- **Tiempo de respuesta:** < 3 segundos
- **Compatibilidad:** Chrome, Firefox, Safari, Edge
- **Disponibilidad objetivo:** 99.5%

### Sprint Actual
Ver [Documentación de Planificación](./docs/planificacion/README.md) para estado actual y próximos objetivos.

## 🆘 Soporte

### Recursos de Ayuda
- **[Base de Conocimientos](./docs/conocimiento/README.md)** - Soluciones a problemas comunes
- **[Manual de Instalación](./docs/manual-instalacion/README.md)** - Guía de setup y troubleshooting
- **Issues de GitHub** - Reporte de bugs y solicitud de features

### Contacto
- **Equipo de desarrollo:** [Información en documentación]
- **Soporte técnico:** Ver [Manual de Usuario](./docs/manual-usuario/README.md)

## 📄 Licencia

Este proyecto está desarrollado para fines académicos como parte del curso ICI513 - Gestión de Proyecto Informático.

---

**🎓 Proyecto Académico** | **Universidad:** [Nombre de la Universidad] | **Curso:** ICI513 | **Año:** 2024