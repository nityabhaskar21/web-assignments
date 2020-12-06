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

function transform() {
  arr.map((e) => e.name.toUpperCase()).forEach((e) => console.log(e));
}

transform();