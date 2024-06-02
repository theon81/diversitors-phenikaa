// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;
// let animation = false;


// // .nav-item là tên element để áp dụng cái effect, tùng code tới đoạn nav thì tự đổi tên rồi áp vào nhé
// document.querySelectorAll(".nav_item").forEach(element => {
//     element.addEventListener('mouseover', event => {
//         if(animation){
//             return;
//         }
//         animation = true;
//         let iteration = 0;
//         clearInterval(interval);

//         interval = setInterval(() => {
//             event.target.innerText = event.target.innerText
//             .split("")
//             .map((letter, index) => {
//                 if (index < iteration) {
//                 return event.target.dataset.value[index];
//                 }
//                 return letters[Math.floor(Math.random() * 26)];
//             })
//             .join("");

//             if (iteration >= event.target.dataset.value.length) {
//                 clearInterval(interval);
//                 animation = false
//             }

//             iteration += 1 / 2;
//         }, 30);
//         });
//     });

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

            interval = setInterval(() => {
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
            }, 30);
        });
    });