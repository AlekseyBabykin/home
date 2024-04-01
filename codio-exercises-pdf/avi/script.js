const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");

function isValidHexColor(color) {
  const regex = /^#([0-9A-F]{3}){1,2}$/i;
  return regex.test(color);
}

myButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = myInput.value;
  if (isValidHexColor(inputValue)) {
    document.body.style.backgroundColor = inputValue;
  } else {
    window.alert("is not correct");
  }
});

const colorSquar = document.getElementById("color-squar");

colorSquar.addEventListener("input", (e) => {
  e.preventDefault();
  document.body.style.backgroundColor = colorSquar.value;
});
