// ================= CHART UNTUK CHAMBER 1 =================
const ctx1 = document.getElementById("tempChart1").getContext("2d");

window.sensorChart1 = new Chart(ctx1, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Temperature",
        data: [],
        borderColor: "rgb(239,68,68)",
        backgroundColor: "rgba(239,68,68,0.25)",
        tension: 0.4,
        fill: "origin"
      },
      {
        label: "Humidity",
        data: [],
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.25)",
        tension: 0.4,
        fill: "origin"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 0,
    animation: false,
    normalized: true,
    events: [],

    plugins: {
      legend: { position: "top" },
      zoom: {
        zoom: {
          wheel: { enabled: true },
          pinch: { enabled: true },
          mode: "x"
        },
        pan: {
          enabled: true,
          mode: "x"
        }
      },
      // ✅ TAMBAHKAN INI - GARIS ALERT
      annotation: {
        annotations: {
          tempAlert: {
            type: 'line',
            yMin: 20,
            yMax: 20,
            borderColor: 'black',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: 'Temp Alert (20°C)',
              position: 'end',
              backgroundColor: 'black',
              color: 'white',
              font: {
                size: 10
              }
            }
          },
          humAlert: {
            type: 'line',
            yMin: 60,
            yMax: 60,
            borderColor: 'rgb(234, 179, 8)', // Kuning
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: 'Hum Alert (60%)',
              position: 'end',
              backgroundColor: 'rgb(234, 179, 8)',
              color: 'white',
              font: {
                size: 10
              }
            }
          }
        }
      }
    },

    scales: {
      y: {
        min: 0,
        max: 100,
        grace: 0,
        ticks: {
          stepSize: 20,
          callback: v => v
        }
      },
      x: {
        grid: { display: false }
      }
    }
  }
});

// Full-screen toggle for Chamber 1 chart
// const chartContainer1 = document.querySelector('#tempChart1').closest('.bg-black\\/30.rounded-xl.p-4.h-\\[320px\\]');
// if (chartContainer1) {
//   let clickCount = 0;
//   let clickTimer;

//   chartContainer1.addEventListener('click', (e) => {
//     clickCount++;
//     clearTimeout(clickTimer);
//     clickTimer = setTimeout(() => {
//       if (clickCount === 1 && chartContainer1.classList.contains('chart-fullscreen')) {
//         chartContainer1.classList.remove('chart-fullscreen');
//       }
//       clickCount = 0;
//     }, 300);
//   });

//   chartContainer1.addEventListener('dblclick', (e) => {
//     e.preventDefault();
//     clearTimeout(clickTimer);
//     clickCount = 0;
//     chartContainer1.classList.add('chart-fullscreen');
//   });
// }

// ================= CHART UNTUK CHAMBER 2 =================
const ctx2 = document.getElementById("tempChart2").getContext("2d");

window.sensorChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Temperature",
        data: [],
        borderColor: "rgb(239,68,68)",
        backgroundColor: "rgba(239,68,68,0.25)",
        tension: 0.4,
        fill: "origin"
      },
      {
        label: "Humidity",
        data: [],
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.25)",
        tension: 0.4,
        fill: "origin"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 0,
    animation: false,
    normalized: true,
    events: [],

    plugins: {
      legend: { position: "top" },
      zoom: {
        zoom: {
          wheel: { enabled: true },
          pinch: { enabled: true },
          mode: "x"
        },
        pan: {
          enabled: true,
          mode: "x"
        }
      },
      // ✅ TAMBAHKAN INI - GARIS ALERT
      annotation: {
        annotations: {
          tempAlert: {
            type: 'line',
            yMin: 20,
            yMax: 20,
            borderColor: 'black',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: 'Temp Alert (20°C)',
              position: 'end',
              backgroundColor: 'black',
              color: 'white',
              font: {
                size: 10
              }
            }
          },
          humAlert: {
            type: 'line',
            yMin: 60,
            yMax: 60,
            borderColor: 'rgb(234, 179, 8)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: 'Hum Alert (60%)',
              position: 'end',
              backgroundColor: 'rgb(234, 179, 8)',
              color: 'white',
              font: {
                size: 10
              }
            }
          }
        }
      }
    },

    scales: {
      y: {
        min: 0,
        max: 100,
        grace: 0,
        ticks: {
          stepSize: 20,
          callback: v => v
        }
      },
      x: {
        grid: { display: false }
      }
    }
  }
});

// // Full-screen toggle for Chamber 2 chart
// const chartContainer2 = document.querySelector('#tempChart2').closest('.bg-black\\/30.rounded-xl.p-4.h-\\[320px\\]');
// if (chartContainer2) {
//   let clickCount2 = 0;
//   let clickTimer2;

//   chartContainer2.addEventListener('click', (e) => {
//     clickCount2++;
//     clearTimeout(clickTimer2);
//     clickTimer2 = setTimeout(() => {
//       if (clickCount2 === 1 && chartContainer2.classList.contains('chart-fullscreen')) {
//         chartContainer2.classList.remove('chart-fullscreen');
//       }
//       clickCount2 = 0;
//     }, 300);
//   });

//   chartContainer2.addEventListener('dblclick', (e) => {
//     e.preventDefault();
//     clearTimeout(clickTimer2);
//     clickCount2 = 0;
//     chartContainer2.classList.add('chart-fullscreen');
//   });
// }

// ================= CHART UNTUK CHAMBER 3 =================
const ctx3 = document.getElementById("tempChart3").getContext("2d");

window.sensorChart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Temperature",
        data: [],
        borderColor: "rgb(239,68,68)",
        backgroundColor: "rgba(239,68,68,0.25)",
        tension: 0.4,
        fill: "origin"
      },
      {
        label: "Humidity",
        data: [],
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.25)",
        tension: 0.4,
        fill: "origin"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 0,
    animation: false,
    normalized: true,
    events: [],

    plugins: {
      legend: { position: "top" },
      zoom: {
        zoom: {
          wheel: { enabled: true },
          pinch: { enabled: true },
          mode: "x"
        },
        pan: {
          enabled: true,
          mode: "x"
        }
      },
      // ✅ TAMBAHKAN INI - GARIS ALERT
      annotation: {
        annotations: {
          tempAlert: {
            type: 'line',
            yMin: 20,
            yMax: 20,
            borderColor: 'black',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: 'Temp Alert (20°C)',
              position: 'end',
              backgroundColor: 'black',
              color: 'white',
              font: {
                size: 10
              }
            }
          },
          humAlert: {
            type: 'line',
            yMin: 60,
            yMax: 60,
            borderColor: 'rgb(234, 179, 8)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: 'Hum Alert (60%)',
              position: 'end',
              backgroundColor: 'rgb(234, 179, 8)',
              color: 'white',
              font: {
                size: 10
              }
            }
          }
        }
      }
    },

    scales: {
      y: {
        min: 0,
        max: 100,
        grace: 0,
        ticks: {
          stepSize: 20,
          callback: v => v
        }
      },
      x: {
        grid: { display: false }
      }
    }
  }
});

// // Full-screen toggle for Chamber 3 chart
// const chartContainer3 = document.querySelector('#tempChart3').closest('.bg-black\\/30.rounded-xl.p-4.h-\\[320px\\]');
// if (chartContainer3) {
//   let clickCount3 = 0;
//   let clickTimer3;

//   chartContainer3.addEventListener('click', (e) => {
//     clickCount3++;
//     clearTimeout(clickTimer3);
//     clickTimer3 = setTimeout(() => {
//       if (clickCount3 === 1 && chartContainer3.classList.contains('chart-fullscreen')) {
//         chartContainer3.classList.remove('chart-fullscreen');
//       }
//       clickCount3 = 0;
//     }, 300);
//   });

//   chartContainer3.addEventListener('dblclick', (e) => {
//     e.preventDefault();
//     clearTimeout(clickTimer3);
//     clickCount3 = 0;
//     chartContainer3.classList.add('chart-fullscreen');
//   });
// }

// ================= CHART UNTUK CHAMBER 4 =================
const ctx4 = document.getElementById("tempChart4").getContext("2d");

window.sensorChart4 = new Chart(ctx4, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Temperature",
        data: [],
        borderColor: "rgb(239,68,68)",
        backgroundColor: "rgba(239,68,68,0.25)",
        tension: 0.4,
        fill: "origin"
      },
      {
        label: "Humidity",
        data: [],
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.25)",
        tension: 0.4,
        fill: "origin"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 0,
    animation: false,
    normalized: true,
    events: [],

    plugins: {
      legend: { position: "top" },
      zoom: {
        zoom: {
          wheel: { enabled: true },
          pinch: { enabled: true },
          mode: "x"
        },
        pan: {
          enabled: true,
          mode: "x"
        }
      },
      // ✅ TAMBAHKAN INI - GARIS ALERT
      annotation: {
        annotations: {
          tempAlert: {
            type: 'line',
            yMin: 20,
            yMax: 20,
            borderColor: 'black',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: 'Temp Alert (20°C)',
              position: 'end',
              backgroundColor: 'black',
              color: 'white',
              font: {
                size: 10
              }
            }
          },
          humAlert: {
            type: 'line',
            yMin: 60,
            yMax: 60,
            borderColor: 'rgb(234, 179, 8)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              display: true,
              content: 'Hum Alert (60%)',
              position: 'end',
              backgroundColor: 'rgb(234, 179, 8)',
              color: 'white',
              font: {
                size: 10
              }
            }
          }
        }
      }
    },

    scales: {
      y: {
        min: 0,
        max: 100,
        grace: 0,
        ticks: {
          stepSize: 20,
          callback: v => v
        }
      },
      x: {
        grid: { display: false }
      }
    }
  }
});
