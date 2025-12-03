# 🚀 Guía de Inicio Rápido

## Cómo Abrir el Infográfico

### Opción 1: Abrir Directamente (Recomendado para uso local)

1. Navega a la carpeta `Analisis_ley_ongs`
2. Haz doble clic en el archivo `index.html`
3. El infográfico se abrirá en tu navegador predeterminado
4. ¡Listo! Puedes hacer scroll para ver todas las secciones

### Opción 2: Usar un Servidor Local (Para pruebas con Service Worker)

Si tienes Python instalado:

```bash
# Python 3
cd Analisis_ley_ongs
python -m http.server 8000

# Luego abre en el navegador: http://localhost:8000
```

Si tienes Node.js y npm:

```bash
# Instalar http-server global
npm install -g http-server

# Ejecutar
cd Analisis_ley_ongs
http-server -p 8000

# Luego abre en el navegador: http://localhost:8000
```

## ✅ Verificación Rápida

Al abrir el infográfico deberías ver:

1. **Hero Section** con título grande y gradiente morado
2. Al hacer scroll, las secciones aparecen con animaciones
3. Gráfico de barras en la sección de "Salud Pública"
4. Tabla comparativa de redundancia burocrática
5. Cards de violaciones constitucionales
6. Pirámide de sanciones
7. Conclusión con iconos

## 🎨 Navegación

- **Scroll suave**: Todas las secciones tienen scroll automático
- **Animaciones**: Los elementos aparecen al hacer scroll
- **Responsive**: Funciona en móvil, tablet y desktop
- **F11**: Pantalla completa (ideal para presentaciones)

## 🖨️ Exportar a PDF

1. Abre el infográfico en el navegador
2. Presiona `Ctrl + P` (Windows) o `Cmd + P` (Mac)
3. Selecciona "Guardar como PDF"
4. Ajusta márgenes y orientación si es necesario
5. Guarda el archivo

## 📱 Uso en Móvil

1. Copia toda la carpeta `Analisis_ley_ongs` a tu teléfono
2. Usa un navegador (Chrome, Safari, Firefox)
3. Abre el archivo `index.html`
4. El diseño se adapta automáticamente al tamaño de pantalla

## 🌐 Publicar en GitHub Pages

```bash
# 1. Inicializar git
git init
git add .
git commit -m "Initial commit: SPA Infográfica Ley 7363/2024"

# 2. Crear repo en GitHub y conectar
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main

# 3. Activar GitHub Pages en Settings → Pages → Source: main branch
```

## 🛠️ Solución de Problemas

### El gráfico no aparece
- Verifica conexión a internet (Chart.js se carga desde CDN)
- Revisa la consola del navegador (F12) para ver errores

### Las animaciones no funcionan
- Asegúrate de tener JavaScript habilitado
- Prueba con otro navegador (Chrome, Firefox)

### El Service Worker no funciona
- Debe ejecutarse desde un servidor (no file://)
- Usa http-server o similar

## 📊 Estructura de Secciones

1. **Hero** - Introducción
2. **Rol ONGs** - Salud, Educación, Derechos Indígenas
3. **Redundancia** - Tabla de controles duplicados
4. **Constitucionalidad** - 4 violaciones (Art. 42, 33, 26, 9 CN)
5. **Sanciones** - Pirámide de sanciones
6. **Conclusión** - Mensaje central y resumen

## 💡 Consejos para Presentaciones

- Usa **F11** para pantalla completa
- Haz scroll lento para que las animaciones se vean bien
- Los números se animan automáticamente al aparecer
- Puedes usar las teclas ↑↓ o PgUp/PgDn para navegar

## 🔧 Personalización

### Cambiar Colores
Edita `css/variables.css` y modifica las variables:
```css
--color-primary: #2563eb;  /* Azul institucional */
--color-secondary: #7c3aed; /* Violeta */
```

### Agregar Contenido
Edita `index.html` y agrega secciones siguiendo la estructura existente.

### Modificar Datos
Edita `assets/data/statistics.json` con nuevos datos.

## 📞 Soporte

Para consultas técnicas o sobre el contenido:
- Revisa el `README.md` para documentación completa
- Verifica la consola del navegador (F12) para errores
- Asegúrate de usar un navegador moderno actualizado

---

**¡Listo! Tu infográfico está completo y funcionando.** 🎉
