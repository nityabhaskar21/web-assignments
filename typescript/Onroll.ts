import { Emp } from './Emp';

export class Onroll extends Emp {
  private da: number;
  private pf: number;

  constructor(eid: number, ename: string, sal: number) {
    super(eid, ename, sal);
    this.da = this.getSal() * 0.4;
    this.pf = this.getSal() * 0.12;
  }

  display(): void {
    console.log(
      `EID: ${this.getEid()}, Ename: ${this.getEname()}, Sal: ${this.getSal()}, DA: 
      ${this.da}, PF: ${this.pf}, Days: -NA-, NetSal: ${this.calcSal()}`
    );
  }

  calcSal(): number {
    return this.getSal() + this.da - this.pf;
  }
}
