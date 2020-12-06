let arr = [51, 12, 67, 8, 45];
arr.sort().forEach(e => console.log(e));
console.log("Descending order");
arr.sort((a, b) => b - a).forEach(e => console.log(e));