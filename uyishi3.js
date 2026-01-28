//1
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];

// const yangiMassiv = [0, ...a, ...b, ...c, 100];

// console.log(yangiMassiv);

//2
const mahsulot = {
  nomi: "Laptop",
  narxi: 5000000,
  rangi: "Kumush"
};

const yangiMahsulot = {
  ...mahsulot,
  narxi: mahsulot.narxi * 1.2,
  chegirma: true
};

console.log(yangiMahsulot);

