import { Calculator } from './Calculator';

function client() {
  let obj = new Calculator();
  obj.amt = 5000;
  obj.years = 5;
  obj.rate = 2.5;
  console.log(
    `Simple interest: ${obj.calcSimple()}, Compound Interest: ${obj.calcComp()} `
  );
}

client();
