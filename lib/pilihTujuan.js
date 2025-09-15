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
    console.clear()
  let loop = true;
  while (loop) {
    console.log("===Pilih Kenaraan===\n");
    console.log("1. motor ( 1 orang )");
    console.log("2. mobil ( 2 - 5 orang )");
    console.log('\n99. kembali')

    const input = parseInt(await question("\nMasukan pilihan (1/2): "));
    if (input === 99) {
      loop = false;
      console.clear()
      continue
    }
    if (isNaN(input) || input <= 0 || input > 2) {
      await question("\nInput tidak sesuai.. Tekan Enter untuk keluar\n\n");
      await tujuan();
    } else {
      if (input === 1) {
        const jarak = parseInt(
          await question("\nMasukan jarak perjalanan (km): ")
        );
        let total;
        if (isNaN(jarak) || jarak < 0) {
          console.clear();
          await question(
            "\nInput tidak sesuai.. Tekan Enter untuk input ulang.."
          );
          await tujuan();
        } else {
          if (jarak >= 4) {
            total = tarif.motor.awal + (jarak - 4) * tarif.motor.perKm;
          } else {
            total = tarif.motor.awal;
          }
        }
        await trip("Motor", jarak, total);
      } else {
        const jarak = parseInt(
          await question("\nMasukan jarak perjalanan (km): ")
        );
        let total;
        if (isNaN(jarak) || input < 0) {
          console.clear();
          await question(
            "\nInput tidak sesuai.. Tekan Enter untuk input ulang.."
          );
          await tujuan();
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
}

async function trip(jenis, jarak, total) {
  console.log(
    `\nOngkos perjalanan ${jenis} sejauh ${jarak} km adalah Rp${total.toLocaleString()}`
  );
  let pesan = await question(
    "\nApakah Anda ingin memesan driver? (Y = yes | N = no): "
  );
  pesan = pesan.toLowerCase();
  if (pesan !== "y" && pesan !== "n") {
    await question("\nInput tidak sesuai");
    await trip(jenis, jarak, total);
    return;
  } else {
    if (pesan.toLowerCase() === "y") {
      tambahHistory({
        jenis,
        jarak,
        total,
        driver: "Dipesan",
        waktu: new Date().toLocaleString(),
        invoice: Math.random(),
      });
      console.clear();
      await question(
        "\nHore.. Driver berhasil dipesan😊\nMohon tunggu beberapa menit untuk driver datang menjemput"
      );
      console.clear();
    } else {
      tambahHistory({
        jenis,
        jarak,
        total,
        driver: "Tidak dipesan",
        waktu: new Date().toLocaleString(),
        invoice: Math.random(),
      });
      console.clear();
      await question(
        "\nYah.. Perjalanan hanya dihitung tanpa pemesanan driver"
      );
    }
  }
}

module.exports = { tujuan };
