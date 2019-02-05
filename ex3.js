const average = (...args) => args.reduce((acc, value) => acc + value, 0) / args.length;

console.log(average(1, 3, 6, 6));

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

console.log(average(...grades));