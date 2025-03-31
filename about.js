document.addEventListener("DOMContentLoaded", function () {
    const mapImage = document.querySelector(".location__map img");

    mapImage.addEventListener("click", function () {
        window.open("https://www.google.co.in/maps/place/Sanatan+Dharma+College,+Ambala+Cantt/@30.3392738,76.8512803,17z", "_blank");
    });
});
