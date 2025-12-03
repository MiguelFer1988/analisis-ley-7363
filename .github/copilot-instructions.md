# AI Coding Agent Instructions for Ley 7363 Analysis Project

## Project Overview
This is a static Single Page Application (SPA) infographic analyzing Paraguay's Law 7363/2024 on NGO transparency. Built with vanilla HTML/CSS/JS, featuring data visualizations and PWA capabilities.

## Architecture
- **Single HTML page** (`index.html`) with semantic sections
- **Modular CSS** in `css/` directory: variables, layout, components, sections, animations
- **Vanilla JS modules** in `js/`: main (orchestration), utils (helpers), charts (Chart.js), scroll-animations (Intersection Observer)
- **Data-driven charts** from `assets/data/statistics.json`
- **PWA features**: Service Worker (`sw.js`), manifest for offline capability

## Key Patterns
- **Design System**: CSS variables in `variables.css` define colors (primary blue, secondary violet, danger red, etc.), fonts (Poppins/Inter/JetBrains Mono), responsive text with `clamp()`
- **Animations**: Intersection Observer triggers `.reveal` class animations on scroll
- **Data Loading**: Async JSON loading in `charts.js` for Chart.js configurations
- **Responsive Layout**: CSS Grid/Flexbox with mobile-first approach
- **Color Coding**: Semantic colors for themes (NGO success green, redundancy amber, violations red)

## Development Workflow
- **No build process**: Edit files directly, open `index.html` in browser
- **Local testing**: Use `python -m http.server` for Service Worker testing
- **Data updates**: Modify `statistics.json` for chart data changes
- **Styling**: Update CSS modules, use variables for consistency

## Code Conventions
- **Spanish comments** in code files
- **Modular structure**: One responsibility per file
- **Async/await** for data loading
- **Debounced scroll handlers** in utils
- **Chart.js bar charts** with custom tooltips and colors

## Common Tasks
- Adding sections: Insert HTML in `index.html`, style in `sections.css`, animate with `.reveal`
- New charts: Add canvas in HTML, configure in `charts.js`, add data to `statistics.json`
- Responsive adjustments: Use `clamp()` for fluid typography, grid breakpoints
- PWA updates: Modify `manifest.json` or `sw.js` for offline features

## File References
- `css/variables.css`: Design tokens and color palette
- `js/charts.js`: Chart configurations and data loading
- `assets/data/statistics.json`: Structured data for visualizations
- `README.md`: Project documentation and usage</content>
<parameter name="filePath">d:\Analisis_ley_ongs\.github\copilot-instructions.md