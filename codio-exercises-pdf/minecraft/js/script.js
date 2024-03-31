const button = document.querySelectorAll(".btn-minecraft");
button.forEach((btn) => {
  btn.addEventListener("mouseleave", function () {
    btn.blur();
  });
});

const singleplayerButton = document.getElementById("singleplayerButton");

singleplayerButton.addEventListener("click", () => {
  window.location.href = "map/someMap.html";
});
