var obj = {
  "name": "ram",
  "salary": 45000,
  "age": 22
}

var n = obj.name;
var s = obj.salary;
var a = obj.age;
console.log(n, a);

var {
  name: v1,
  salary: v2,
  age: v3
} = obj;
console.log(v1, v2, v3)