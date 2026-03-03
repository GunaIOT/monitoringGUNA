function createLuxuryGasChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // ===== Gradient FLOW =====
  const flowGradient = ctx.createLinearGradient(0, 0, 0, 400);
  flowGradient.addColorStop(0, "rgba(255,70,70,0.45)");
  flowGradient.addColorStop(1, "rgba(255,70,70,0.03)");

  // ===== Gradient VOLUME =====
  const volumeGradient = ctx.createLinearGradient(0, 0, 0, 400);
  volumeGradient.addColorStop(0, "rgba(0,180,255,0.45)");
  volumeGradient.addColorStop(1, "rgba(0,180,255,0.03)");

  return new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Flow (m³/h)",
          data: [],
          borderColor: "#ff4646",
          backgroundColor: flowGradient,
          borderWidth: 2,
          fill: true,
          tension: 0.35,
          pointRadius: 0,
          yAxisID: "y1"
        },
        {
          label: "Volume (m³)",
          data: [],
          borderColor: "#00b4ff",
          backgroundColor: volumeGradient,
          borderWidth: 2,
          fill: true,
          tension: 0.35,
          pointRadius: 0,
          yAxisID: "y2"
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,

      interaction: {
        mode: "index",
        intersect: false
      },

      elements: {
        line: {
          capBezierPoints: true
        }
      },

      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            padding: 20,
            color: "#cbd5e1",
            font: {
              size: 13,
              weight: "600"
            }
          }
        },

        tooltip: {
          enabled: true
        }
      },

      scales: {
        x: {
          grid: {
            color: "rgba(255,255,255,0.06)"
          },
          ticks: {
            color: "#94a3b8",
            maxTicksLimit: 6
          }
        },

        y1: {
          type: "linear",
          position: "left",
          beginAtZero: false,
          grace: "5%",
          grid: {
            color: "rgba(255,70,70,0.06)"
          },
          ticks: {
            color: "#ff4646",
            callback: value => value.toLocaleString()
          },
          title: {
            display: true,
            text: "Flow (m³/h)",
            color: "#ff4646"
          }
        },

        y2: {
          type: "linear",
          position: "right",
          beginAtZero: false,
          grace: "0.2%",
          grid: {
            drawOnChartArea: false
          },
          ticks: {
            color: "#00b4ff",
            callback: value => value.toLocaleString()
          },
          title: {
            display: true,
            text: "Volume (m³)",
            color: "#00b4ff"
          }
        }
      }
    }
  });
}


// ===== INIT =====
window.gasChart1 = createLuxuryGasChart("gasChart1");
window.gasChart2 = createLuxuryGasChart("gasChart2");
window.gasChart3 = createLuxuryGasChart("gasChart3");