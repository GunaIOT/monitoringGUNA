const express = require("express");
const mqtt = require("mqtt");
const cors = require("cors");

const app = express();
app.use(cors());

/* ================= CACHE DATA ================= */

// ===== CHAMBER =====
const chambers = {
  chamber1: { temperature: null, humidity: null },
  chamber2: { temperature: null, humidity: null },
  chamber3: { temperature: null, humidity: null },
  chamber4: { temperature: null, humidity: null }
};

// ===== GAS =====
const gasMeters = {
  gas1: { flow: 0, volume: 0 },
  gas2: { flow: 0, volume: 0 },
  gas3: { flow: 0, volume: 0 }
};

// ===== POWER =====
let powerData = {
  voltageA: 0,
  voltageB: 0,
  voltageC: 0,
  energy: 0
};

/* ================= MQTT ================= */

const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
  console.log("✅ MQTT Connected");

  client.subscribe([
    // ===== CHAMBER =====
    "iot/ikratul/chamber1/temperature",
    "iot/ikratul/chamber1/humidity",
    "iot/ikratul/chamber2/temperature",
    "iot/ikratul/chamber2/humidity",
    "iot/ikratul/chamber3/temperature",
    "iot/ikratul/chamber3/humidity",
    "iot/ikratul/chamber4/temperature",
    "iot/ikratul/chamber4/humidity",

    // ===== GAS =====
    "iot/ikratul/gas1/flow",
    "iot/ikratul/gas1/total",
    "iot/ikratul/gas2/flow",
    "iot/ikratul/gas2/total",
    "iot/ikratul/gas3/flow",
    "iot/ikratul/gas3/total",

    // ===== POWER =====
    "iot/ikratul/power/voltageA",
    "iot/ikratul/power/voltageB",
    "iot/ikratul/power/voltageC",
    "iot/ikratul/power/energy"
  ]);
});

client.on("message", (topic, message) => {

  const value = parseFloat(message.toString());
  if (isNaN(value)) return;

  console.log("📡 Data diterima:", topic, value);

  const parts = topic.split("/");
  // iot / ikratul / gas3 / flow

  const device = parts[2];
  const type   = parts[3];

  // ===== CHAMBER =====
  if (device.startsWith("chamber") && chambers[device]) {
    if (type === "temperature") chambers[device].temperature = value;
    if (type === "humidity")    chambers[device].humidity = value;
  }

  // ===== GAS =====
  if (device.startsWith("gas") && gasMeters[device]) {
    if (type === "flow")  gasMeters[device].flow = value;
    if (type === "total") gasMeters[device].volume = value;
  }

  // ===== POWER =====
  if (device === "power") {
    if (type === "voltageA") powerData.voltageA = value;
    if (type === "voltageB") powerData.voltageB = value;
    if (type === "voltageC") powerData.voltageC = value;
    if (type === "energy")   powerData.energy   = value;
  }
});

/* ================= API ================= */

app.get("/api/data", (req, res) => {
  res.json({ chambers, gasMeters, powerData });
});

app.get("/api/power", (req, res) => {
  res.json(powerData);
});

/* ================= START SERVER ================= */

const PORT = 4000; // bebas ganti kalau mau

app.listen(PORT, '8.8.8.7', () => {
  console.log(`🚀 Server running at http://192.168.0.24:${PORT}`);
});
