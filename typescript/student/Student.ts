export class Student {
  // private stuId: number;
  // private stuName: string;

  // constructor(stuId: number, stuName: string) {
  //   this.stuId = stuId;
  //   this.stuName = stuName;
  // }

  constructor(private stuId: number, private stuName: string) {
    this.stuId = stuId;
    this.stuName = stuName;
  }

  display(): void {
    console.log(`Student ID: ${this.stuId}, Student Name: ${this.stuName}`);
  }

  getStuId(): number {
    return this.stuId;
  }
  setStuId(stuId: number) {
    this.stuId = stuId;
  }

  getStuName(): string {
    return this.stuName;
  }
  setStuName(stuName: string) {
    this.stuName = stuName;
  }
}
