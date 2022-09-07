(() => {
  window.addEventListener("load", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    const calculator = new Calculator(display);

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        calculator.logClick(button.value);
      });
    });
  });
})();
