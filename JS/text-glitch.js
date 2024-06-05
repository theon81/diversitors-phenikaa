
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    document.querySelectorAll(".glitch_item").forEach(element => {
        let interval = null;
        let animation = false;

        element.addEventListener('mouseover', event => {
            if (animation) {
                return;
            }
            animation = true;
            let iteration = 0;
            clearInterval(interval);
            const glitchText = () => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
    
                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(interval);
                    animation = false;
                }
    
                iteration += 1 / 2;
            }
            interval = setInterval(glitchText,30);
        });
    }
);