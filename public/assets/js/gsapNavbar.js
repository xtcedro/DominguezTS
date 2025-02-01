// Wait for the DOM to fully load before running animations
document.addEventListener("DOMContentLoaded", () => {
    
    // Slide navbar from top with opacity transition
    gsap.from(".navbar", {
        y: -100, // Move from -100px to 0px
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Staggered animation for navbar links
    gsap.from(".navbar ul li", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.2, // Delay between each link animation
        ease: "power2.out"
    });

    // Hover effect for navbar links
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        link.addEventListener("mouseleave", () => {
            gsap.to(link, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});