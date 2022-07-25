class Calculator {
  constructor () {
    this.numbers = [];
    this.operation = null;
    this.currentValue = null;
  }

  createNumber (n) {
    this.numbers.push(n);
    return this;
  }

  one () {
    return this.createNumber(1);
  }

  two () {
    return this.createNumber(2);
  }

  plus () {
    if (this.numbers.length > 1 && this.operation) {
      this.currentValue += this.numbers[0]
    }
    this.operations.push('+');
    return this;
  }
}
