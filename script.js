const noButton = document.getElementById("noButton");
const modal = document.getElementById("modal");

noButton.addEventListener("mouseover", () => {
  const x =
    Math.random() * (window.innerWidth - noButton.offsetWidth - 20);
  const y =
    Math.random() * (window.innerHeight - noButton.offsetHeight - 20);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

function showModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}