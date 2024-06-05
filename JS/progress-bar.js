const filled = document.querySelector('.progress_bar_fill');

function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const scrolled = (scrollTop / docHeight) * 100;
    filled.style.width = `${scrolled}%`;

    requestAnimationFrame(update);
}

update();