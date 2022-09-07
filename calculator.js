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
    display.innerText = this.currentValue.join("");
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

  calculate() {
    console.log("calculate not implemented yet");
  }
}
