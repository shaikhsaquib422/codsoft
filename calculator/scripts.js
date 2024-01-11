let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
  }
}

function handleKeyPress(event) {
  const key = event.key;

  if (
    !isNaN(key) ||
    key === "." ||
    key === "/" ||
    key === "*" ||
    key === "-" ||
    key === "+"
  ) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Escape") {
    clearDisplay();
  }
}

// Event listeners
document.addEventListener("keydown", handleKeyPress);
