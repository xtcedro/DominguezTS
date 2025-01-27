// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Title Animation: Cycle Through Messages
  const headerTitle = document.querySelector(".header-title");
  const messages = ["🚀 Dominguez Tech Solutions", "⚡ Fast, Reliable, Modern", "💻 Innovative Web Apps"];
  let messageIndex = 0;

  setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    headerTitle.textContent = messages[messageIndex];
  }, 3000); // Change every 3 seconds

  // Hover Effect: Glow and Zoom on the Banner Image
  const titleBanner = document.querySelector(".title-banner img");

  titleBanner.addEventListener("mouseover", () => {
    titleBanner.style.transform = "scale(1.1)";
    titleBanner.style.filter = "brightness(1.2)";
    titleBanner.style.transition = "transform 0.5s, filter 0.5s";
  });

  titleBanner.addEventListener("mouseout", () => {
    titleBanner.style.transform = "scale(1)";
    titleBanner.style.filter = "brightness(1)";
  });

  // Scroll Effect: Fade In Header
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      header.style.opacity = "0.8";
      header.style.transform = "translateY(-10px)";
      header.style.transition = "opacity 0.5s, transform 0.5s";
    } else {
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }
  });

  // Parallax Effect on Mouse Move
  header.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;

    const xPos = (offsetX / clientWidth) - 0.5;
    const yPos = (offsetY / clientHeight) - 0.5;

    titleBanner.style.transform = `translate(${xPos * 20}px, ${yPos * 20}px) scale(1.05)`;
    titleBanner.style.transition = "transform 0.2s ease";
  });

  header.addEventListener("mouseleave", () => {
    titleBanner.style.transform = "scale(1)";
  });
});