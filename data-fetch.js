async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/data");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    /* ===============================
       CHAMBER UI UPDATE
    =============================== */
    function updateChamber(chamber, tempId, humId) {
      if (!chamber) return;

      const tempEl = document.getElementById(tempId);
      const humEl  = document.getElementById(humId);

      const temperature = chamber.temperature ?? 0;
      const humidity    = chamber.humidity ?? 0;

      if (tempEl) tempEl.textContent = Number(temperature).toFixed(1);
      if (humEl)  humEl.textContent  = Number(humidity).toFixed(1);
    }

    updateChamber(data?.chambers?.chamber1, "temp1", "hum1");
    updateChamber(data?.chambers?.chamber2, "temp2", "hum2");
    updateChamber(data?.chambers?.chamber3, "temp3", "hum3");
    updateChamber(data?.chambers?.chamber4, "temp4", "hum4");


    /* ===============================
       CHAMBER CHART UPDATE
    =============================== */
    function updateSensorChart(chart, temperature, humidity) {
      if (!chart) return;

      const now = new Date().toLocaleTimeString();

      chart.data.labels.push(now);
      chart.data.datasets[0].data.push(temperature ?? 0);
      chart.data.datasets[1].data.push(humidity ?? 0);

      if (chart.data.labels.length > 30) {
        chart.data.labels.shift();
        chart.data.datasets.forEach(ds => ds.data.shift());
      }

      chart.update('none');
    }

    updateSensorChart(
      window.sensorChart1,
      data?.chambers?.chamber1?.temperature,
      data?.chambers?.chamber1?.humidity
    );

    updateSensorChart(
      window.sensorChart2,
      data?.chambers?.chamber2?.temperature,
      data?.chambers?.chamber2?.humidity
    );

    updateSensorChart(
      window.sensorChart3,
      data?.chambers?.chamber3?.temperature,
      data?.chambers?.chamber3?.humidity
    );

    updateSensorChart(
      window.sensorChart4,
      data?.chambers?.chamber4?.temperature,
      data?.chambers?.chamber4?.humidity
    );


    /* ===============================
       GAS UI UPDATE
    =============================== */
    function updateGasUI(gasData, flowId, volumeId) {

      const flowEl   = document.getElementById(flowId);
      const volumeEl = document.getElementById(volumeId);

      const flow   = gasData?.flow ?? 0;
      const volume = gasData?.volume ?? 0;

      if (flowEl)
        flowEl.textContent = Number(flow).toFixed(3);

      if (volumeEl)
        volumeEl.textContent = Number(volume).toFixed(2);
    }

    updateGasUI(data?.gasMeters?.gas1, "gas1_flow", "gas1_volume");
    updateGasUI(data?.gasMeters?.gas2, "gas2_flow", "gas2_volume");
    updateGasUI(data?.gasMeters?.gas3, "gas3_flow", "gas3_volume");


    /* ===============================
       GAS CHART UPDATE
    =============================== */
    function updateGasChart(chart, flowValue = 0, volumeValue = 0) {
      if (!chart) return;

      const now = new Date().toLocaleTimeString();

      chart.data.labels.push(now);
      chart.data.datasets[0].data.push(flowValue ?? 0);
      chart.data.datasets[1].data.push(volumeValue ?? 0);

      if (chart.data.labels.length > 30) {
        chart.data.labels.shift();
        chart.data.datasets.forEach(ds => ds.data.shift());
      }

      chart.update('none');
    }

    updateGasChart(
      window.gasChart1,
      data?.gasMeters?.gas1?.flow,
      data?.gasMeters?.gas1?.volume
    );

    updateGasChart(
      window.gasChart2,
      data?.gasMeters?.gas2?.flow,
      data?.gasMeters?.gas2?.volume
    );

    updateGasChart(
      window.gasChart3,
      data?.gasMeters?.gas3?.flow,
      data?.gasMeters?.gas3?.volume
    );

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

/* ===============================
   AUTO REFRESH
=============================== */
setInterval(fetchData, 2000);
fetchData();
