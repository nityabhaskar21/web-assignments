import { Emp } from './Emp';

export class Contract extends Emp {
  constructor(eid: number, ename: string, sal: number, private days: number) {
    super(eid, ename, sal);
  }
  display(): void {
    console.log(`EID: ${this.getEid()}, Ename: ${this.getEname()}, Sal: ${this.getSal()},
    DA: -N/A-, PF: -N/A- , Days:${this.days}, NetSal: ${this.calcSal()}`);
  }

  calcSal(): number {
    return this.getSal() * this.days;
  }
}
