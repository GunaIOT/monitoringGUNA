async function loadOverview() {
  try {
    const res = await fetch("http://192.168.0.24:4000/api/data");
    const data = await res.json();

    updateChamber(
      "ch1",
      data.chamber1.temperature,
      data.chamber1.humidity
    );

    updateChamber(
      "ch2",
      data.chamber2.temperature,
      data.chamber2.humidity
    );

  } catch (err) {
    console.error("Overview fetch error:", err);
  }
}

function updateChamber(prefix, temp, hum) {
  document.getElementById(`${prefix}-temp`).innerText = temp ?? "--";
  document.getElementById(`${prefix}-hum`).innerText = hum ?? "--";

  const box = document.getElementById(`${prefix}-box`);

  // Contoh rule (sesuaikan SOP kamu)
  box.className = "rounded-xl p-4 shadow ";

  if (temp >= 35 || hum >= 80) {
    box.classList.add("bg-red-100", "text-red-700");
  } else if (temp >= 30 || hum >= 70) {
    box.classList.add("bg-yellow-100", "text-yellow-700");
  } else {
    box.classList.add("bg-green-100", "text-green-700");
  }
}

setInterval(loadOverview, 2000);
loadOverview();
