const textElement = document.getElementById("text");
const increaseBtn = document.getElementById("incr");
const decreaseBtn = document.getElementById("decr");

const MIN_FONT_SIZE = 6;
const MAX_FONT_SIZE = 100;
const STEP = 2;

increaseBtn.addEventListener("click", () => {
  increaseFontSize();
});

decreaseBtn.addEventListener("click", () => {
  decreaseFontSize();
});

function increaseFontSize() {
  let currentSize = parseInt(document.defaultView.getComputedStyle(textElement).fontSize);
  if (currentSize < MAX_FONT_SIZE) {
    textElement.style.fontSize = `${currentSize + STEP}px`;
  }
}

function decreaseFontSize() {
  let currentSize = parseInt(document.defaultView.getComputedStyle(textElement).fontSize);
  if (currentSize > MIN_FONT_SIZE) {
    textElement.style.fontSize = `${currentSize - STEP}px`;
  }
}
