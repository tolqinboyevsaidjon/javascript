let Prices = [150, 80, 200, 50, 120];
let Produkt = Prices.find(p => p < 100);
console.log(Produkt);

let Scores = [70, 85, 90, 95, 80];
let natijaa = Scores.find(s => s >= 90);
console.log(natijaa);

let Fruits = ["olma", "banan", "bpelsin", "shaftoli"];
let mevalarr = [];
Fruits.forEach(f => {
  mevalarr.push(f[0].toUpperCase() + f.slice(1));
});
console.log(mevalarr);

let shaharlar = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Namangan", "Andijon"];
let ohirii = shaharlar.slice(-3);
console.log(ohirii);

let fanlar2 = ["Ingliz tili", "Tarix", "Matematika", "Fizika", "Kimyo"];
fanlar2.splice(2, 2, "Dasturlash");
console.log(fanlar2);