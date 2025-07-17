# Manual de Usuario y Operación

Este manual proporciona guías completas para usuarios finales y operadores del sistema desarrollado en la plataforma SIMPLE.

## Información General

### Contexto del Sistema
- **Plataforma:** SIMPLE (Servicio Integral Municipal de Procedimientos Locales Electrónicos)
- **Tecnologías:** JavaScript, HTML, Bootstrap, SweetAlert
- **Propósito:** Digitalización de formularios y procesos municipales

### Audiencia
- **Usuarios finales:** Ciudadanos que utilizan los formularios
- **Operadores:** Personal municipal que gestiona los procesos
- **Administradores:** Personal técnico responsable del mantenimiento

## Guía de Usuario Final

### Acceso al Sistema

1. **URL de acceso:** https://municipios.simple.digital.gob.cl/
2. **Navegadores compatibles:**
   - Chrome (recomendado)
   - Firefox
   - Safari
   - Edge

3. **Requisitos del dispositivo:**
   - Conexión a internet estable
   - JavaScript habilitado
   - Resolución mínima: 1024x768

### Uso del Formulario de Contactabilidad

#### Inicio del Proceso
1. En la página principal, localizar la tarjeta "[SSVA] Form Contactabilidad"
2. Hacer clic en el botón "Iniciar" en la parte inferior de la tarjeta
3. Aparecerá la pantalla de bienvenida con el mensaje "¡Bienvenido a Servicio de Salud"

#### Completar el Formulario
1. **Información Personal:**
   - Ingrese su RUT sin puntos y con guión
   - Complete nombre completo
   - Proporcione información de contacto válida

2. **Datos de Contactabilidad:**
   - Seleccione medios de contacto preferidos
   - Proporcione información adicional requerida
   - Verifique que todos los campos obligatorios estén completos

3. **Términos y Condiciones:**
   - Lea cuidadosamente los términos de servicio
   - Marque la casilla de aceptación
   - Proceda con el envío del formulario

#### Validaciones del Sistema
- **RUT:** Verificación automática de dígito verificador
- **Email:** Validación de formato correcto
- **Teléfono:** Verificación de formato nacional
- **Campos obligatorios:** Marcados con asterisco (*)

#### Mensajes del Sistema
- **✅ Éxito:** "Formulario enviado correctamente"
- **⚠️ Advertencia:** "Revise los campos marcados en rojo"
- **❌ Error:** "Error en la conexión, intente nuevamente"

### Resolución de Problemas Comunes

| Problema | Causa Posible | Solución |
|----------|---------------|----------|
| Formulario no carga | JavaScript deshabilitado | Habilitar JavaScript en el navegador |
| Error al enviar | Conexión inestable | Verificar conexión e intentar nuevamente |
| Campos no validan | Formato incorrecto | Revisar formato según indicaciones |
| Página en blanco | Cache del navegador | Limpiar cache y recargar página |

## Guía de Operador

### Acceso al Panel de Administración

1. **Credenciales de acceso:** Proporcionadas por el administrador del sistema
2. **Roles disponibles:**
   - Operador básico: Solo lectura de formularios
   - Operador avanzado: Gestión de formularios
   - Supervisor: Acceso completo

### Gestión de Formularios Recibidos

#### Visualización de Formularios
1. Acceder al panel de administración
2. Seleccionar "Formularios Recibidos"
3. Filtrar por:
   - Fecha de recepción
   - Estado de procesamiento
   - Tipo de formulario

#### Procesamiento de Solicitudes
1. **Revisar información:** Verificar completitud y veracidad
2. **Validar documentos:** Confirmar autenticidad de datos
3. **Actualizar estado:** Marcar como procesado/rechazado
4. **Generar respuesta:** Enviar confirmación al solicitante

#### Estados de Formularios
- **Recibido:** Formulario ingresado al sistema
- **En proceso:** Siendo revisado por operador
- **Aprobado:** Solicitud aprobada
- **Rechazado:** Solicitud rechazada con observaciones
- **Finalizado:** Proceso completado

### Reportes y Estadísticas

#### Generar Reportes
1. Acceder a sección "Reportes"
2. Seleccionar período de análisis
3. Elegir tipo de reporte:
   - Formularios por día/mes
   - Estados de procesamiento
   - Tiempos de respuesta
   - Errores frecuentes

#### Exportar Datos
- **Formato Excel:** Para análisis detallado
- **Formato PDF:** Para reportes ejecutivos
- **Formato CSV:** Para integración con otros sistemas

## Guía de Administrador

### Configuración del Sistema

#### Gestión de Usuarios
1. **Crear usuarios:** Asignar roles y permisos
2. **Modificar permisos:** Actualizar según necesidades
3. **Desactivar usuarios:** Mantener histórico de accesos

#### Configuración de Formularios
1. **Personalizar campos:** Agregar/quitar campos según requerimientos
2. **Configurar validaciones:** Definir reglas de negocio
3. **Establecer flujos:** Configurar proceso de aprobación

### Mantenimiento del Sistema

#### Respaldos
- **Frecuencia:** Diaria (automática)
- **Retención:** 30 días mínimo
- **Ubicación:** Servidor seguro con acceso restringido

#### Monitoreo
- **Disponibilidad:** 99.5% uptime objetivo
- **Rendimiento:** Tiempo de respuesta < 3 segundos
- **Seguridad:** Logs de acceso y cambios

#### Actualizaciones
1. **Planificación:** Coordinar con equipo técnico
2. **Notificación:** Avisar a usuarios con 48h anticipación
3. **Ejecución:** Durante horarios de menor uso
4. **Validación:** Verificar funcionamiento post-actualización

## Procedimientos de Emergencia

### En Caso de Falla del Sistema

1. **Notificación inmediata:**
   - Contactar al equipo técnico
   - Informar a usuarios afectados
   - Documentar el incidente

2. **Procedimiento alternativo:**
   - Activar formularios en papel (temporalmente)
   - Coordinar ingreso manual posterior
   - Mantener registro de transacciones

3. **Restauración:**
   - Evaluar causa del problema
   - Implementar solución
   - Verificar integridad de datos
   - Notificar restauración del servicio

### Contactos de Emergencia

| Rol | Contacto | Horario |
|-----|----------|---------|
| **Soporte Técnico Nivel 1** | Tel: [Número] | 8:00 - 18:00 |
| **Soporte Técnico Nivel 2** | Tel: [Número] | 24/7 |
| **Administrador del Sistema** | Email: [Email] | 8:00 - 20:00 |
| **Responsable de Proyecto** | Tel: [Número] | Horario laboral |

## Mejores Prácticas

### Para Usuarios
- Mantener datos actualizados en el perfil
- Usar navegadores actualizados
- Cerrar sesión después del uso
- Reportar problemas inmediatamente

### Para Operadores
- Revisar formularios en tiempo oportuno
- Mantener comunicación clara con solicitantes
- Documentar observaciones importantes
- Seguir procedimientos establecidos

### Para Administradores
- Realizar respaldos regulares
- Monitorear rendimiento del sistema
- Mantener documentación actualizada
- Capacitar regularmente a usuarios

---

## Anexos

### A. Glosario de Términos
- **SIMPLE:** Plataforma gubernamental para trámites digitales
- **Formulario:** Interfaz digital para captura de información
- **Validación:** Proceso de verificación de datos
- **Estado:** Situación actual de un formulario en el sistema

### B. Formatos de Datos
- **RUT:** 12.345.678-9 (sin puntos en el sistema)
- **Teléfono:** +56912345678 o 912345678
- **Email:** usuario@dominio.cl

### C. Códigos de Error Comunes
- **ERR001:** Error de validación de RUT
- **ERR002:** Campos obligatorios faltantes
- **ERR003:** Formato de email incorrecto
- **ERR004:** Error de conexión con servidor

---

**Versión:** 1.0  
**Fecha de creación:** [Fecha actual]  
**Última actualización:** [Fecha actual]  
**Próxima revisión:** [Fecha + 3 meses]  
**Responsable:** Equipo de Desarrollo