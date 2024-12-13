const noButton = document.getElementById("noButton");
const modal = document.getElementById("modal");
const qrCode = document.getElementById("qrCode");

// Variables configurables
const message = '¡Hola! 👋📚 Te comparto el enlace de inscripción para la Escuela de Educación Secundaria Técnica Nº1 "Mariano Moreno" (EEST 1) 🏫. ¡No dejes pasar esta oportunidad para que tu hijo/a sea parte de nuestra comunidad educativa! 🚀✨';
const link = "https://docs.google.com/forms/d/e/1FAIpQLSc3Tgu73jsDT3skc6wuSzIMlLdd1xFLp_fOSWtFoHh6Yt5Ilw/viewform";

// Generar enlace dinámico
const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}%0A%0AHaz%20clic%20aqui%20para%20inscribirlo/a:%20${encodeURIComponent(link)}`;

// Escuchar movimiento sobre el botón "No"
noButton.addEventListener("mouseover", () => {
  const x =
    Math.random() * (window.innerWidth - noButton.offsetWidth - 20);
  const y =
    Math.random() * (window.innerHeight - noButton.offsetHeight - 20);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Mostrar modal con QR
function showModal() {
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappLink)}`;
  modal.style.display = "flex";
}

// Cerrar modal
function closeModal() {
  modal.style.display = "none";
}