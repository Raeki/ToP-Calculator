(() => {
  window.addEventListener("load", () => {
    // const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    const calculator = new Calculator();

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        calculator.buttonClick(button.value, button.className);
      });
    });
  });
})();
