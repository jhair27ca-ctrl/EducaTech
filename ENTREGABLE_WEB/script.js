document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-registro");
    const cajaAlerta = document.getElementById("caja-alerta");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("campo-nombre").value.trim();
        const correo = document.getElementById("campo-correo").value.trim();
        const telefono = document.getElementById("campo-telefono").value.trim();
        const programa = document.getElementById("campo-programa").value;

        if (nombre === "" || correo === "" || telefono === "" || programa === "") {
            mostrarAlerta("Por favor, se requiere completar todos los campos.", "danger");
            return;
        }

        if (!correo.includes("@") || !correo.includes(".")) {
            mostrarAlerta("Por favor, ingresa un correo electrónico válido.", "warning");
            return;
        }

        if (isNaN(telefono) || telefono.length < 9) {
            mostrarAlerta("Por favor, ingresa un número de teléfono válido (solo números).", "warning");
            return;
        }

        // Si todo es correcto, mostramos un mensaje de éxito
        mostrarAlerta(`¡Registro exitoso, ${nombre}! Nos pondremos en contacto contigo muy pronto con la información de admisiones.`, "success");
        formulario.reset();
    });

    function mostrarAlerta(mensaje, tipo) {
        cajaAlerta.innerHTML = `
            <div class="alert alert-${tipo} alert-dismissible fade show shadow-sm" role="alert">
                ${mensaje}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }
});