const bgConic = document.querySelectorAll('.bg-conic');
const boxes = document.querySelectorAll('.box');

bgConic.forEach(box => {
    let rotation = 0;
    let animationId = null;

    function rotateGradient() {
        rotation += 1; // Incrementa el ángulo de rotación
        box.style.background = `conic-gradient(from ${rotation}deg at 50% 50%, oklch(83.66% .125 176.45), oklch(55.6% .1195 247.11), oklch(83.66% .125 176.45))`;

        animationId = requestAnimationFrame(rotateGradient); // Sigue solicitando la animación
    }

    box.addEventListener('mouseenter', () => {
        if (!animationId) {
            animationId = requestAnimationFrame(rotateGradient); // Comienza la animación al hacer hover si no está en curso
        }
    });

    box.addEventListener('mouseleave', () => {
        cancelAnimationFrame(animationId); // Detiene la animación al sacar el cursor
        animationId = null;
    });

    // Almacena el ángulo de rotación antes de salir del hover
    box.addEventListener('mousemove', () => {
        rotation = rotation % 360; // Limita el ángulo a un ciclo completo (360 grados)
    });

    // Restaura la animación desde el último ángulo de rotación al volver a hacer hover
    box.addEventListener('mouseenter', () => {
        if (animationId === null) {
            animationId = requestAnimationFrame(rotateGradient);
        }
    });
});
