const { question } = require("./input");
const { tambahHistory } = require("./history");

const tarif = {
  motor: {
    awal: 14000,
    perKm: 2500,
  },
  mobil: {
    awal: 20000,
    perKm: 4000,
  },
};

async function tujuan() {
  console.log("1. motor");
  console.log("2. mobil");

  const input = parseInt(await question("Masukan pilihan (1/2): "));
  if (isNaN(input) || input <= 0 || input > 2) {
    await question("\nInput tidak sesuai.. Tekan Enter untuk keluar\n\n");
    await tujuan();
  } else {
    if (input === 1) {
      const jarak = parseInt(await question("Masukan jarak perjalanan (km): "));
      let total;
      if (isNaN(jarak) || jarak< 0) {
        await question('Input tidak sesuai.. Tekan Enter untuk input ulang..')
        await tujuan()
      } else {
        if (jarak >= 4) {
          total = tarif.motor.awal + (jarak - 4) * tarif.motor.perKm;
        } else {
          total = tarif.motor.awal;
        }
        
      }
      await trip("Motor", jarak, total);
    } else {
      const jarak = parseInt(await question("Masukan jarak perjalanan (km): "));
      let total;
      if (isNaN(jarak) || input < 0) {
        await question('Input tidak sesuai.. Tekan Enter untuk input ulang..')
        await tujuan()
      } else {
        if (jarak >= 4) {
          total = tarif.mobil.awal + (jarak - 4) * tarif.mobil.perKm;
        } else {
          total = tarif.mobil.awal;
        }
      }
      await trip("Mobil", jarak, total);
    }
  }
}

async function trip(jenis, jarak, total) {
  console.log(
    `Ongkos perjalanan ${jenis} sejauh ${jarak} km adalah Rp${total.toLocaleString()}`
  );
  let pesan = await question(
    "Apakah Anda ingin memesan driver? (Y = yes | N = no): "
  );
  pesan = pesan.toLowerCase()
if (pesan !== 'y' && pesan !=='n'){
    await question('Input tidak sesuai')
    await trip(jenis, jarak, total)
    return
}else{
  if (pesan.toLowerCase() === "y") {
    tambahHistory({
      jenis,
      jarak,
      total,
      driver: "Dipesan",
      waktu: new Date().toLocaleString(),
      
    });
    await question("Driver berhasil dipesan ✅");
  } else {
    tambahHistory({
      jenis,
      jarak,
      total,
      driver: "Tidak dipesan",
      waktu: new Date().toLocaleString(),
    });
    await question("Perjalanan hanya dihitung tanpa pemesanan driver.");
  }}
}

module.exports = { tujuan };
