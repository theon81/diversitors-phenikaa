const lines = document.querySelectorAll('.text-line');
let currentLine = 0;

function animateText() {
    lines.forEach((line, index) => {
        line.style.animation = 'none'; // Reset animation
        if (index === currentLine) {
            line.style.animation = 'fadeIn 0.4s ease forwards';
            const words = line.textContent.split(' ');
            line.innerHTML = words.map((word, i) => `<span style="animation: fadeIn 0.4s ease forwards ${i * 0.4}s;">${word}</span>`).join(' ');
        } else {
            line.style.animation = 'fadeOut 0.4s ease forwards';
        }
    });

    currentLine = (currentLine + 1) % lines.length;
}

setInterval(animateText, 3000);
window.onload = animateText;