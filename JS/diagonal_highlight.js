document.addEventListener('DOMContentLoaded',() => {
    const slider_container = document.getElementById("slider_horizontal");
    const slider_image = document.querySelectorAll(".horizontal_container");

    slider_container.addEventListener('scroll',()=>{
        const scrollTop = slider_container.scrollTop;
            slider_image.forEach((child, index) => {
            const offset = scrollTop * (index % 2 == 0 ? (index + 1) : -(index + 1)) * 5;
            child.style.transform = `translateX(${offset}px)`;
        });
    });
});
