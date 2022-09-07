class Calculator {
  constructor() {
    this.firstValue = [];
    this.secondValue = [];
    this.currentValue = this.firstValue;
    this.operation;
    this.solution;
  }

  buttonClick(value) {
    if (this.isValidNegative(value)) {
      this.currentValue.push("-");
    } else if (this.isNum(value)) {
      this.currentValue.push(value);
    } else if (this.isClear(value)) {
      console.log("clear not implemented yet");
    } else if (!this.operation) {
      this.operation = value;
      this.currentValue = this.secondValue;
    } else if (this.isEquals(value)) {
      this.calculate();
    }
    console.log(this);
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

  calculate() {
    console.log("calculate not implemented yet");
  }
}
