const history = [];

function tambahHistory(data) {
  history.push(data);
}

function lihatHistory() {
  console.log("\n=== Riwayat Perjalanan ===");
  if (history.length === 0) {
    console.log("Belum ada perjalanan.");
    return;
  }
  history.forEach((h, i) => {
    console.log(
      `${i + 1}. [${h.waktu}] ${h.jenis} - ${h.jarak} km - Rp${h.total.toLocaleString()} - Driver: ${h.driver}`
    );
  });
}

module.exports = { tambahHistory, lihatHistory };
