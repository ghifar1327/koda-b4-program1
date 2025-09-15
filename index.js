const { question , exit } = require("./lib/input");
const { tujuan } = require("./lib/pilihTujuan");
const { lihatHistory } = require("./lib/history");

async function menuUtama() {
  console.clear()
  let running = true;
  while (running) {
    console.log("\n=== Hallo.. Mau kemana hari ini?===\n");
    console.log("1. Mulai Perjalanan");
    console.log("2. History Perjalanan");
    console.log("3. Keluar");

    const inputMenu = parseInt(await question("\nMasukan pilihan: "));

    switch (inputMenu) {
      case 1:
        console.clear()
        await tujuan();
        break;
      case 2:
        console.clear()
        await lihatHistory();
        break;
      case 3:
        console.clear()
        await question("Terima kasih sudah menggunakan layanan kami😊");
        running = false;
        exit()
        break;
      default:
        console.log("Pilihan tidak valid!");
    }
  }
}

menuUtama();
