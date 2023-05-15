let currentImageIndex = 1;
const totalImages = 51;
const imageElement1 = document.getElementById('image1');
const imageElement2 = document.getElementById('image2');
let activeImage = imageElement1;
let inactiveImage = imageElement2;

function applyRandomRotation(imageElement) {
  const minRotation = -5;
  const maxRotation = 5;
  const rotation = Math.random() * (maxRotation - minRotation) + minRotation;
  imageElement.style.transform = `rotate(${rotation}deg)`;
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex > totalImages) {
    currentImageIndex = 1;
  } else if (currentImageIndex < 1) {
    currentImageIndex = totalImages;
  }

  let newImage = new Image();
  newImage.src = `images/gallery/${currentImageIndex}.jpeg`;
  newImage.onload = function () {
    inactiveImage.src = this.src;
    activeImage.style.opacity = 0;
    applyRandomRotation(inactiveImage);
    inactiveImage.style.opacity = 1;
    let temp = activeImage;
    activeImage = inactiveImage;
    inactiveImage = temp;
  };
}

// Initial load
changeImage(0);
