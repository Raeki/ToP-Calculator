class Calculator {
  constructor(display) {
    this.firstValue = [];
    this.secondValue = [];
    this.currentValue = this.firstValue;
    this.operation;
    this.solution;
  }

  buttonClick(value) {
    if (this.isValidNegative(value)) {
      this.currentValue.push("-");
    } else if (this.isDecimal(value)) {
      this.pushValidDecimal();
    } else if (this.isNum(value)) {
      this.currentValue.push(value);
    } else if (this.isEquals(value)) {
      this.calculate();
    } else if (this.isClear(value)) {
      console.log("clear not implemented yet");
    } else if (!this.operation) {
      this.operation = value;
      this.currentValue = this.secondValue;
    }
    this.updateDisplay();
    console.log(this);
  }

  calculate() {
    if (this.operation) {
      const valOne = Number(this.firstValue.join(""));
      const valTwo = Number(this.secondValue.join(""));
      this.solution = this[this.operation](valOne, valTwo);
      this.resetValues(this.solution);
    }
  }

  resetValues(solution) {
    this.firstValue = String(solution).split("");
    this.secondValue = [];
    this.currentValue = this.firstValue;
    this.operation = undefined;
  }

  isNum(value) {
    return !Number.isNaN(Number(value));
  }

  isValidNegative(value) {
    return value === "subtract" && !this.currentValue.length;
  }

  isEquals(value) {
    return value === "equals";
  }

  isClear(value) {
    return value === "clear";
  }

  isDecimal(value) {
    return value === ".";
  }

  pushValidDecimal() {
    if (!this.currentValue.includes(".")) {
      this.currentValue.push(".");
    }
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

  updateDisplay() {
    display.innerText = this.currentValue.join("");
  }
}
