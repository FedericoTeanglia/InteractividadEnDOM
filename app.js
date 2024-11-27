// Consignas: Instrucciones para el Proyecto de Interactividad en el DOM

// Botón de modo oscuro/claro: Permitir que los usuarios cambien entre un modo oscuro y uno claro con un solo clic
const botonmodo = document.getElementById("botonmodo");
const body = document.body;
const navbarLogo = document.getElementById("navbarLogo");

botonmodo.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        botonmodo.textContent = "Modo Claro";
        navbarLogo.src = "/images/logodark-removebg-preview.png";
    } else {
        botonmodo.textContent = "Modo Oscuro";
        navbarLogo.src = "/images/WhatsApp Image 2024-10-19 at 10.37.23 AM.jpeg";
    }
});


// Validación de correo
const campoCorreo = document.getElementById("emailImput");
const botonEnviar = document.querySelector(".form button");

botonEnviar.addEventListener("click", (evento) => {
    const textoCorreo = campoCorreo.value;
    if (!textoCorreo.includes("@")) {
        evento.preventDefault();
        alert("Estamos en el 2024... ¿cómo es que aún no sabes que un correo necesita un @? 😅");
    }
});

// Carrousel de imágenes
const imagenes = document.querySelectorAll(".carrusel-imagen");
const botonAnterior = document.getElementById("antesboton");
const botonSiguiente = document.getElementById("despuesboton");

let indiceActual = 0; 

function actualizarCarrusel() {
    imagenes.forEach((imagen, index) => {
        imagen.classList.toggle("active", index === indiceActual);
    });
}

botonSiguiente.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarCarrusel();
});

botonAnterior.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarCarrusel();
});

actualizarCarrusel();
