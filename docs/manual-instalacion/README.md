# Manual de Instalación y Configuración

Este manual proporciona instrucciones completas para la instalación, configuración y puesta en marcha del sistema de pruebas automatizadas del proyecto.

## Requisitos del Sistema

### Requisitos de Hardware
- **CPU:** Procesador dual-core mínimo, quad-core recomendado
- **RAM:** 8 GB mínimo, 16 GB recomendado
- **Almacenamiento:** 5 GB de espacio libre
- **Red:** Conexión a internet estable

### Requisitos de Software

#### Obligatorios
- **Node.js:** Versión 18.0 o superior
- **npm:** Versión 8.0 o superior (incluido con Node.js)
- **Git:** Para control de versiones

#### Navegadores Soportados
- **Chromium/Chrome:** 90 o superior
- **Firefox:** 88 o superior
- **Safari:** 14 o superior (solo macOS)
- **Edge:** 90 o superior

### Sistemas Operativos Compatibles
- Windows 10/11
- macOS 10.15 o superior
- Ubuntu 18.04 o superior
- Otras distribuciones Linux compatibles

## Instalación del Entorno de Desarrollo

### 1. Instalación de Node.js

#### Windows
1. Descargar desde https://nodejs.org/
2. Ejecutar el instalador descargado
3. Seguir el asistente de instalación
4. Verificar instalación:
```bash
node --version
npm --version
```

#### macOS
```bash
# Usando Homebrew (recomendado)
brew install node

# O descargar desde el sitio oficial
```

#### Linux (Ubuntu/Debian)
```bash
# Instalar desde repositorio oficial
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
node --version
npm --version
```

### 2. Clonación del Repositorio

```bash
# Clonar el repositorio
git clone https://github.com/ICI513PYC/ICI513-GestionProyectoInformatico.git

# Navegar al directorio del proyecto
cd ICI513-GestionProyectoInformatico

# Verificar estructura de carpetas
ls -la
```

### 3. Instalación de Dependencias

#### Configuración del Entorno de Pruebas
```bash
# Navegar al directorio de pruebas
cd Pruebas

# Instalar dependencias
npm install

# Instalar navegadores para Playwright
npx playwright install

# Verificar instalación
npx playwright --version
```

#### Dependencias Principales
El archivo `package.json` incluye:
- **@playwright/test:** Framework de pruebas automatizadas
- **typescript:** Soporte para TypeScript

## Configuración del Proyecto

### 1. Configuración de Playwright

El archivo `playwright.config.ts` está preconfigurado con:

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

### 2. Configuración de TypeScript

El archivo `tsconfig.json` está configurado para el proyecto:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### 3. Variables de Entorno

Crear archivo `.env` (opcional) para configuraciones específicas:
```bash
# Archivo .env
BASE_URL=https://municipios.simple.digital.gob.cl/
TIMEOUT=30000
RETRIES=2
```

## Verificación de la Instalación

### 1. Ejecutar Pruebas de Ejemplo

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas específicas
npx playwright test flujo-inicial.spec.ts

# Ejecutar en modo UI (interfaz gráfica)
npm run test:ui

# Generar reporte HTML
npm run test:html
```

### 2. Verificar Navegadores

```bash
# Listar navegadores instalados
npx playwright show-browsers

# Probar navegador específico
npx playwright test --browser=chromium
npx playwright test --browser=firefox
npx playwright test --browser=webkit
```

### 3. Pruebas de Conectividad

Verificar que se puede acceder a la URL base:
```bash
# Prueba rápida de conectividad
curl -I https://municipios.simple.digital.gob.cl/
```

## Estructura del Proyecto

```
ICI513-GestionProyectoInformatico/
├── docs/                           # Documentación del proyecto
│   ├── configuracion/             # Reglas y guías de configuración
│   ├── manual-usuario/            # Manual de usuario
│   ├── manual-instalacion/        # Este manual
│   ├── planificacion/             # Documentación de planificación
│   ├── especificaciones/          # Especificaciones de requerimientos
│   ├── pruebas/                   # Documentación de pruebas
│   ├── conocimiento/              # Base de conocimientos
│   └── recursos/                  # Recursos adicionales
├── Pruebas/                       # Entorno de pruebas automatizadas
│   ├── tests/                     # Casos de prueba
│   │   ├── flujo-inicial.spec.ts
│   │   ├── modal-terminos.spec.ts
│   │   └── aceptar-continuar.spec.ts
│   ├── playwright.config.ts       # Configuración de Playwright
│   ├── tsconfig.json             # Configuración de TypeScript
│   ├── package.json              # Dependencias y scripts
│   └── package-lock.json         # Lock file de dependencias
├── README.md                      # Documentación principal
└── Pruebas.7z                    # Archivo comprimido de respaldo
```

## Configuración de IDE

### Visual Studio Code (Recomendado)

#### Extensiones Recomendadas
- **Playwright Test for VSCode:** Soporte nativo para Playwright
- **TypeScript Importer:** Autocompletado para TypeScript
- **GitLens:** Integración avanzada con Git
- **Prettier:** Formateo automático de código

#### Configuración del Workspace
Crear archivo `.vscode/settings.json`:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "playwright.showTrace": true
}
```

### Configuración de Tareas
Crear archivo `.vscode/tasks.json`:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run Playwright Tests",
      "type": "shell",
      "command": "npm test",
      "group": "test",
      "options": {
        "cwd": "${workspaceFolder}/Pruebas"
      }
    }
  ]
}
```

## Resolución de Problemas Comunes

### Error: "playwright: command not found"
```bash
# Solución 1: Reinstalar Playwright
npm uninstall @playwright/test
npm install @playwright/test
npx playwright install

# Solución 2: Usar npx explícitamente
npx playwright test
```

### Error de Permisos en Linux/macOS
```bash
# Dar permisos de ejecución
chmod +x node_modules/.bin/playwright

# O ejecutar con sudo si es necesario
sudo npx playwright install
```

### Navegadores No Se Descargan
```bash
# Limpiar cache de Playwright
npx playwright clean

# Reinstalar navegadores
npx playwright install --force
```

### Problemas de Red/Proxy
```bash
# Configurar proxy si es necesario
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

# O usar variables de entorno
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080
```

### Error de Memoria Insuficiente
```bash
# Aumentar memoria para Node.js
export NODE_OPTIONS="--max-old-space-size=4096"

# O ejecutar con parámetro específico
node --max-old-space-size=4096 node_modules/.bin/playwright test
```

## Mantenimiento y Actualizaciones

### Actualización de Dependencias

```bash
# Verificar dependencias desactualizadas
npm outdated

# Actualizar dependencias menores
npm update

# Actualizar Playwright específicamente
npm install @playwright/test@latest
npx playwright install
```

### Actualización de Navegadores

```bash
# Actualizar navegadores de Playwright
npx playwright install

# Verificar versiones instaladas
npx playwright show-browsers
```

### Limpieza del Entorno

```bash
# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install

# Limpiar cache de npm
npm cache clean --force

# Limpiar datos de Playwright
npx playwright clean
```

## Configuración de CI/CD

### GitHub Actions (Ejemplo)

Crear archivo `.github/workflows/tests.yml`:
```yaml
name: Playwright Tests
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - name: Install dependencies
      run: |
        cd Pruebas
        npm ci
    - name: Install Playwright Browsers
      run: |
        cd Pruebas
        npx playwright install --with-deps
    - name: Run Playwright tests
      run: |
        cd Pruebas
        npm test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: Pruebas/playwright-report/
        retention-days: 30
```

## Soporte y Contacto

### Recursos de Ayuda
- **Documentación de Playwright:** https://playwright.dev/
- **Documentación de Node.js:** https://nodejs.org/docs/
- **GitHub del proyecto:** https://github.com/ICI513PYC/ICI513-GestionProyectoInformatico

### Contacto del Equipo
- **Soporte técnico:** [Email del equipo]
- **Documentación:** [Responsable de docs]
- **Issues de GitHub:** Usar el sistema de issues del repositorio

---

**Versión:** 1.0  
**Fecha de creación:** [Fecha actual]  
**Última actualización:** [Fecha actual]  
**Próxima revisión:** [Fecha + 1 mes]  
**Responsable:** Equipo de Desarrollo