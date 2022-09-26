const features = document.querySelector(".features");
const feautues_dropDown = document.querySelector(".fdropdown");
const feautures_imgup = document.querySelector(".farrowUp");
const features_imgdown = document.querySelector(".farrowDown");

let featGuide = false;
features.addEventListener("click", function() {
    featGuide = !featGuide;

    if (featGuide === true) {
        feautues_dropDown.style.display = "flex";
        features_imgdown.style.display = "none";
        feautures_imgup.style.display = "inline-block"
    } else {
        feautues_dropDown.style.display = "none";
        features_imgdown.style.display = "inline-block";
        feautures_imgup.style.display = "none"
    }
})

const company = document.querySelector(".company");
const company_dropDown = document.querySelector(".cdropdown");
const company_imgup = document.querySelector(".carrowUp");
const company_imgdown = document.querySelector(".carrowDown");

let compGuide = false;
company.addEventListener("click", function() {
    compGuide = !compGuide;

    if (compGuide === true) {
        company_dropDown.style.display = "flex";
        company_imgdown.style.display = "none";
        company_imgup.style.display = "inline-block"
    } else {
        company_dropDown.style.display = "none";
        company_imgdown.style.display = "inline-block";
        company_imgup.style.display = "none"
    }
})