import { Student } from './Student';

function stuCollection(): void {
  let arr: Student[] = new Array(4);

  arr[0] = new Student(10, 'aram');
  arr[1] = new Student(2, 'bram');
  arr[2] = new Student(3, 'cram');
  arr[3] = new Student(40, 'dram');
  arr[4] = new Student(5, 'eram');
  SortName(arr);
  SortId(arr);
}

function SortName(stuArr: Student[]) {
  stuArr.sort((a, b) => a.getStuName().localeCompare(b.getStuName()));
  console.log(`After name sort: ${stuArr}`);
}

function SortId(stuArr: Student[]) {
  stuArr.sort((a, b) => {
    if (a.getStuId() < b.getStuId()) {
      return -1;
    } else if (a.getStuId() > b.getStuId()) {
      return 1;
    } else {
      return 0;
    }
  });
}
