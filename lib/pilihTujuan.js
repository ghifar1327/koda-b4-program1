const { question } = require("./input");


const tarif = {
  motor: {
    awal: 14000,
    perKm: 2500
  },
  mobil: {
    awal: 20000,
    perKm: 4000
  }
};

async function tujuan() {
  console.log("1. motor");
  console.log("2. mobil");

  const input = parseInt(await question("Masukan pilihan (1/2): "));
  if (input === 1) {
    const jarak = parseInt(await question("Masukan jarak perjalanan (km): "))
    if(jarak >= 4){
        const total = tarif.motor.awal + ((jarak-4) * tarif.motor.perKm);
        console.log(`Ongkos perjalanan motor sejauh ${jarak} km adalah Rp${total.toLocaleString()}`);
    }else{
      console.log(`Ongkos perjalanan motor sejauh ${jarak} km adalah Rp${tarif.motor.awal}`);
    }
  } else if (input === 2) {
      const jarak = parseFloat(await question("Masukan jarak perjalanan (km): "));
    if(jarak >= 4){
        const total = tarif.mobil.awal + ((jarak-4) * tarif.mobil.perKm);
        console.log(`Ongkos perjalanan mobil sejauh ${jarak} km adalah Rp${total.toLocaleString()}`);
    }else{
        console.log(`Ongkos perjalanan motor sejauh ${jarak} km adalah Rp${tarif.motor.awal}`);
    }
  } else {
    console.log("Input tidak sesuai");
  }
}

module.exports = { tujuan };
