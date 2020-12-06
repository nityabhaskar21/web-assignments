import { Emp } from './Emp';
import { Onroll } from './Onroll';
import { Contract } from './Contract';
function EmpClient() {
  let arr: Emp[] = new Array(2);
  arr[0] = new Onroll(1001, 'rama', 25000);
  arr[1] = new Contract(1002, 'tom', 2000, 15);
  display(arr);
}
function display(emps: Emp[]) {
  emps.forEach(e => e.display());
}

EmpClient();
