const{question,exit}= require('./lib/input')
async function menuUtama() {
  let running = true;

  while (running) {
    console.log("\n=== Hallo.. Mau kemana hari ini?===\n");
    console.log("1. pilih Tujuan");
    console.log("2. History perjalan");
    console.log("3. keluar");

    const inputMenu = parseInt(await question("\nMasukan angka untuk memilih menu: "));

    switch (inputMenu) {
      case 1:
        console.log("fitur pilihan belum di buat")
      break;
      case 2:
        console.log('fitur history pertjalanan')
        break;
      case 3:
        running = false
        exit()
        break;
      default:
        console.log("Input tidak valid!");
        console.clear()
    }
  }
}

menuUtama()