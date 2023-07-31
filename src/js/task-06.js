const validationInput = document.getElementById("validation-input");

function checkInputLength() {
    const dataLength = Number(validationInput.getAttribute("data-length"));
    const inputValue = validationInput.value.trim();
    const isValid = inputValue.length === dataLength;

    if (isValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
    } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
    }
}

validationInput.addEventListener("blur", checkInputLength);