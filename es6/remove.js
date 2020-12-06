let arr = ["amethi", "hyderabad", "boston", "haywood", "chennai", "bangalore", "mumbai"];

var remove = (city) => {
  let idx = arr.indexOf(city);
  arr.splice(idx, 1);
  arr.forEach((c) => console.log(c))
}

remove("chennai")