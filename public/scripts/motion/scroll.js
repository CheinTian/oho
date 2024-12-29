import { scroll, animate } from "motion"

// Pass an animation or timeline to automatically scrub
scroll(
    animate(".progress-bar", { scaleX: [0, 1] })
);

// Or pass a function to directly use the scroll info
const progress = document.querySelector(".progress")
scroll(({ y }) => {
    progress.innerHTML = y.progress.toFixed(2)
});

// // Pass an animation or timeline to automatically scrub
// scroll(
//     animate(".progress-bar", { scaleX: [0, 1] })
// );

// // Or pass a function to directly use the scroll info
// // const progress = document.querySelector(".progress")
// // scroll(({ y }) => {
// //     progress.innerHTML = y.progress.toFixed(2)
// // });

/**
 * In this demo, the circular progress indicator will start
 * when an <article /> element starts to leave the top of
 * the viewport and complete when it enters the bottom of the viewport.
 */

// scroll(animate(".progress-bar", { strokeDasharray: ["0,1", "1,1"] }), {
//     target: document.getElementById("a-article")
// });
//
// scroll(animate(".progress-bar", { strokeDasharray: ["0,1", "1,1"] }), {
//     target: document.getElementById("b-article")
// });
