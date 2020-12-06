function display(...args) {
  console.log(args);
  args.forEach((e) => console.log(e));
}

display(5, 6, 1, 2, 8, 30, 99);