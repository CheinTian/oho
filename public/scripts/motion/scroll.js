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

