// 1. Elementlarni tanlang
const box = document.getElementById('box');
const btn = document.getElementById('btn');

// 2. Tugma bosilganda hodisa
btn.addEventListener('click', function() {
    box.style.backgroundColor = 'red';
    box.textContent = 'Bosildi!';
});
