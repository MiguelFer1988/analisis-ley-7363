// charts.js - Configuración de Chart.js

/**
 * Inicializa el gráfico de salud
 */
async function initHealthChart() {
  const ctx = document.getElementById('healthChart');
  if (!ctx) return;

  try {
    // Cargar datos desde JSON
    const data = await loadJSON('assets/data/statistics.json');
    if (!data || !data.health) {
      console.error('No se pudieron cargar los datos de salud');
      return;
    }

    const healthData = data.health;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: healthData.labels,
        datasets: [{
          label: 'Indicadores de Salud (%)',
          data: healthData.data,
          backgroundColor: healthData.backgroundColors,
          borderColor: healthData.backgroundColors.map(color => color.replace('0.7', '1')),
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: {
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              size: 13
            },
            callbacks: {
              label: function(context) {
                return context.parsed.y + '%';
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 50,
            ticks: {
              callback: function(value) {
                return value + '%';
              },
              font: {
                size: 12
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            ticks: {
              font: {
                size: 11
              },
              maxRotation: 45,
              minRotation: 45
            },
            grid: {
              display: false
            }
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutQuart'
        }
      }
    });
  } catch (error) {
    console.error('Error inicializando gráfico de salud:', error);
  }
}

/**
 * Inicializa todos los gráficos
 */
function initAllCharts() {
  // Verificar que Chart.js esté cargado
  if (typeof Chart === 'undefined') {
    console.error('Chart.js no está cargado');
    return;
  }

  // Configuración global de Chart.js
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.color = '#6b7280';

  // Inicializar gráficos
  initHealthChart();

  // Aquí se pueden agregar más gráficos en el futuro
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllCharts);
} else {
  initAllCharts();
}
