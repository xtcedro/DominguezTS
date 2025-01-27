// Select the image element and set an initial directory path
const bannerImage = document.querySelector(".title-banner img");
const imageDirectory = "assets/images/banners/";
let currentIndex = 0;

// Array of image file names (add at least one image here)
const imageBanners = [
  "banner1.png", // Add more images if available
];

// Function to update the banner image with fade-in and slide effect
function updateBanner() {
  if (imageBanners.length > 1) {
    // Add a fade-out and slide-up effect
    bannerImage.style.opacity = "0";
    bannerImage.style.transform = "translateY(20px)";
    bannerImage.style.transition = "opacity 1s, transform 1s";

    setTimeout(() => {
      // Change the image source
      currentIndex = (currentIndex + 1) % imageBanners.length; // Loop through images
      bannerImage.src = `${imageDirectory}${imageBanners[currentIndex]}`;

      // Add fade-in and slide-down effect
      bannerImage.style.opacity = "1";
      bannerImage.style.transform = "translateY(0)";
    }, 1000); // Delay to allow fade-out before updating
  } else {
    // If only one image, still apply fade-in and float effects
    bannerImage.style.opacity = "0";
    bannerImage.style.transform = "translateY(10px)";
    bannerImage.style.transition = "opacity 1s, transform 1s";

    setTimeout(() => {
      bannerImage.style.opacity = "1";
      bannerImage.style.transform = "translateY(0)";
    }, 1000);
  }
}

// Add floating effect (continuous movement)
function addFloatingEffect() {
  bannerImage.style.animation = "floatEffect 4s ease-in-out infinite";
}

// Add hover effects for zoom and color filter
function addHoverEffects() {
  bannerImage.addEventListener("mouseover", () => {
    bannerImage.style.transform = "scale(1.1) rotate(2deg)";
    bannerImage.style.filter = "brightness(1.2) saturate(1.5)";
    bannerImage.style.transition = "transform 0.5s ease, filter 0.5s ease";
  });

  bannerImage.addEventListener("mouseout", () => {
    bannerImage.style.transform = "scale(1) rotate(0deg)";
    bannerImage.style.filter = "brightness(1) saturate(1)";
  });
}

// Automatically update the banner every 5 seconds
setInterval(updateBanner, 5000);

// Add floating and hover effects
addFloatingEffect();
addHoverEffects();