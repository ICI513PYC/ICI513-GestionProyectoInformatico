# Documentación de Planificación

Este directorio contiene toda la documentación relacionada con la planificación del proyecto, incluyendo minutas, distribución de tareas y retrospectivas de sprint.

## Estructura de la Documentación

### 📋 Minutas de Reuniones
- [Plantilla de Minutas](./plantilla-minuta.md) - Formato estándar para documentar reuniones
- [Minutas por Sprint](./minutas/) - Historial de reuniones organizadas por sprint

### 📊 Distribución de Tareas  
- [Asignación de Responsabilidades](./asignacion-tareas.md) - Distribución actual de tareas y roles
- [Rotación de Roles](./rotacion-roles.md) - Cronograma de rotación entre integrantes

### 🔄 Retrospectivas
- [Plantilla de Retrospectiva](./retrospectivas/plantilla-retrospectiva.md) - Formato Mad, Sad, Glad
- [Historial de Retrospectivas](./retrospectivas/) - Retrospectivas por sprint

### 📅 Planificación de Sprints
- [Cronograma del Proyecto](./cronograma.md) - Calendario general de sprints
- [Definición de Sprint](./definicion-sprint.md) - Criterios y proceso de planificación

## Políticas de Documentación

### Responsabilidades

#### Líder de Sprint
- Convocar reuniones de planificación
- Facilitar retrospectivas
- Asegurar documentación completa
- Coordinar rotación de roles

#### Secretario de Sprint (Rotativo)
- Documentar minutas de reuniones
- Actualizar asignación de tareas
- Publicar retrospectivas
- Mantener cronograma actualizado

#### Todo el Equipo
- Participar activamente en reuniones
- Proporcionar información para minutas
- Contribuir en retrospectivas
- Cumplir con tareas asignadas

### Frecuencia de Actualización

| Documento | Frecuencia | Responsable |
|-----------|------------|-------------|
| Minutas | Por reunión | Secretario rotativo |
| Asignación de tareas | Semanal | Líder de sprint |
| Retrospectivas | Por sprint | Todo el equipo |
| Cronograma | Mensual | Líder de sprint |

## Mejores Prácticas Implementadas

### ✅ Buenas Prácticas Mantenidas
- **Distribución equilibrada:** Tareas bien distribuidas entre integrantes
- **Rotación de roles:** Mantener dinamismo y evitar sobrecarga
- **Documentación durante desarrollo:** No solo al final del sprint
- **Plantillas estándar:** Uso de formatos consistentes

### 🔧 Mejoras Implementadas
- **Minutas detalladas:** Inclusión de decisiones, acciones y responsables
- **Planificación anticipada:** Evitar acumulación de tareas al final
- **Documentación vinculada:** Conectar documentación con tareas del sprint
- **Respaldo de decisiones:** Justificación documentada de cambios

### ❌ Prácticas Eliminadas
- **Sobrecarga individual:** No asignar demasiadas funciones sin respaldo
- **Documentación tardía:** Evitar documentar solo al final
- **Minutas superficiales:** Incluir más detalle en decisiones importantes

## Proceso de Planificación de Sprint

### 1. Reunión de Planificación (Inicio de Sprint)

**Objetivo:** Definir alcance y distribución de tareas para el sprint

**Agenda:**
1. Review del sprint anterior (30 min)
2. Definición de objetivos del nuevo sprint (45 min)
3. Estimación y asignación de tareas (60 min)
4. Identificación de riesgos y dependencias (15 min)
5. Definición de criterios de éxito (15 min)

**Entregables:**
- Backlog del sprint definido
- Tareas asignadas con estimaciones
- Riesgos identificados
- Criterios de aceptación claros

### 2. Reuniones de Seguimiento (Durante Sprint)

**Frecuencia:** 2 veces por semana  
**Duración:** 30 minutos

**Agenda:**
1. Estado de tareas en progreso (15 min)
2. Impedimentos y bloqueos (10 min)  
3. Coordinación y ajustes (5 min)

### 3. Reunión de Cierre (Final de Sprint)

**Objetivo:** Revisar entregables y preparar retrospectiva

**Agenda:**
1. Demo de funcionalidades completadas (45 min)
2. Revisión de criterios de éxito (15 min)
3. Identificación de elementos pendientes (15 min)
4. Preparación para retrospectiva (15 min)

### 4. Retrospectiva de Sprint

**Formato:** Mad, Sad, Glad + Plan de Mejora  
**Duración:** 60 minutos

**Estructura:**
1. **Mad (Molesto):** ¿Qué nos frustró? (20 min)
2. **Sad (Triste):** ¿Qué nos entristeció? (20 min)  
3. **Glad (Contento):** ¿Qué nos alegró? (15 min)
4. **Plan de mejora:** Acciones concretas (5 min)

## Herramientas de Gestión

### Documentación
- **GitHub:** Versionado de documentos
- **Markdown:** Formato estándar para documentación
- **Issues:** Seguimiento de tareas y bugs

### Comunicación
- **WhatsApp/Discord:** Comunicación inmediata del equipo
- **GitHub Discussions:** Discusiones técnicas
- **Email:** Comunicación formal con stakeholders

### Gestión de Tareas
- **GitHub Projects:** Tablero kanban del proyecto
- **Issues:** Definición detallada de tareas
- **Milestones:** Agrupación por sprints

## Métricas de Seguimiento

### Por Sprint
- **Velocidad:** Puntos de historia completados
- **Burndown:** Progreso diario de tareas
- **Calidad:** Bugs encontrados vs. resueltos
- **Satisfacción:** Rating del equipo (1-10)

### Por Proyecto
- **Cumplimiento:** % de sprints completados a tiempo
- **Productividad:** Funcionalidades entregadas por sprint
- **Estabilidad:** Tiempo entre releases
- **Satisfacción del cliente:** Feedback recibido

## Coordinación con Stakeholders

### Cliente/Product Owner
- **Frecuencia de comunicación:** Semanal
- **Formato:** Demo + reporte de progreso
- **Canal:** Email formal + reunión virtual
- **Documentación:** Actas de reunión archivadas

### Equipo Técnico
- **Validaciones:** Revisión de ambiente y tecnologías
- **Soporte:** Escalación de issues técnicos
- **Consultas:** Arquitectura y mejores prácticas

### Usuarios Finales
- **Testing:** Participación en pruebas de usuario
- **Feedback:** Recolección de comentarios y sugerencias
- **Capacitación:** Sesiones de entrenamiento en nuevo sistema

## Templates y Formatos

### Formato de Tareas
```markdown
## [TIPO] Título descriptivo

**Descripción:** [Descripción detallada de la tarea]
**Criterios de Aceptación:**
- [ ] Criterio 1
- [ ] Criterio 2
- [ ] Criterio 3

**Estimación:** [X puntos/horas]
**Asignado a:** [Nombre del responsable]
**Sprint:** [Número de sprint]
**Prioridad:** [Alta/Media/Baja]

**Dependencias:** [Tareas dependientes]
**Riesgos:** [Riesgos identificados]
```

### Formato de Minutas
Ver [Plantilla de Minutas](./plantilla-minuta.md)

### Formato de Retrospectivas  
Ver [Plantilla de Retrospectiva](./retrospectivas/plantilla-retrospectiva.md)

---

## Historial de Cambios

| Versión | Fecha | Cambios | Autor |
|---------|-------|---------|-------|
| 1.0 | [Fecha] | Creación inicial | Equipo |

**Próxima revisión:** Al finalizar sprint actual  
**Responsable:** Líder de sprint actual