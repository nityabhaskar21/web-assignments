let arr = ["amethi", "chandigarh", "chennai", "bangalore", "hyderabad", "mumbai"];

function sortStr() {
  arr.sort().forEach(e => console.log(e));
  console.log("-----descending order-----");
  arr.sort((a, b) => b.localeCompare(a)).forEach(e => console.log(e));
}
sortStr();