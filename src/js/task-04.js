let counterValue = 0;

const valueSpan = document.getElementById("value");
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

function updateCounter() {
    valueSpan.textContent = counterValue;
}

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    updateCounter();
});

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    updateCounter();
});

updateCounter();