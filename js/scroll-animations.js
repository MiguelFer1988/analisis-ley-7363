// scroll-animations.js - Intersection Observer para animaciones al scroll

/**
 * Configuración del Intersection Observer
 */
const observerOptions = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.1 // 10% del elemento visible
};

/**
 * Callback del Intersection Observer
 */
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');

      // Si el elemento tiene un counter, animarlo
      if (entry.target.classList.contains('counter')) {
        const target = parseFloat(entry.target.dataset.target);
        if (!isNaN(target)) {
          animateCounter(entry.target, target);
        }
      }

      // Opcional: dejar de observar el elemento después de animarlo
      // observer.unobserve(entry.target);
    }
  });
}

/**
 * Inicializa el Intersection Observer para elementos con clase 'reveal'
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar todos los elementos con clase 'reveal'
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(element => {
    observer.observe(element);
  });

  // Observar también todos los counters directamente
  const counterElements = document.querySelectorAll('.counter');
  counterElements.forEach(element => {
    observer.observe(element);
  });

  console.log(`Observando ${revealElements.length} elementos reveal y ${counterElements.length} counters`);
}

/**
 * Efecto parallax simple en el hero
 */
function initParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const handleScroll = throttle(() => {
    const scrolled = window.pageYOffset;
    const heroContent = hero.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
  }, 10);

  window.addEventListener('scroll', handleScroll);
}

/**
 * Smooth scroll para navegación interna
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    });
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initParallax();
    initSmoothScroll();
  });
} else {
  initScrollAnimations();
  initParallax();
  initSmoothScroll();
}
