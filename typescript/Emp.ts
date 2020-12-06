export abstract class Emp {
  constructor(
    private eid: number,
    private ename: string,
    private sal: number
  ) {}

  abstract display(): void;
  abstract calcSal(): number;

  setEid(eid: number): void {
    this.eid = eid;
  }
  getEid(): number {
    return this.eid;
  }

  setEname(ename: string): void {
    this.ename = ename;
  }
  getEname(): string {
    return this.ename;
  }

  setSal(sal: number): void {
    this.sal = sal;
  }
  getSal(): number {
    return this.sal;
  }
}
