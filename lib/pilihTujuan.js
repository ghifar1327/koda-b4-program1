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
  if (input === 1) {
    const jarak = parseInt(await question("Masukan jarak perjalanan (km): "));
    let total;
    if (jarak >= 4) {
      total = tarif.motor.awal + (jarak - 4) * tarif.motor.perKm;
    } else {
      total = tarif.motor.awal;
    }
    await trip("Motor", jarak, total);

  } else if (input === 2) {
    const jarak = parseInt(await question("Masukan jarak perjalanan (km): "));
    let total;
    if (jarak >= 4) {
      total = tarif.mobil.awal + (jarak - 4) * tarif.mobil.perKm;
    } else {
      total = tarif.mobil.awal;
    }
    await trip("Mobil", jarak, total);

  } else {
    console.log("Input tidak sesuai");
  }
}

async function trip(jenis, jarak, total) {
  console.log(
    `Ongkos perjalanan ${jenis} sejauh ${jarak} km adalah Rp${total.toLocaleString()}`
  );

  const pesan = await question("Apakah Anda ingin memesan driver? (ya/tidak): ");

  if (pesan.toLowerCase() === "y") {
    tambahHistory({
      jenis,
      jarak,
      total,
      driver: "Dipesan",
      waktu: new Date().toLocaleString(),
    });
    console.log("Driver berhasil dipesan ✅");
  } else if (pesan.toLowerCase() === "n"){
    tambahHistory({
      jenis,
      jarak,
      total,
      driver: "Tidak dipesan",
      waktu: new Date().toLocaleString(),
    });
    console.log("Perjalanan hanya dihitung tanpa pemesanan driver.");
  }
}

module.exports = { tujuan };
