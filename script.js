let numberOfClicks = 0;

const btn = document.getElementById("btn");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
    numberOfClicks = numberOfClicks + 1;
    result.innerHTML = numberOfClicks;
});

// Animation begins
// code taken from one of the examples on popmotion.io
