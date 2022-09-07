class Calculator {
  constructor() {
    this.firstValue = [];
    this.secondValue = [];
    this.currentValue = this.firstValue;
    this.operation;
    this.writable = true;
  }

  buttonClick(value, className) {
    if (className === "number-button") {
      this.pushNumOrDecimal(value);
      this.updateDisplay();
    }

    if (className === "operation-button") {
      this.checkOperation(value);
    }

    console.log(this);
  }

  pushNumOrDecimal(value) {
    if (this.writable) {
      if (this.isDecimal(value)) {
        this.pushDecimal();
      } else if (!this.secondValue.length && this.operation) {
        this.currentValue = this.secondValue;
        this.currentValue.push(value);
      } else {
        this.currentValue.push(value);
      }
    }
  }

  checkOperation(value) {
    if (value === "equals") {
      this.equals();
      this.updateDisplay();
    } else if (value === "clear") {
      this.clear();
      this.updateDisplay();
    } else if (value === "delete") {
      this.delete();
      this.updateDisplay();
    } else if (this.isValidNegative(value)) {
      this.pushNegative();
      this.updateDisplay();
    } else if (this.currentValue !== this.secondValue) {
      this.updateOperation(value);
    } else if (this.currentValue === this.secondValue) {
      this.equals();
      this.updateDisplay();
      this.operation = value;
      this.writable = true;
    }
  }

  calculate(operation, numOne, numTwo) {
    return String(this[operation](numOne, numTwo)).split("");
  }

  updateDisplay() {
    display.innerText = this.currentValue.join("");
  }

  updateOperation(value) {
    if (!isNaN(Number(this.firstValue.join("")))) {
      this.operation = value;
      this.currentValue = this.secondValue;
      this.writable = true;
    }
  }

  swapCurrent() {
    this.currentValue === this.firstValue ? this.secondValue : this.firstValue;
  }

  isValidNegative(value) {
    return value === "subtract" && !this.currentValue.length;
  }

  isDecimal(value) {
    return value === ".";
  }

  areNumbers(numOne, numTwo) {
    return !isNaN(numOne) && !isNaN(numTwo);
  }

  pushDecimal() {
    if (!this.currentValue.includes(".")) {
      this.currentValue.push(".");
    }
  }

  pushNegative() {
    this.currentValue.push("-");
  }

  add(valOne, valTwo) {
    return valOne + valTwo;
  }

  subtract(valOne, valTwo) {
    return valOne - valTwo;
  }

  multiply(valOne, valTwo) {
    return valOne * valTwo;
  }

  divide(valOne, valTwo) {
    return valOne / valTwo;
  }

  equals() {
    const numOne = Number(this.firstValue.join(""));
    const numTwo = Number(this.secondValue.join(""));

    if (this.operation && this.areNumbers(numOne, numTwo)) {
      this.firstValue = this.calculate(this.operation, numOne, numTwo);
      this.currentValue = this.firstValue;
      this.secondValue = [];
      this.operation = undefined;
      this.writable = false;
    }
  }

  clear() {
    this.firstValue = [];
    this.secondValue = [];
    this.currentValue = this.firstValue;
    this.operation = undefined;
    this.writable = true;
  }

  delete() {
    this.currentValue.pop();
  }
}
