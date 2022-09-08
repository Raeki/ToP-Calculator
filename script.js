(() => {
  window.addEventListener("load", () => {
    const buttons = document.querySelectorAll("button");

    const calculator = new Calculator();

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        calculator.buttonClick(button.value, button.className);
      });
    });

    const validOperations = {
      Enter: "equals",
      Backspace: "delete",
      Delete: "delete",
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
    };

    window.addEventListener("keydown", ev => {
      if (!isNaN(Number(ev.key))) {
        calculator.buttonClick(ev.key, "number-button");
      } else if (validOperations[ev.key]) {
        calculator.buttonClick(validOperations[ev.key], "operation-button");
      }
    });
  });
})();
