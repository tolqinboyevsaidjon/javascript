// Quyidagi massivga "Anor" va "Nok" mevalarini oxiriga qo'shing. 
let mevalar = ["Olma", "Banan", "Uzum"];
mevalar.push("Anor","Nok");
console.log(mevalar);
// Quyidagi massivdan oxirgi 2 ta elementni olib tashlang va ularni konsolga chiqaring. 
let sonlar = [10, 20, 30, 40, 50];

let ohiri1 = sonlar.pop();
let ohiri2 = sonlar.pop();

console.log(ohiri2, ohiri1); 
console.log(sonlar);       

// Array ichidagi fagat juft sonlarni chiqarish kerak. 
let numbers = [5, 12, 8, 17, 4, 21, 16, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// Array nechta manfiy son borligini aniqlab chiqar. 
let arr1 = [3, -5, 8, -2, 0, -9, 4, -1];

let count = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < 0) {
    count++;
  }
}
console.log(count);