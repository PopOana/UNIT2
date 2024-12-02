document.addEventListener("DOMContentLoaded", function () {
    const monitorizareResurse = document.getElementById("monitorizare-resurse");
    const imageContainer = document.getElementById("image-container");
    const images = Array.from(imageContainer.querySelectorAll("img"));

    let currentIndex = 0;
    let intervalId;

    function startSlideshow() {
        images.forEach((img, index) => {
            img.style.opacity = index === currentIndex ? "1" : "0";
        });

        intervalId = setInterval(() => {
            images[currentIndex].style.opacity = "0";
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.opacity = "1";
        }, 3000);
    }

    monitorizareResurse.addEventListener("dblclick", function () {
        if (!intervalId) {
            images.forEach(img => img.style.position = "absolute");
            images[0].style.opacity = "1";
            startSlideshow();
        }
    });
});