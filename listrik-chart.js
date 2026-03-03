document.addEventListener("DOMContentLoaded", function () {

  const ctx = document.getElementById("energyChart").getContext("2d");

  const energyChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: "Total Energy (kWh)",
        data: [],
        borderColor: "#facc15",
        borderWidth: 2,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      animation: false,
      scales: {
        y: { beginAtZero: false }
      }
    }
  });

  async function fetchPower() {
    try {
      const res = await fetch("http://192.168.0.24:4000/api/power");
      const data = await res.json();

      const time = new Date().toLocaleTimeString();

      document.getElementById("va").innerText = data.voltageA ?? "--";
      document.getElementById("vb").innerText = data.voltageB ?? "--";
      document.getElementById("vc").innerText = data.voltageC ?? "--";

      energyChart.data.labels.push(time);
      energyChart.data.datasets[0].data.push(data.energy ?? 0);

      if (energyChart.data.labels.length > 20) {
        energyChart.data.labels.shift();
        energyChart.data.datasets[0].data.shift();
      }

      energyChart.update();

    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  setInterval(fetchPower, 2000);
  fetchPower();
});
