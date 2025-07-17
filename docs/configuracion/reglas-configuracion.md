# Reglas de Gestión de Configuración

Este documento establece las reglas y políticas de gestión de configuración adaptadas al entorno de la plataforma SIMPLE.

## Contexto

Dado que la plataforma SIMPLE no permite un control de versiones tradicional, el equipo ha definido las siguientes reglas adaptadas al entorno:

## Reglas Principales

### Regla 1: Asignación Exclusiva de Formularios

**Descripción:** Cada integrante debe trabajar exclusivamente en los formularios que se le asignan.

**Procedimiento:**
1. Los formularios se asignan claramente a cada integrante al inicio del sprint
2. Si otro integrante necesita intervenir en un formulario asignado, debe:
   - Avisar previamente por los canales de comunicación del equipo
   - Obtener confirmación del responsable original
   - Documentar el motivo de la intervención

**Canales de comunicación válidos:**
- Grupo de WhatsApp del equipo
- Discord del proyecto
- GitHub Issues (cuando sea aplicable)

### Regla 2: Comunicación Obligatoria de Cambios

**Descripción:** Todos los cambios realizados a formularios o scripts deben ser informados a través del canal oficial de comunicación.

**Información requerida:**
- **Qué se modificó:** Descripción específica del cambio realizado
- **Quién lo hizo:** Identificación del autor del cambio
- **Cuándo:** Fecha y hora del cambio
- **Por qué:** Justificación del cambio (requerimiento, bug fix, mejora, etc.)

**Formato sugerido:**
```
🔧 CAMBIO REALIZADO
📝 Formulario: [Nombre del formulario]
👤 Autor: [Nombre del integrante]
📅 Fecha: [DD/MM/YYYY HH:MM]
🎯 Motivo: [Descripción del motivo]
📋 Descripción: [Detalle de los cambios realizados]
```

### Regla 3: Versionado Manual de Formularios

**Descripción:** Antes de realizar cambios importantes en un formulario, se debe hacer una copia de respaldo.

**Procedimiento de respaldo:**
1. Antes del cambio:
   - Crear una copia del formulario original
   - Nombrar la copia con el formato: `[NombreFormulario]_backup_[YYYYMMDD]_[InicialAutor]`
   - Documentar la versión en el canal de comunicación

2. Durante el cambio:
   - Realizar los cambios en el formulario original
   - Probar funcionamiento antes de finalizar

3. Después del cambio:
   - Validar que el formulario funciona correctamente
   - Mantener el respaldo por al menos 1 sprint
   - Documentar el éxito del cambio

## Ítems de Configuración Aplicables

### 1. Manual de Usuario y Operación
- **Responsable:** Definir por sprint
- **Frecuencia de actualización:** Durante el desarrollo, no solo al final
- **Plantilla:** Usar plantillas estándar definidas
- **Versionado:** Guardar versiones en repositorios o carpetas ordenadas

### 2. Documentación de Planificación  
- **Contenido:** Minutas detalladas, distribución de tareas, retrospectivas
- **Responsabilidad:** Rotación de roles entre integrantes
- **Frecuencia:** Por cada sprint
- **Almacenamiento:** GitHub y documentación local

### 3. Especificación de Requerimientos de Software
- **Origen:** Registro formal de requerimientos del cliente
- **Validación:** Confirmación formal, no asumir requerimientos
- **Versionado:** Usar GitHub para versionar documentos
- **Base de conocimientos:** Mantener soluciones a problemas comunes

## Herramientas de Apoyo a la Calidad

### Pruebas Automáticas y Manuales
- Verificar el correcto funcionamiento de formularios clave
- Usar Playwright para pruebas automatizadas
- Documentar casos de prueba manuales

### Validación con Inteligencia Artificial
- Utilizar herramientas IA para revisar funcionamiento lógico del código
- Validar sintaxis y mejores prácticas
- Revisión de patrones comunes de errores

### Revisión Cruzada
- Cada integrante revisa formularios modificados por otros
- Revisión obligatoria antes del cierre del sprint
- Documentar hallazgos y resoluciones

## Proceso de Validación de Ambientes

Para evitar problemas de ambientes incorrectos:

1. **Al inicio del sprint:**
   - Confirmar qué ambiente se utilizará
   - Documentar en GitHub el ambiente validado
   - Comunicar a todo el equipo

2. **Durante el desarrollo:**
   - Verificar ambiente antes de cada cambio importante
   - Mantener consistencia en todo el equipo

3. **Antes del cierre:**
   - Validar que todos trabajen en el mismo ambiente
   - Documentar cualquier discrepancia

## Mejoras Implementadas

Basado en el análisis de retrospectivas:

**✅ Buenas prácticas mantenidas:**
- Documentación de funcionalidades clave durante desarrollo
- Tareas bien distribuidas entre integrantes
- Registro de requerimientos al inicio

**🔧 Mejoras implementadas:**
- Documentación vinculada a tareas del sprint
- Minutas más detalladas
- Base de conocimientos para problemas comunes
- Proceso obligatorio de validación de ambientes

**❌ Prácticas eliminadas:**
- Documentar solo al final del sprint
- Guardar documentos sin versionado
- Asumir requerimientos sin confirmación
- Asignar demasiadas funciones sin respaldo

---

## Cumplimiento y Responsabilidades

- **Todo el equipo:** Seguir las reglas establecidas
- **Líder del sprint:** Asegurar cumplimiento de las reglas
- **Responsable de documentación:** Mantener documentación actualizada
- **Responsable de calidad:** Verificar pruebas y validaciones

**Última actualización:** Creación inicial - [Fecha actual]  
**Próxima revisión:** Al finalizar el sprint actual