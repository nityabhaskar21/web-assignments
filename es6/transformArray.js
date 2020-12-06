function transform() {
  let arr = [1, 2, 3, 4, 5];
  arr.map((e) => Math.pow(e, 2)).forEach((e) => console.log(e));
}

transform();