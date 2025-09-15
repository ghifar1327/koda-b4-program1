const { question } = require("./lib/input");
const { tujuan } = require("./lib/pilihTujuan");
const { lihatHistory } = require("./lib/history");

async function menuUtama() {
  let running = true;

  while (running) {
    console.log("\n=== Hallo.. Mau kemana hari ini?===\n");
    console.log("1. Pilih Tujuan");
    console.log("2. History Perjalanan");
    console.log("3. Keluar");

    const inputMenu = parseInt(await question("\nMasukan pilihan: "));

    switch (inputMenu) {
      case 1:
        await tujuan();
        break;
      case 2:
        await lihatHistory();
        break;
      case 3:
        console.log("Terima kasih sudah menggunakan layanan kami 👋");
        running = false;
        break;
      default:
        console.log("Pilihan tidak valid!");
    }
  }
}

menuUtama();
