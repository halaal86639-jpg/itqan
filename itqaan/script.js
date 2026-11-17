const slider = document.querySelector(".phone-slider");
const after = document.querySelector(".phone-after-container");
const line = document.querySelector(".phone-line");

slider.addEventListener("input", function () {

    after.style.width = slider.value + "%";
    line.style.left = slider.value + "%";

});
