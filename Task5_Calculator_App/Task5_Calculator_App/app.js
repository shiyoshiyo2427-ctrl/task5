const firstInput = document.getElementById("first-number");
const secondInput = document.getElementById("second-number");
const message = document.getElementById("message");

// Four separate operation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function calculate(operation) {
  const firstText = firstInput.value.trim();
  const secondText = secondInput.value.trim();

  // Check for blank values before converting them to numbers.
  if (firstText === "" || secondText === "") {
    showMessage("Please enter both numbers.", true);
    return;
  }

  const firstNumber = Number(firstText);
  const secondNumber = Number(secondText);

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    showMessage("Please enter valid numeric values.", true);
    return;
  }

  let result;

  if (operation === "add") {
    result = add(firstNumber, secondNumber);
  } else if (operation === "subtract") {
    result = subtract(firstNumber, secondNumber);
  } else if (operation === "multiply") {
    result = multiply(firstNumber, secondNumber);
  } else if (operation === "divide") {
    if (secondNumber === 0) {
      showMessage("Cannot divide by zero. Please enter a non-zero second number.", true);
      return;
    }
    result = divide(firstNumber, secondNumber);
  }

  showMessage(`Result: ${result}`, false);
}

function showMessage(text, isError) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

document.querySelectorAll("[data-operation]").forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button.dataset.operation);
  });
});
