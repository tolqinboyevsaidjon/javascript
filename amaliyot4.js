const sarlavha = document.getElementById("sarlavha");
const matn = document.querySelector(".matn");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  sarlavha.textContent = "Yangi Sarlavha";
  console.log(matn.textContent);
});