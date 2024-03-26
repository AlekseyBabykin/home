const inputs = document.querySelectorAll("input");
const form = document.getElementById("verificationForm");

inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    const value = event.target.value;
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
    checkAndSubmitForm();
  });

  input.addEventListener("paste", (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text").trim();
    const characters = pastedText.split("");
    characters.forEach((char, charIndex) => {
      if (index + charIndex < inputs.length) {
        inputs[index + charIndex].value = char;
        if (index + charIndex < inputs.length - 1) {
          inputs[index + charIndex + 1].focus();
        }
      }
    });
    checkAndSubmitForm();
  });
});

function checkAndSubmitForm() {
  if (Array.from(inputs).every((input) => input.value.trim())) {
    form.submit();
  }
}
