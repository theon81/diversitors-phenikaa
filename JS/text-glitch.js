const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

document.querySelectorAll(".glitch_item").forEach(element => {
    let interval = null;
    let animation = false;

    const autoAppear = element.dataset.autoAppear === "true";
    const appearOnce = element.dataset.appearOnce === "true";
    const delay = parseInt(element.dataset.delay, 10) || 0;
    const animationSpeed = parseFloat(element.dataset.animationSpeed) || 1;
    const writeInOnHover = element.dataset.writeInOnHover === "true";
    let externalHovering = false;
    let appeared = 0;

    const glitchText = (event) => {
        if (animation) {
            return;
        }
        animation = true;
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            event.target.innerHTML = event.target.dataset.value
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
                animation = false;
            }

            iteration += (1 / 2) * animationSpeed;
        }, 20 / animationSpeed);
    }

    const handleMouseOver = (event) => {
        if (externalHovering || writeInOnHover) {
            glitchText(event);
        }
    }

    element.addEventListener('mouseover', handleMouseOver);

    if (autoAppear) {
        const handleScroll = () => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                if (appearOnce && appeared > 0) {
                    return;
                }
                setTimeout(() => {
                    glitchText({ target: element });
                    appeared++;
                }, delay);
                window.removeEventListener('scroll', handleScroll);
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
});