const r = 0.1;
var calc = (p, n) => {
  let si = p * n * r / 100;
  console.log(`Simple Interest = ${si}`)
}
calc(5000, 5)