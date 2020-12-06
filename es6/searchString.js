let arr = ["amethi", "chandigarh", "chennai", "bangalore", "hyderabad", "mumbai"];

function findCity(city) {
  arr.sort().filter((c) => c.startsWith(city)).forEach((c) => console.log(c));
}

findCity("c")