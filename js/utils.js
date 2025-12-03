// utils.js - Funciones de utilidad

/**
 * Anima un número desde 0 hasta el valor objetivo
 * @param {HTMLElement} element - Elemento DOM que contiene el número
 * @param {number} target - Valor objetivo
 * @param {number} duration - Duración de la animación en ms
 */
function animateCounter(element, target, duration = 2000) {
  // Evitar animar múltiples veces
  if (element.dataset.animated === 'true') return;
  element.dataset.animated = 'true';

  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;
  
  // Determinar si el target tiene decimales
  const hasDecimals = target % 1 !== 0;
  const decimalPlaces = hasDecimals ? (target.toString().split('.')[1] || '').length : 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = hasDecimals ? target.toFixed(decimalPlaces) : target;
      clearInterval(timer);
    } else {
      element.textContent = hasDecimals ? current.toFixed(decimalPlaces) : Math.floor(current);
    }
  }, 16);
}

/**
 * Smooth scroll a una sección específica
 * @param {string} targetId - ID del elemento objetivo
 */
function smoothScrollTo(targetId) {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

/**
 * Verifica si un elemento está visible en el viewport
 * @param {HTMLElement} element - Elemento a verificar
 * @returns {boolean}
 */
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Debounce function para optimizar eventos que se disparan frecuentemente
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function}
 */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function para limitar la frecuencia de ejecución
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Tiempo límite en ms
 * @returns {Function}
 */
function throttle(func, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Carga datos JSON desde un archivo
 * @param {string} url - URL del archivo JSON
 * @returns {Promise<Object>}
 */
async function loadJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading JSON:', error);
    return null;
  }
}

/**
 * Formatea números grandes con separadores de miles
 * @param {number} num - Número a formatear
 * @returns {string}
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Genera un color aleatorio en formato hexadecimal
 * @returns {string}
 */
function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

/**
 * Verifica si el navegador soporta Service Workers
 * @returns {boolean}
 */
function supportsServiceWorker() {
  return 'serviceWorker' in navigator;
}

/**
 * Detecta si el dispositivo es móvil
 * @returns {boolean}
 */
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Obtiene el ancho del viewport
 * @returns {number}
 */
function getViewportWidth() {
  return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

/**
 * Obtiene la altura del viewport
 * @returns {number}
 */
function getViewportHeight() {
  return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}

// Exportar funciones para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    animateCounter,
    smoothScrollTo,
    isElementInViewport,
    debounce,
    throttle,
    loadJSON,
    formatNumber,
    randomColor,
    supportsServiceWorker,
    isMobile,
    getViewportWidth,
    getViewportHeight
  };
}
