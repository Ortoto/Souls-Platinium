console.log("Salut")
let bandeau = document.getElementById("bandeau_elden_ring");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        bandeau.classList.add("cache");
    } else {
        bandeau.classList.remove("cache");
    }
});