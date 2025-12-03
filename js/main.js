// main.js - Inicialización y orquestación principal

/**
 * Registra el Service Worker para capacidad offline
 */
async function registerServiceWorker() {
  if (!supportsServiceWorker()) {
    console.log('Service Workers no soportados en este navegador');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registrado:', registration.scope);
  } catch (error) {
    console.error('Error registrando Service Worker:', error);
  }
}

/**
 * Inicializa contadores animados
 */
function initCounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    // Los counters se animarán cuando entren en el viewport
    // gracias al Intersection Observer en scroll-animations.js
    counter.textContent = '0';
  });
}

/**
 * Maneja el scroll indicator en el hero
 */
function initScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) return;

  scrollIndicator.addEventListener('click', () => {
    const firstSection = document.getElementById('rol-ongs');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Ocultar el indicador después de hacer scroll
  const handleScroll = debounce(() => {
    if (window.pageYOffset > 100) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    } else {
      scrollIndicator.style.opacity = '1';
      scrollIndicator.style.pointerEvents = 'auto';
    }
  }, 100);

  window.addEventListener('scroll', handleScroll);
}

/**
 * Muestra información del dispositivo en consola (para debugging)
 */
function logDeviceInfo() {
  console.log('Información del dispositivo:');
  console.log('- Es móvil:', isMobile());
  console.log('- Ancho viewport:', getViewportWidth());
  console.log('- Alto viewport:', getViewportHeight());
  console.log('- Soporta Service Workers:', supportsServiceWorker());
}

/**
 * Maneja errores globales
 */
function initErrorHandling() {
  window.addEventListener('error', (event) => {
    console.error('Error global:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Promesa rechazada no manejada:', event.reason);
  });
}

/**
 * Función principal de inicialización
 */
async function init() {
  console.log('Inicializando aplicación...');

  // Log de información del dispositivo
  logDeviceInfo();

  // Inicializar manejo de errores
  initErrorHandling();

  // Inicializar contadores
  initCounters();

  // Inicializar scroll indicator
  initScrollIndicator();

  // Registrar Service Worker (solo en producción)
  // await registerServiceWorker();

  console.log('Aplicación inicializada correctamente');
}

// Auto-inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Manejo de instalación de PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log('PWA puede ser instalada');
});

window.addEventListener('appinstalled', () => {
  console.log('PWA instalada correctamente');
  deferredPrompt = null;
});
