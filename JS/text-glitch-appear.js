const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".info").forEach(element => {
    let interval = null;
    let animation = false;

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const opacity = window.getComputedStyle(element).opacity;
                if (opacity == 1 && !animation) {
                    animation = true;
                    let iteration = 0;
                    clearInterval(interval);

                    interval = setInterval(() => {
                        element.innerText = element.innerText
                            .split("")
                            .map((letter, index) => {
                                if (index < iteration) {
                                    return element.dataset.value[index];
                                }
                                return letters[Math.floor(Math.random() * 26)];
                            })
                            .join("");

                        if (iteration >= element.dataset.value.length) {
                            clearInterval(interval);
                            animation = false;
                        }

                        iteration += 1 / 2;
                    }, 30);
                }
            }
        });
    });

    observer.observe(element, {
        attributes: true
    });
});