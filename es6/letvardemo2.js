function display1() {
  idx = 50;
  for (let idx = 1; idx <= 5; ++idx) {
    console.log("hello" + idx);
  }
  ++idx;
  console.log('end' + idx);
}

display1();

function display2() {
  idx = 50;
  for (var idx = 1; idx <= 5; ++idx) {
    console.log("hello" + idx);
  }
  ++idx;
  console.log('end' + idx);
}

display2();