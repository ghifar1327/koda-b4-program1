const { question } = require("./input");

const history = [];

function tambahHistory(data) {
  history.push(data);
}

async function lihatHistory() {
  console.log("\n=== Riwayat Perjalanan ===");
  if (history.length === 0) {
    console.log("\nBelum ada perjalanan.");
    await question("Tekan Enter untuk keluar");
    console.clear();
    return;
  } else {
    history.forEach((h, i) => {
      console.log(
        `#${i + 1}. invoice:${h.invoice} [${h.waktu}] \n${h.jenis} - ${
          h.jarak
        } km - Rp${h.total.toLocaleString()} - Driver: ${h.driver}\n`
      );
    });
  }
  await question("Tekan Enter untuk keluar");
  console.clear();
}

module.exports = { tambahHistory, lihatHistory };
