# Ley 7363/2024: Análisis Crítico - Infográfico Interactivo

## 📋 Descripción

Infográfico de página única (SPA) que sirve como material de apoyo visual para la disertación de la Dra. Pilar Callizo sobre la Ley N.º 7363/2024 "Que establece el control, la transparencia y la rendición de cuentas de las organizaciones sin fines de lucro" en Paraguay.

### Objetivos del Proyecto

El infográfico destaca tres mensajes clave:

1. **El Rol Crítico de las ONGs**: Cómo la sociedad civil suple las falencias del Estado en salud, educación y derechos indígenas
2. **La Redundancia Burocrática**: Duplicación de controles existentes que genera asfixia administrativa
3. **El Impacto Inconstitucional**: Violaciones a derechos fundamentales (libertad de asociación, privacidad, expresión)

## 🚀 Características

- **Diseño Moderno**: Visual atractivo con animaciones al scroll y data-driven storytelling
- **Responsive**: Funciona perfecto en móvil, tablet y desktop
- **Offline-First**: Capacidad para funcionar sin conexión a internet (PWA)
- **Lightweight**: Sin frameworks pesados, solo HTML/CSS/JavaScript vanilla
- **Visualizaciones**: Gráficos interactivos con Chart.js
- **Exportable**: Se puede imprimir a PDF desde el navegador

## 🛠️ Tecnologías Utilizadas

- HTML5 (estructura semántica)
- CSS3 (animaciones, grid/flexbox, variables CSS)
- JavaScript Vanilla (scroll animations, Intersection Observer)
- Chart.js (visualizaciones de datos)
- Service Worker (capacidad offline)

## 📂 Estructura del Proyecto

```
Analisis_ley_ongs/
│
├── index.html                 # Página principal
├── css/
│   ├── reset.css             # Reset de estilos
│   ├── variables.css         # Variables CSS (colores, tipografía)
│   ├── layout.css            # Sistema de grid responsive
│   ├── components.css        # Componentes reutilizables
│   ├── sections.css          # Estilos por sección
│   └── animations.css        # Animaciones y transiciones
│
├── js/
│   ├── main.js               # Inicialización
│   ├── scroll-animations.js  # Intersection Observer
│   ├── charts.js             # Configuración de gráficos
│   └── utils.js              # Funciones de utilidad
│
├── assets/
│   ├── icons/                # Íconos SVG
│   └── data/
│       └── statistics.json   # Datos para visualizaciones
│
├── sw.js                     # Service Worker
├── manifest.json             # PWA manifest
└── README.md                 # Este archivo
```

## 🌐 Cómo Usar

### Opción 1: Local (Computadora)

1. Descargar todo el proyecto
2. Abrir `index.html` en cualquier navegador moderno
3. Funciona offline automáticamente

### Opción 2: GitHub Pages (Online)

1. Subir el proyecto a un repositorio de GitHub
2. Ir a Settings → Pages
3. Seleccionar la rama `main` como fuente
4. Acceder desde: `https://[usuario].github.io/[repositorio]/`

### Modo Presentación

- Presionar **F11** para pantalla completa
- Scroll suave entre secciones
- Ideal para presentaciones académicas

## 📊 Secciones del Infográfico

1. **Hero**: Introducción impactante con título y contexto
2. **Rol ONGs**: Casos de salud, educación y derechos indígenas
3. **Redundancia**: Tabla comparativa de controles duplicados
4. **Constitucionalidad**: 4 violaciones constitucionales
5. **Sanciones**: Pirámide del régimen sancionatorio
6. **Conclusión**: Mensaje central y resumen de datos

## 📈 Datos Incluidos

- Cobertura de salud: 25.9% nacional, 16.1% rural
- Gasto público en salud: 4.5% PIB (vs. 6% recomendado)
- Hambre Cero: 240M USD de deuda
- 5 áreas de control duplicado
- 4 violaciones constitucionales
- Hasta 5 años de inhabilitación para directivos

## 🎨 Paleta de Colores

- **Azul** (#2563eb): Institucional, primario
- **Violeta** (#7c3aed): Derechos, secundario
- **Ámbar** (#f59e0b): Alerta, redundancia
- **Rojo** (#dc2626): Violaciones, peligro
- **Verde** (#10b981): Éxito de ONGs

## ⚡ Performance

- Tamaño total: < 2MB
- Tiempo de carga: < 3 segundos (3G)
- Lighthouse score objetivo: > 90 (Performance, Accessibility)

## 📱 Compatibilidad

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (macOS/iOS)
- ✅ Responsive: Mobile, Tablet, Desktop

## 📄 Licencia

Análisis académico con fines informativos y educativos.
© 2025 - Basado en investigación de la Dra. Pilar Callizo

## 📞 Contacto

Para consultas sobre la investigación o el infográfico, contactar a:
**Dra. Pilar Callizo**

---

**Fuentes principales:**
- Ley N.º 7363/2024
- Decreto N.º 4.806/2025
- Dictámenes jurídicos especializados (CODEHUPY, Abog. Alejandra Peralta, Abog. Jorge Rolón Luna)
# analisis-ley-7363
