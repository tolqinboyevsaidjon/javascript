//1 mashq
let talabalar =[
    {ism: "ali" , ball:75},
    {ism: "vali" , ball:85}, 
    {ism: "guli" , ball:90}, 
    {ism: "olim" , ball:60}
];
let yuqoriBallilar = talabalar.filter(function(talaba) {
  return talaba.ball > 80;
});

console.log(yuqoriBallilar);    
//2 mashq
let mahsulotlar = [
  { id: 1, nomi: "Telefon", narxi: 3000000 },
  { id: 2, nomi: "Laptop", narxi: 8000000 },
  { id: 3, nomi: "Planshet", narxi: 2500000 }
];
let topilganMahsulot = mahsulotlar.find(function(mahsulot) {
  return mahsulot.id === 3;
});
console.log(topilganMahsulot.narxi);
