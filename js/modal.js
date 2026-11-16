// Get elements
const modal = document.querySelector(".modal");
const modalImg = modal.querySelector(".modal-content");
const captionText = modal.querySelector(".caption");
const closeBtn = modal.querySelector(".close");

// Get all images with the class "modal-trigger"
const images = document.querySelectorAll(".modal-trigger");

// Loop through each image and add click event
images.forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.textContent = this.alt;
    modalImg.classList.remove("zoomed"); // Reset zoom if previously applied
  });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// Zoom toggle on modal image click
modalImg.onclick = function () {
  this.classList.toggle("zoomed");
};