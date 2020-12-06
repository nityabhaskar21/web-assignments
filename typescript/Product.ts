export class Product {
  private pid: number;
  private pname: string;
  private price: number;

  setPid(pid: number): void {
    this.pid = pid;
  }
  getPid(): number {
    return this.pid;
  }

  setPname(pid: string): void {
    this.pname = pid;
  }
  getPname(): string {
    return this.pname;
  }

  setPrice(price: number): void {
    this.price = price;
  }
  getPrice(): number {
    return this.price;
  }
}
