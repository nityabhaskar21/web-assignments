let arr = [{
    "name": "ram",
    "salary": 45000
  },
  {
    "name": "rvi",
    "salary": 45000
  },
  {
    "name": "tom",
    "salary": 4500
  },
  {
    "name": "nom",
    "salary": 35000
  },
  {
    "name": "mon",
    "salary": 55000
  },
  {
    "name": "con",
    "salary": 25000
  }
]

function sortName() {
  arr.sort((a, b) => a.name.localeCompare(b.name)).forEach(e => console.log(e));

}

function sortSal() {
  arr.sort((a, b) => b.salary - a.salary).forEach(e => console.log(e))
}
sortName();
console.log("---------sort by sal----------");
sortSal();