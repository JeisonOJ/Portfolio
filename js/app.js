//selectores
const galleryLink = document.querySelector("#gallery-link");

//eventos
window.addEventListener("DOMContentLoaded",updateClass);
window.addEventListener("resize",updateClass);

function updateClass() {

    console.log(window.innerWidth<=1180);
    if (window.innerWidth<=1180) {
        galleryLink.href = "#gallery-responsive";
    } else {
        galleryLink.href = "#gallery";
    }
    
}

updateClass();