const lines = document.querySelectorAll('.text-line');
let currentLine = 0;

function animateText() {
    lines.forEach((line, index) => {
        line.classList.remove('active');
        line.querySelectorAll('.container--word').forEach(span => {
            span.classList.remove('word-visible');
        });

        if (index === currentLine) {
            line.classList.add('active');
            const wordContainers = line.querySelectorAll('.container--word');
            wordContainers.forEach((container, i) => {
                setTimeout(() => {
                    container.classList.add('word-visible');
                }, i * 600); // Delay each word's animation by 0.6s
            });
        }
    });

    currentLine = (currentLine + 1) % lines.length;
}

setInterval(animateText, 3000);
window.onload = animateText;