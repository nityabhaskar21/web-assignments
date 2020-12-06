export class Calculator {
  amt: number;
  years: number;
  rate: number;

  calcSimple(): number {
    return (this.amt * this.years * this.rate) / 100;
  }

  calcComp(): number {
    return this.amt * Math.pow(1 + this.rate / 100, this.years) - this.amt;
  }
}
